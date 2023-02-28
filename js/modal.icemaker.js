// data
const iceMaker = {
  "KK-060A": {
    '설명': "60키로 제빙기",
    '제품사': "금강물산",
    '외형': "W520 X D630 X H900",
    '일일생산량': "60Kg / day",
    "중량(Kg)": "60Kg",
    '냉각방식': "공냉식",
    '정격전압': "220V 60Hz",
    '소비전력': "500W (탈빙시: 800W)",
    '사용냉매': "R404a",
  },
  "KK-060A": {
    '설명': "60키로 제빙기",
    '제품사': "금강물산",
    '외형': "W770 X D660 X H1090",
    '일일생산량': "100Kg / day",
    "중량(Kg)": "85Kg",
    '냉각방식': "공냉식",
    '정격전압': "220V 60Hz",
    '소비전력': "900W (탈빙시: 1200W)",
    '사용냉매': "R404a",
  },
};

const iceMakerModal = document.getElementById("iceMakerModal");
iceMakerModal.addEventListener("show.bs.modal", (event) => {
  // Button that triggered the modal
  const button = event.relatedTarget;
  // Extract info from data-bs-* attributes
  const recipient = button.getAttribute("data-bs-whatever");
  // If necessary, you could initiate an AJAX request here
  // and then do the updating in a callback.
  //
  // Update the modal's content.
  const modalTitle = iceMakerModal.querySelector(".modal-title");

  const modalImg = iceMakerModal.querySelector(".modal-body .product-img img")

  const modalCompany = iceMakerModal.querySelector(".company");
  const modalOut = iceMakerModal.querySelector(".outform");
  const modalDaymake = iceMakerModal.querySelector(".daymake");
  const modalKg = iceMakerModal.querySelector(".kg");
  const modalIcetype = iceMakerModal.querySelector(".icetype");
  const modalVolt = iceMakerModal.querySelector(".volt");
  const modalConsump = iceMakerModal.querySelector(".consump");
  const modalRefr = iceMakerModal.querySelector(".refr");

  modalTitle.textContent = `${recipient} 제품 설명`;

  modalImg.src = `../img/${recipient}.png`;
  modalImg.alt = `${recipient}`;

  modalCompany.textContent = `제품사: ${iceMaker[recipient]["제품사"]}`;
  modalOut.textContent = `외형: ${iceMaker[recipient]["외형"]}`;
  modalDaymake.textContent = `일일생산량: ${iceMaker[recipient]["일일생산량"]}`;
  modalKg.textContent = `중량(Kg): ${iceMaker[recipient]["중량(Kg)"]}`;
  modalIcetype.textContent = `냉각방식: ${iceMaker[recipient]["냉각방식"]}`;
  modalVolt.textContent = `정격전압: ${iceMaker[recipient]["정격전압"]}`;
  modalConsump.textContent = `소비전력: ${iceMaker[recipient]["소비전력"]}`;
  modalRefr.textContent = `사용냉매: ${iceMaker[recipient]["사용냉매"]}`;

});