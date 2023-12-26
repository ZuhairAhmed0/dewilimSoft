import React from "react";

function About() {
  return (
    <section className="about">
      <div className="container">
        <h2>من نحنا</h2>
        <div className="d-flex">
          <div>
            <h3> Dewilim شركة</h3>
            <p>
              نحن كيان متكامل نعتني بك من البداية وضع حجر الاساس الى نهاية
              مشوارك نحن نقدم مجموعة كاملة من الخدمات التقنية سهلة الاستخدام مثل
              تصميم وبرمجة مواقع الانترنت إستضافة موثوق بها. تطبيقات
              الجوال,وتطبيقات سطح المكتب ,وتصميم شعارات متخصصة ومتميزة عروض
              برمجيات , وغيرها من الخدمات.
            </p>
          </div>
          <img src="image/plan-for-more-power.png" alt="" />
        </div>
      </div>
    </section>
  );
}

export default About;
