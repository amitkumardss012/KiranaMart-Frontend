import React from "react";
import { Mail, MapPin, Phone, LucideIcon } from "lucide-react";
import StoreImage from "../../assets/img/store/KM 1.png";

const ContactAbout = () => {
  return (
    <div className="container w-full flex justify-center">
      <div className="grid md:grid-cols-2 gap-12 w-[90%]">
        <ContactDetails items={contactItems} />
        <ExploreSection text="Experience the supermarket business with high profit and low risk with
      Kirana Mart" />
      </div>
    </div>
  );
};

export default ContactAbout;

interface ContactDetailsProps {
  items: ContactItemProps[];
}

const ContactDetails: React.FC<ContactDetailsProps> = ({ items }) => (
  <div className="bg-white rounded-lg shadow-xl p-8 hover-scale">
    <h3 className="text-2xl font-bold text-gray-800 mb-6">
      How to connect with us
    </h3>
    <div className="space-y-6">
      {items.map((item, index) => (
        <ContactItem
          key={index}
          icon={item.icon}
          title={item.title}
          content={item.content}
        />
      ))}
    </div>
  </div>
);

interface ContactItemProps {
  icon: LucideIcon;
  title: string;
  content: string;
}

const contactItems: ContactItemProps[] = [
  { icon: Phone, title: "Phone", content: "+91 7061832960" },
  { icon: Mail, title: "Email", content: "connect@kiranamart.com" },
  { icon: MapPin, title: "Location", content: "o-522, Gaur City Center Noida-201318" },
];

const ContactItem: React.FC<ContactItemProps> = ({ icon: Icon, title, content }) => (
  <div className="flex items-center group">
    <div className="bg-orange-100 p-3 rounded-full group-hover:bg-green-100 transition-colors">
      <Icon className="h-6 w-6 text-orange-600 group-hover:text-green-600" />
    </div>
    <div className="ml-4">
      <p className="font-semibold text-gray-800">{title}</p>
      <p className="text-gray-600">{content}</p>
    </div>
  </div>
);


export const ExploreSection = ({text}: {text: string}) => (
  <div className="bg-[#FF6709] text-white p-8 rounded-lg shadow-xl">
    <h3 className="text-2xl font-bold mb-4">Explore and Discover</h3>
    <p className="mb-6">
      {text}
    </p>
    <img
      src={StoreImage}
      alt="Store Interior"
      className="rounded-lg w-full h-64 object-cover shadow-lg hover-scale"
    />
  </div>
);


