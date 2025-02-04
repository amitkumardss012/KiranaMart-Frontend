import { FileImage, FileText } from "lucide-react";
import {
  FaRegAddressBook,
  FaRegAddressCard,
  FaRegIdCard,
} from "react-icons/fa";
import { PiCertificateFill } from "react-icons/pi";
import CandidateProfile from "../components/franchise/CandidateProfile";
import FranchiseForm from "../components/franchise/FranchiseForm";
import Hero from "../components/franchise/Hero";
import WorkflowSteps from "../components/franchise/WorkflowSteps";
import { Card, Section } from "../components/Home/KiranaMartOverView";

const Franchise = () => {
  return (
    <>
      <div className="mt-20">
        <div className="min-h-screen bg-gradient-to-br from-white to-green-50">
          {/* Hero Section */}
          <Hero />

          {/* Forms Container */}
          <FranchiseForm />

          <CandidateProfile />

          {/* Workflow Steps */}
          <WorkflowSteps />

          {/* Documents Section */}
          <div className="flex justify-center">
            <div className="w-[90%] mb-10">
              <Section title="Documents Required">
                <Card title="Franchise Agreement" icon={FileText} />
                <Card title="Photo Required" icon={FileImage} />
                <Card title="GST Certificate" icon={PiCertificateFill} />
                <Card title="Proprietor Aadhar Copy" icon={FaRegIdCard} />
                <Card title="Business PAN Copy" icon={FaRegAddressCard} />
                <Card title="Business Address Proof" icon={FaRegAddressBook} />
              </Section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Franchise;
