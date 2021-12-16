'use strict';


/* ----------------------------- Preview ------------------------------*/

/* --- Input variables --- */
const allInput = document.querySelectorAll('.js-input');

/* --- Preview variables --- */
const namePreview = document.querySelector('.js-preview-name');
const jobPreview = document.querySelector('.js-preview-job');
const emailPreview = document.querySelector('.js-preview-email');
const phonePreview = document.querySelector('.js-preview-phone');
const linkedinPreview = document.querySelector('.js-preview-linkedin');
const githubPreview = document.querySelector('.js-preview-github');

/* --- All --- */
const data = {
  name: '',
  job: '',
  email: '',
  phone: '',
  linkedin: '',
  github: '',
  photo: '',
  palette: 1,
};
