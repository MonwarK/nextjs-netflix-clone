import SubscriptionItem from "../../components/SubscriptionItem";
import { auth, db, signOut } from "../../utilities/firebase";
import router from "next/router"
import Layout from "../../components/Layout";
import { collection, doc, getDoc, getDocs, onSnapshot, orderBy, query } from "@firebase/firestore";
import { useEffect, useState } from "react";

export default function profile({ products }) {
  const [subscriptionType, setSubscriptionType] = useState(false)

  useEffect(async () => {
    const docRef = doc(db, "users", auth.currentUser.email);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      setSubscriptionType(docSnap.data()?.subscriptionType)
    }
  }, [])

  const handleSignOut = () => {
    signOut();
    router.push("/")
  }

  return (
    <Layout isAuth={true}>
      <div className="min-h-screen grid place-items-center py-20">
        <div className="max-w-3xl w-full">
          <h1 className="text-center text-4xl font-medium mb-5">Edit Profile</h1>
            <img
              className="w-28 h-28 mb-5 mx-auto md:hidden cursor-pointer"
              src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
              alt=""
            />
          <div className="flex px-5 md:space-x-6">
            <img
              className="w-28 h-28 hidden md:block cursor-pointer"
              src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
              alt=""
            />
            <div className="flex-1">
              <h2 className="bg-gray-500 p-1 font-medium">{auth.currentUser?.email}</h2>
              {products?.map((product, i) => (
                <SubscriptionItem 
                  key={i}
                  name={product.name} 
                  description={product.description}
                  priceId={product.priceId}
                  productId={product.id}
                  subscriptionType={subscriptionType}
                />
              ))}
              <button 
                onClick={handleSignOut}
                className="btn w-full duration-100 mt-4"
              >Sign Out</button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export async function getServerSideProps() {
  const productsRef = query(collection(db, "products"), orderBy("price", "asc"))
  const productSnap = await getDocs(productsRef)

  let products = [];

  productSnap.forEach((doc) => {
    products.push({ 
      ...doc.data(), 
      id: doc.id
    });
  });

  return {
    props: {
      products,
    }
  }
}