import React from "react";

function OrderService() {
  return (
    <div className="order-service">
      <div className="container">
        <h2>طلب خدمة</h2>
        <form>
          <div className="name">
            <label>الاسم</label>
            <input type="text" id="name" required />
          </div>
          <div className="email">
            <label>الايميل</label>
            <input type="email" id="email" required />
          </div>
          <div className="typeserver">
            <label>نوع الخدمة</label>
            <select name="typeserver" id="typeserver">
              <option value="application">application</option>
              <option value="Desktop application">Desktop application</option>
              <option value="Mobile application">Mobile application</option>
              <option value="Design">Design</option>
              <option value="Markiting">Markiting</option>
            </select>
          </div>
          <div className="datestart">
            <label>تاريخ طلب الخدمة</label>
            <input type="date" id="dates" required />
          </div>
          <div className="datefinish">
            <label>تاريخ انتهاء الخدمة</label>
            <input type="date" id="datef" required />
          </div>
          <div>
            <button type="submit">إرسال</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default OrderService;
