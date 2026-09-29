import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import PageMeta from "../components/PageMeta";
import Hero from "../components/Hero";
import Strip from "../components/Strip";
import Products from "../components/Products";
import Viewer from "../components/Viewer";
import Services from "../components/Services";
import Testimonials from "../components/Testimonials";
import Values from "../components/Values";
import Process from "../components/Process";
import Company from "../components/Company";
import Faq from "../components/Faq";
import Pricing from "../components/Pricing";
import CtaBand from "../components/CtaBand";
import Contact from "../components/Contact";
import { products } from "../site";

export default function HomePage() {
  const [params, setParams] = useSearchParams();
  const fromUrl = params.get("view");
  const initial =
    products.some((product) => product.id === fromUrl) ? fromUrl : products[0].id;

  const [activeProduct, setActiveProduct] = useState(initial);

  useEffect(() => {
    if (fromUrl && products.some((product) => product.id === fromUrl)) {
      setActiveProduct(fromUrl);
    }
  }, [fromUrl]);

  const selectProduct = (id) => {
    setActiveProduct(id);
    const next = new URLSearchParams(params);
    next.set("view", id);
    setParams(next, { replace: true });
  };

  return (
    <>
      <PageMeta
        title="SELSU — Custom Software, College & Placement Platforms"
        description="SELSU builds custom software for any business, plus College Software and Placement Software for education — with website, design, campaign and training services."
      />
      <Hero />
      <Strip />
      <Products onShowProduct={selectProduct} />
      <Viewer activeId={activeProduct} onSelect={selectProduct} />
      <Services />
      <Testimonials />
      <Values />
      <Process />
      <Company />
      <Faq />
      <Pricing />
      <CtaBand />
      <Contact />
    </>
  );
}
