import React, { useState } from "react";
import InnerBanner from "../components/common/InnerBanner.jsx";
import ProductCard from "../components/shop/ProductCard.jsx";
import FilterWidget from "../components/shop/FilterWidget.jsx";
import FilterOptions from "../components/shop/FilterOptions.jsx";
import { products, img } from "../data/assets.js";
import { 
  SlidersHorizontal, 
  Search, 
  WalletCards, 
  CheckCircle2, 
  Tag, 
  Grid2X2, 
  List 
} from "../components/common/Icons.jsx";
import { ShieldCheck, Banknote, MapPinned, Truck } from "../components/common/Icons.jsx";

const sizes = ['50ml', '100ml'];

const shopBenefits = [
  { title: "Complimentary Shipping", text: "On all orders above ₹2000", icon: Truck },
  { title: "Free Samples", text: "2 samples with every order", icon: Tag },
  { title: "Secure Checkout", text: "100% encrypted transactions", icon: ShieldCheck },
  { title: "Authentic Products", text: "100% original fragrances", icon: CheckCircle2 }
];

export default function Shop() {
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("All products");
  const [size, setSize] = useState("50ml");
  
  const [sort, setSort] = useState("latest");
  const [itemsToShow, setItemsToShow] = useState(12);
  const [view, setView] = useState("grid");

  let filteredProducts = products.filter(p => {
    if (search && !p.name.toLowerCase().includes(search.toLowerCase())) return false;
    return true;
  });

  const displayedProducts = filteredProducts.slice(0, itemsToShow);

  return (
    <main className="shop-page bg-white">
      <InnerBanner title="Catalog" eyebrow="Shop SOS" text="Signature scents, gifting picks, and everyday luxury in one place." />
      
      <section className="container shop-main-section">
        <div className="shop-layout">
          <aside className="shop-sidebar" aria-label="Shop filters">
            <div className="shop-sidebar-banner" style={{ backgroundImage: `url(${img("sos-800_jpg.webp")})` }}>
              <div className="shop-sidebar-banner__content">
                <h4>Exclusive Combo</h4>
                <p>Buy any 2 full-size bottles, get 20% off.</p>
              </div>
            </div>

            <div className="shop-sidebar-box">
              <div className="shop-sidebar-title"><SlidersHorizontal size={18} /><h2>Type &amp; Browse</h2></div>
              
              <label className="shop-search" htmlFor="product-search">
                <Search size={18} />
                <input id="product-search" type="search" placeholder="Search fragrances" value={search} onChange={(event) => setSearch(event.target.value)} />
              </label>

              <FilterWidget icon={<CheckCircle2 size={17} />} title="Product status">
                <FilterOptions options={['All products', 'New arrivals', 'Best sellers']} value={status} onChange={setStatus} name="status" />
              </FilterWidget>
            </div>
          </aside>

          <div className="shop-products">
            <div className="shop-toolbar">
              <div className="shop-toolbar-header">
                <h2>All Fragrances</h2>
                <p>Showing {displayedProducts.length ? `1–${displayedProducts.length}` : '0'} of {filteredProducts.length} products</p>
              </div>
              <div className="shop-controls">
                <label>Sort:
                  <select value={sort} onChange={(event) => setSort(event.target.value)} aria-label="Sort products">
                    <option value="latest">Sort by latest</option>
                    <option value="low">Price: low to high</option>
                    <option value="high">Price: high to low</option>
                  </select>
                </label>
              </div>
            </div>
            
            <div className={`product-grid shop-grid ${view === 'list' ? 'list-view' : ''}`}>
              {displayedProducts.map((product) => (
                <ProductCard key={product.id} product={product} variant="shop" />
              ))}
            </div>
            {!filteredProducts.length && <p className="shop-empty">No fragrances match these filters.</p>}
          </div>
        </div>
      </section>
      
      <section className="benefits-strip shop-benefits" aria-label="Shopping benefits">
        <div className="container benefits-grid">
          {shopBenefits.map(({ title, text, icon: Icon }) => (
            <div className="benefit-item" key={title}>
              <span className="benefit-icon"><Icon size={24} /></span>
              <div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
