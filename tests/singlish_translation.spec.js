import { test, expect } from '@playwright/test';

const testCases = [
  { id: 'Pos_Fun_0001',
    name: 'Convert a short daily greeting phrase',
    input: 'ada dhavasa lassanai ne?' },

  { id: 'Pos_Fun_0002', 
    name: 'Convert a short imperative command',
    input: 'oyaa kiyanna' },

  { id: 'Pos_Fun_0003', 
    name: 'Convert simple sentence',
    input: 'mata thea onea.' },

  { id: 'Pos_Fun_0004', 
    name: 'Convert compound sentence',
    input: 'oyaa yanava nam, mama enavaa.' },

  { id: 'Pos_Fun_0005', 
    name: 'Convert complex sentence',
    input: 'mama aella giyea naeththea, mama asaniipa hindhaa' },

  { id: 'Pos_Fun_0006', 
    name: 'Convert positive form',
    input: 'mama krikat gahanavaa' },

  { id: 'Pos_Fun_0007', 
    name: 'Convert negative form',
    input: 'mama gaava paensalak naee' },

  { id: 'Pos_Fun_0008', 
    name: 'Convert repeated word for emphasis',
    input: 'genavaa genavaa' },

  { id: 'Pos_Fun_0009', 
    name: 'Convert sentence with request and English term',
    input: 'magee gmail account eka vaeda keranne naeththee aeyi? Google vala prashnayak dha?' },

  { id: 'Pos_Fun_0010', 
    name: 'Convert slang sentence',
    input: 'adoo ubea kaeella koo ban.' },

  { id: 'Pos_Fun_0011', 
    name: 'Convert long paragraph',
    input: 'Mata maara vadea ne unea. Udhenma magee thea ekata maessek vaetila thibbaa. ee madivata magee aduma magee athin pichchunaa. eeka hindhaa mata adha enna parakku unaa. ee nisaa adha mata hena avul.' },

  { id: 'Pos_Fun_0012', 
    name: 'Convert sentence with currency',
    input: 'tiket ekea viyadhama Rs.3000 ne?' },

  { id: 'Pos_Fun_0013', 
    name: 'Convert medium sentence with date and time',
    input: 'Mata aduma 7.00ta kalin vath heta inna onea.' },

  { id: 'Pos_Fun_0014', 
    name: 'Convert sentence with multiple spaces',
    input: 'Mata badigini.' },

  { id: 'Pos_Fun_0015', 
    name: 'Convert sentence with joined words',
    input: 'mageenamaseneli' },
  
  { id: 'Pos_Fun_0016', 
    name: 'Convert medium sentence with multiple clauses',
    input: 'mama heta koLaBA yanavaa, iita passea muhudhea raella paaganna yanavaa.' },

  { id: 'Pos_Fun_0017', 
    name: 'Convert plural form sentence',
    input: 'api kaeema kamu.' },

  { id: 'Pos_Fun_0018', 
    name: 'Convert future tense sentence',
    input: 'mama heta koLaba yanavaa.' },

  { id: 'Pos_Fun_0019', 
    name: 'Convert past tense sentence',
    input: 'mama giye senasuraadhaa palli giyaa.' },

  { id: 'Pos_Fun_0020', 
    name: 'Convert informal command',
    input: 'ehema varen.' },

  { id: 'Pos_Fun_0021', 
    name: 'Convert polite request',
    input: 'podi prashneyak. karuNaakara meakata mata uththarayak dhenna.' },

  { id: 'Pos_Fun_0022', 
    name: 'Convert polite confirmation question',
    input: 'meaka haridha kiyalaa balanna puluvan dha?' },

  { id: 'Pos_Fun_0023', 
    name: 'Convert request with urgency',
    input: 'puluvan tharam ikmanata mata meake uththarea dhennakoo.' },

  { id: 'Pos_Fun_0024', 
    name: 'Convert warning sentence',
    input: 'savan denna!' },

  { id: 'Neg_Fun_0001', 
    name: 'Convert Interrogative(questions) forms',
    input: 'ane mata amarui' },
  
  { id: 'Neg_Fun_0002', 
    name: 'Special character interference',
    input: 'mama @home innavaa' },

  { id: 'Neg_Fun_0003', 
    name: 'Spelling error and formatting mismatch in output',
    input: 'Sri Lankava dhuupathaki.' },

  { id: 'Neg_Fun_0004', 
    name: 'Character-spaced input causing corrupted translation output',
    input: 'm a m a he t a n u v a r a y a n a v a' },

  { id: 'Neg_Fun_0005', 
    name: 'Code Switching Error',
    input: 'oyaagee project ivarayidha?' },

  { id: 'Neg_Fun_0006', 
    name: 'Ambiguous vowel overloading',
    input: 'maaaamaaa gedara yanavaa' },

  { id: 'Neg_Fun_0007', 
    name: 'Conflicting consonant clusters',
    input: 'kkrriikkaat gahanavaa' },

  { id: 'Neg_Fun_0008', 
    name: 'Incorrect Singlish phoneme mapping',
    input: 'ane lamayo' },

  { id: 'Neg_Fun_0009', 
    name: 'Verb tense ambiguity',
    input: 'mama anidhdhaa enne kiyalayi hithuvea' },

  { id: 'Neg_Fun_0010', 
    name: 'Convert Mixed Senstive Case',
    input: 'mama eh sidhdhiya dhanne naee.' },

  { id: 'UI_fun_0001', 
    name: 'Converting simple sinhala text using Singlish touchpad',
    input: 'mama siQQhala Lamayek' },
];  

for (const tc of testCases) {
  test(`${tc.id} - ${tc.name}`, async ({ page }) => {

    await page.goto('https://swifttranslator.com');

    await page.fill('textarea', tc.input);

    // real-time translation
    await page.waitForTimeout(3000);

    const pageText = await page.textContent('body');
    expect(pageText).toMatch(/[\u0D80-\u0DFF]/);
  });
}