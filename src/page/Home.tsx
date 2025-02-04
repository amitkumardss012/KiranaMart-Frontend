import BusinessSrtucture from "../components/Home/BusinessSrtucture"
import CompanySupport from "../components/Home/CompanySupport"
import { ExampleFranchise } from "../components/Home/ExampleFranchise"
import { Features } from "../components/Home/features/Features"
import FinancialProjection from "../components/Home/FinancialProjection"
import Hero from "../components/Home/Hero"
import KiranaMartOverView from "../components/Home/KiranaMartOverView"
import OurProduct from "../components/Home/OurProduct"
import { OurSrviceS } from "../components/Home/OurSrvice"

const Home = () => {
  return (
    <>
    {/* Hero Section */}
    <Hero />

    {/* Business Structure Section */}
    <BusinessSrtucture />

    {/* Our Services Section */}
    <OurSrviceS />

    {/* Our Product Section */}
    <OurProduct />


    {/* FinancialProjection Section */}
    <FinancialProjection />

    {/* Why Choose Us Section */}

    {/* Company Support section */}
    <CompanySupport />

    {/* Exmaple of Our Franchise Section */}
    <ExampleFranchise />

    {/* Features Section */}
    <Features />

    {/* Kirana-mart Overview */}
    <KiranaMartOverView />
    </>
  )
}

export default Home
