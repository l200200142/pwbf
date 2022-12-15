import React from "react";
import questions from "../componen/Faq.json";
import Banner from "../componen/Banner";

export function FAQs() {
  return (
    <Banner>
        <br/>
      {questions.map((question) => (
        <Banner.Entity key={question.id}>
          <Banner.Question>{question.question}</Banner.Question>
          <Banner.Text>{question.answer}</Banner.Text>
        </Banner.Entity>
      ))}
      <h6 style={{color:'white',textAlign:'center'}} >
        Ada pertanyaan lagi? hubungi kami di <a href="https://wa.me/0851722249015">WhatsApp</a>
      </h6>
    </Banner>
  );
}

export default FAQs