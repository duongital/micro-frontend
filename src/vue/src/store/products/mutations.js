// import { MUTATE_BUNDLE_LIST, MUTATE_CARD_LIST } from "../constant";

// export const mutations = {
//   [MUTATE_BUNDLE_LIST](state, bundleList) {
//     state.bundles = bundleList.map(bundle => {
//       let overviewImg = [];
//       let detailImg = [];
//       let mainImg = [];
//       let freeImg = [];
//       bundle.images.forEach(img => {
//         if (img.name == "") {
//           return;
//         }
//         switch (img.use) {
//           case "overview":
//             overviewImg.push(img);
//             break;
//           case "details":
//             detailImg.push(img);
//             break;
//           case "main":
//             mainImg.push(img);
//             break;
//           case "free":
//             freeImg.push(img);
//             break;
//         }
//       });
//       bundle["overviewImg"] = overviewImg;
//       bundle["detailImg"] = detailImg;
//       bundle["mainImg"] = mainImg;
//       bundle["freeImg"] = freeImg;
//       return bundle;
//     });
//   },
//   [MUTATE_CARD_LIST](state, cardList) {
//     state.cards = cardList.map(card => {
//       let overviewImg = [];
//       let detailImg = [];
//       card.images.forEach(img => {
//         if (img.use == "overview" && img.name != "") {
//           overviewImg.push(img);
//         } else if (img.use == "details" && img.name != "") {
//           detailImg.push(img);
//         }
//       });
//       card["overviewImg"] = overviewImg;
//       card["detailImg"] = detailImg;
//       return card;
//     });
//   }
// };
