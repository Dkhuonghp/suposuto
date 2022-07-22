import react, { useState } from "react"
import toast from "react-hot-toast"
import "./Voucher.scss"

export default function VoucherAndPayment({
  totalCost,
  totalVoucher,
  totalPayment,
  updateVoucherInput,
  applyVoucher,
  alertResult,
  resultVoucher,
  resultApplyVoucherClass,
  totalVoucherClass,
  totalTax

}) {

  const courses = [
    {
      id: 1,
      name_1: "お急ぎ便 550円 明日お届けします",
    },
    {
      id: 2,
      name_1: "通常配送 料金無料 2022/6/8木曜日までにお届けします",
    },
  ]
  const payCourses = [
    {
      id: 1,
      name: "Paypayでお支払い",
    },
    {
      id: 2,
      name: "コンビニエンスストア",
    },
    {
      id: 3,
      name: "VISAカードでお支払い",
    },
  ]

  const handlePayment = () => {
    
  }

  const [ checked, setChecked ] = useState(1)
  
  
  const [ payChecked, setPayChecked ] = useState(3)



  // const handleChecked = (id) => {
  //   setPayChecked(prev => {
  //     const isPayChecked = payChecked.includes(id)

  //     if (isPayChecked) {
  //       return payChecked.filter(item => item !== id)
  //     } else {
  //       return [...prev, id]
  //     }
  //   })
  // }

  // const handleCheck = (id) => {
  //   setChecked(prev => {
  //     const isChecked = checked.includes(id)
  //     if (isChecked) {
  //       return checked.filter(item => item !== id)
  //     } else {
  //       return [...prev, id]
  //     }
  //   })
  // }
  const [totalPrice, setTotalPrice] = useState(0)

  return (
    <>
      <div id="voucher-and-payment">

        <div id="payment">
          <div className="voucher-and-payment-header">ご注文金額</div>
          <div className="payment-line">
            <span>商品の小計</span>
            <span id="total-bill"> ¥ {totalCost}</span>
          </div>
          {/* <div className="payment-line">
            <span>クーポン券</span>
            <span id="total-voucher">- ¥ {totalVoucher}</span>
          </div> */}

          <div className="payment-line">
            <span>消費税額 (10%)</span>
            <div style={{display:"inline-flex",}}>

              <span> ¥ {totalTax}</span>
            </div>
          </div>

          {/* <div className="payment-line total">
            <h2>合計</h2>
            <div style={{display:"inline-flex",}}>

              <h2 id="payment-line"> ¥ {totalPayment} </h2>
            </div>
          </div> */}
          
          {/* <button id="purchase" onClick={handlePayment}>購入</button> */}

          {/* <div id="payment-methods">
            <div style={{ marginBottom: 4, fontSize: 16 }}>
              Chấp nhận thanh toán
            </div>
            <div>
              <span>
                <img src="img/cash.png" alt="cash" />
                <span>Tiền mặt</span>
              </span>
              <span>
                <img src="img/internet-banking.png" alt="internet-banking" />
                <span>Internet banking</span>
              </span>
              <img src="img/visa.png" alt="visa" />
              <img src="img/master-card.png" alt="master-card" />
              <img src="img/qr-code.png" alt="qr-code" />
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
}
