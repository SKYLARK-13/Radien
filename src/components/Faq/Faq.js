import React ,{useState}from "react";
 import FAQS from "./FAQS"
import "./Faq.css";
function Faq() {


const [faqs, setfaqs] = useState([
  {
    question: "How do I cancel my appointment?",
    answer:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis maxime consequatur ipsam dolore!",
    open: true,
  },
  {
    question: "How do I cancel my appointment?",
    answer:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis maxime consequatur ipsam dolore!",
    open: false,
  },
  {
    question: "How do I cancel my appointment?",
    answer:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis maxime consequatur ipsam dolore!",
    open: false,
  },
  {
    question: "How do I cancel my appointment?",
    answer:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis maxime consequatur ipsam dolore!",
    open: false,
  },
]);

const toggleFAQ = (index) => {
  setfaqs(
    faqs.map((faq, i) => {
      if (i === index) {
        faq.open = !faq.open;
      } else {
        faq.open = false;
      }

      return faq;
    })
  );
};

  return (
    <div className="faq">
      <div className="faq_top">
        <h1>FAQ</h1>
      </div>
      <div className="faq_bottom">
        <div className="faqs">
          {faqs.map((faq, i) => (
            <FAQS faq={faq} index={i} toggleFAQ={toggleFAQ} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Faq;
