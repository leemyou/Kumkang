//data
const showcase = {
  "KRF-460DFAB": {
    "제품사" : "금강물산",
    "설명": "올 블랙 냉동 쇼케이스",
    "외형": "W650 X D580 X H1850",
    "내용적": "420L",
    "중량(Kg)": "89Kg",
    "온도/제어": "~ -18도  /  디지털온도제어",
    "냉각방식": "직접냉각방식(선반고정형)",
    "선반": 4,
    "조명": "LED등 1개",
    "정격전압": "220V 60Hz",
    "사용냉매": "R134a"
  },
  "KRF-460FAB": {
    "제품사" : "금강물산",
      "설명": "올 블랙 냉동 쇼케이스",
      "외형": "W650 X D580 X H1850",
      "내용적": "420L",
      "중량(Kg)": "89Kg",
      "온도/제어": "~ -15도  /  디지털온도제어",
      "냉각방식": "간접냉각방식",
      "선반": 4,
      "조명": "LED등 1개",
      "정격전압": "220V 60Hz",
      "사용냉매": "R134a"
  },
  "KRF-460DF": {
    "제품사" : "이지콘",
      "설명": "직냉 냉동 쇼케이스",
      "외형": "W650 X D580 X H1850",
      "내용적": "420L",
      "중량(Kg)": "89Kg",
      "온도/제어": "~ -18도  /  디지털온도제어",
      "냉각방식": "직접냉각방식(선반고정형)",
      "선반": 4,
      "조명": "LED등 1개",
      "정격전압": "220V 60Hz",
      "사용냉매": "R134a"
  },
  "KRF-460F": {
    "제품사" : "이지콘",
      "설명": "냉동 쇼케이스",
      "외형": "W650 X D580 X H1850",
      "내용적": "420L",
      "중량(Kg)": "89Kg",
      "온도/제어": "~ -15도  /  디지털온도제어",
      "냉각방식": "간접냉각방식",
      "선반": 4,
      "조명": "LED등 1개",
      "정격전압": "220V 60Hz",
      "사용냉매": "R134a"
  },
  "KRF-460PR": {
    "제품사" : "시그니처",
    "설명": "파워 냉장 쇼케이스",
      "외형": "W650 X D580 X H1850",
      "내용적": "420L",
      "중량(Kg)": "89Kg",
      "온도/제어": "~ -5도  /  디지털온도제어",
      "냉각방식": "간접냉각방식",
      "선반": 4,
      "조명": "LED등 1개",
      "정격전압": "220V 60Hz",
      "사용냉매": "R134a"
  },
  "KRF-460PRAB": {
    "제품사" : "시그니처",
    "설명": "올 블랙 파워냉장 쇼케이스",
      "외형": "W650 X D580 X H1850",
      "내용적": "420L",
      "중량(Kg)": "89Kg",
      "온도/제어": "~ -5도  /  디지털온도제어",
      "냉각방식": "간접냉각방식",
      "선반": 4,
      "조명": "LED등 1개",
      "정격전압": "220V 60Hz",
      "사용냉매": "R134a"
  },
  "KRF-550PR": {
    "제품사" : "금강물산",
    "설명": "파워 냉장 쇼케이스",
      "외형": "W756 X D615 X H1850",
      "내용적": "490L",
      "중량(Kg)": "89Kg",
      "온도/제어": "~ -5도  /  디지털온도제어",
      "냉각방식": "간접냉각방식",
      "선반": 4,
      "조명": "LED등 1개",
      "정격전압": "220V 60Hz",
      "사용냉매": "R134a"
  },
  "KRF-450R": {
    "제품사" : "이지콘",
    "설명": "냉장 쇼케이스",
      "외형": "W650 X D580 X H1850",
      "내용적": "490L",
      "중량(Kg)": "89Kg",
      "온도/제어": "+10 ~ 0도 / 아날로그온도제어",
      "냉각방식": "간접냉각방식",
      "선반": 4,
      "조명": "LED등 1개",
      "정격전압": "220V 60Hz",
      "사용냉매": "R134a"
  }
}

const showcaseModal = document.getElementById("showcaseModal");

showcaseModal.addEventListener("show.bs.modal", (event) => {
  // Button that triggered the modal
  const button = event.relatedTarget;
  // Extract info from data-bs-* attributes
  const recipient = button.getAttribute("data-bs-whatever");
  // If necessary, you could initiate an AJAX request here
  // and then do the updating in a callback.
  //
  // Update the modal's content.

  const modalTitle = showcaseModal.querySelector(".modal-title");
  
  const modalImg = showcaseModal.querySelector(".modal-body .product-img img")

  const modalCompany = showcaseModal.querySelector(".company");
  const modalOut = showcaseModal.querySelector(".outform");
  const modalInform = showcaseModal.querySelector(".inform");
  const modalKg = showcaseModal.querySelector(".kg");
  const modalTemp = showcaseModal.querySelector(".temp");
  const modalIcetype = showcaseModal.querySelector(".icetype");
  const modalShelf = showcaseModal.querySelector(".shelf");
  const modalLight = showcaseModal.querySelector(".light");
  const modalVolt = showcaseModal.querySelector(".volt");
  const modalRefr = showcaseModal.querySelector(".refr");

  modalTitle.textContent = `${recipient} 상세 설명`;
  modalImg.src = `../img/${recipient}.png`;
  modalImg.alt = `${recipient}`;
  modalCompany.textContent = `제품사: ${showcase[recipient]["제품사"]}`;
  modalOut.textContent = `외형: ${showcase[recipient]["외형"]}`;
  modalInform.textContent = `내용적: ${showcase[recipient]["내용적"]}`;
  modalKg.textContent = `중량(Kg): ${showcase[recipient]["중량(Kg)"]}`;
  modalTemp.textContent = `온도/제어: ${showcase[recipient]["온도/제어"]}`;
  modalIcetype.textContent = `냉각방식: ${showcase[recipient]["냉각방식"]}`;
  modalShelf.textContent = `선반: ${showcase[recipient]["선반"]}`;
  modalLight.textContent = `조명: ${showcase[recipient]["조명"]}`;
  modalVolt.textContent = `정격전압: ${showcase[recipient]["정격전압"]}`;
  modalRefr.textContent = `사용냉매: ${showcase[recipient]["사용냉매"]}`;
});