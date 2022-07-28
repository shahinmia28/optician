import "./app.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// components
import Header from "./components/header/Header";
import Menu from "./components/menu/Menu";
import Intro from "./components/intro/Intro";
import ViewProduct from "./components/viewProduct/ViewProduct";
import Footer from "./components/footer/Footer";
import Admin from "./components/admin/Admin";
import AdminProduct from "./components/adminProduct/AdminProduct";
import EditForm from "./components/editProduct/EditForm";

import { db } from "./firebase_config";
import {
  collection,
  getDocs,
  addDoc,
  doc,
  deleteDoc,
  updateDoc,
} from "firebase/firestore";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [products, setProducts] = useState([]);
  const productCollectionRef = collection(db, "products");

  // post Product from firebase database
  const addItem = async (product) => {
    await addDoc(productCollectionRef, product).then(() =>
      setProducts([...products, product])
    );
  };

  // Delate product Function
  const delateProduct = async (id) => {
    const productDoc = doc(db, "products", id);
    await deleteDoc(productDoc);
    setProducts(products.filter((product) => product.id !== id));
  };

  // Update Product Item
  const editItem = async (product) => {
    const productDoc = doc(db, "products", product.id);
    await updateDoc(productDoc, product).then(() => setProducts([...products]));
  };

  // Get Product from firebase database
  useEffect(() => {
    const getProduct = async () => {
      const data = await getDocs(productCollectionRef);
      setProducts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getProduct();
  }, []);

  return (
    <div className="app">
      <Router>
        <div>
          <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
          <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        </div>

        <Routes>
          <Route path={"/"} exact element={<Intro products={products} />} />
          <Route
            path={"/view/:id"}
            element={<ViewProduct products={products} />}
          />
          <Route path="/admin" element={<Admin products={products} />} />

          <Route
            path="/ds1fgh64d8fas68g7487/edit"
            element={<EditForm editItem={editItem} />}
          />
          <Route
            path="/ds1fgh64d8fas68g7487/admin_page"
            element={
              <AdminProduct
                delateProduct={delateProduct}
                products={products}
                addItem={addItem}
              />
            }
          />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
