import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import AdCreative from './pages/AdCreative'
import PreSale from './pages/PreSale'
import Quiz from './pages/Quiz'
import Match from './pages/Match'
import Shop from './pages/Shop'
import Product from './pages/Product'
import Checkout from './pages/Checkout'
import PostPurchase from './pages/PostPurchase'
import CaseStudy from './pages/CaseStudy'
import SampleBuilder from './pages/SampleBuilder'
import Method from './pages/Method'
import WorkWithMe from './pages/WorkWithMe'
import NotFound from './pages/NotFound'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/ad-creative" element={<AdCreative />} />
          <Route path="/pre-sale" element={<PreSale />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/match" element={<Match />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/product/:slug" element={<Product />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/post-purchase" element={<PostPurchase />} />
          <Route path="/case-study" element={<CaseStudy />} />
          <Route path="/sample-builder" element={<SampleBuilder />} />
          <Route path="/method" element={<Method />} />
          <Route path="/work-with-me" element={<WorkWithMe />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}