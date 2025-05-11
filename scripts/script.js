// document.addEventListener('DOMContentLoaded', function () {
//     const dfMessenger = document.querySelector('df-messenger');
//     if (dfMessenger) {
//         dfMessenger.addEventListener('df-messenger-loaded', function (event) {
//             const messengerWrapper = dfMessenger.shadowRoot.querySelector('.df-messenger-wrapper');
//             const chatWrapper = messengerWrapper.querySelector('df-messenger-chat');
//             const chatShadow = chatWrapper.shadowRoot;
//             const messageListWrapper = chatShadow.querySelector('df-message-list');
//             if (messageListWrapper) {
//                 const messageListShadow = messageListWrapper.shadowRoot;
//                 const sheet = new CSSStyleSheet();
//                 sheet.replaceSync(`
//                     #messageList message.user-message {
//                         width: fit-content;
//                         margin-left: auto;
//                     }
//                 `);
//                 messageListShadow.adoptedStyleSheets = [
//                     ...messageListShadow.adoptedStyleSheets,
//                     sheet
//                 ];
//             }
//         });
//     }
// });

const menuBtn = document.querySelector(".menu-btn");
const navigation = document.querySelector(".head-nav");

menuBtn.addEventListener("click", () => {
    navigation.classList.toggle("show");
})