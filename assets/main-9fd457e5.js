(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();document.addEventListener("DOMContentLoaded",function(){const n=document.querySelector(".header-menu-open-btn"),o=document.querySelector(".close-btn");n&&n.addEventListener("click",()=>{const r=document.querySelector(".backdrop");r&&r.classList.add("show")}),o&&o.addEventListener("click",()=>{const r=document.querySelector(".backdrop");r&&r.classList.remove("show")})});
//# sourceMappingURL=main-9fd457e5.js.map
