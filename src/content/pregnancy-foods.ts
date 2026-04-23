/**
 * PREGNANCY FOOD SAFETY DATABASE
 * =============================================================================
 * All guidance based on NHS (nhs.uk), Tommy's, and British Dietetic Association
 * sources as of April 2026. Review annually or when NHS guidance updates.
 *
 * Verdicts:
 * - safe: generally considered safe in typical amounts during pregnancy
 * - limited: safe with specific limits or conditions (the limits must be explained)
 * - avoid: NHS advises to avoid during pregnancy
 *
 * Each food has both English and Lithuanian content.
 * =============================================================================
 */

export type Verdict = 'safe' | 'limited' | 'avoid';

export type FoodCategory =
  | 'fish-seafood'
  | 'cheese-dairy'
  | 'meat'
  | 'eggs'
  | 'drinks'
  | 'herbs-supplements'
  | 'fruits-vegetables'
  | 'other';

export type PregnancyFood = {
  slug: string;
  verdict: Verdict;
  category: FoodCategory;
  // English
  name: string;
  aliases?: string[]; // alternative search terms
  summary: string; // 1-sentence verdict in plain language
  explanation: string; // longer explanation
  reason: string; // why — the clinical reason
  source: string;
  // Lithuanian
  nameLt: string;
  aliasesLt?: string[];
  summaryLt: string;
  explanationLt: string;
  reasonLt: string;
  sourceLt: string;
};

export const CATEGORIES: Record<FoodCategory, { en: string; lt: string }> = {
  'fish-seafood': { en: 'Fish & seafood', lt: 'Žuvis ir jūros gėrybės' },
  'cheese-dairy': { en: 'Cheese & dairy', lt: 'Sūris ir pieno produktai' },
  meat: { en: 'Meat', lt: 'Mėsa' },
  eggs: { en: 'Eggs', lt: 'Kiaušiniai' },
  drinks: { en: 'Drinks', lt: 'Gėrimai' },
  'herbs-supplements': { en: 'Herbs & supplements', lt: 'Žolelės ir papildai' },
  'fruits-vegetables': { en: 'Fruits & vegetables', lt: 'Vaisiai ir daržovės' },
  other: { en: 'Other', lt: 'Kita' },
};

export const pregnancyFoods: PregnancyFood[] = [
  // ==================== FISH & SEAFOOD ====================
  {
    slug: 'sushi',
    verdict: 'limited',
    category: 'fish-seafood',
    name: 'Sushi',
    aliases: ['raw fish', 'sashimi', 'nigiri', 'maki'],
    summary: 'Most UK-bought sushi is fine; raw fish at home is not.',
    explanation:
      'Sushi bought from reputable UK shops and supermarkets is generally safe because the fish has been frozen to kill parasites before use — this is a UK legal requirement. Sushi made at home from fresh (unfrozen) raw fish, or from small independent outlets where freezing cannot be confirmed, should be avoided. Cooked sushi (prawn, cooked salmon, vegetarian) is always fine.',
    reason:
      'Raw fish can carry parasites; freezing destroys them. UK shop-bought sushi is made with pre-frozen fish to meet food safety rules.',
    source: 'NHS guidance on foods to avoid in pregnancy',
    nameLt: 'Suši',
    aliasesLt: ['žalia žuvis', 'sashimi', 'nigiri', 'maki'],
    summaryLt: 'Dauguma JK parduotuvėse pirkto suši yra tinkami; namie gaminti iš žalios žuvies — ne.',
    explanationLt:
      'Suši, perkamas patikimose JK parduotuvėse ir prekybos tinkluose, paprastai saugus, nes žuvis prieš naudojimą buvo užšaldyta, kad būtų sunaikinti parazitai — JK tai teisinis reikalavimas. Suši, gaminamas namie iš šviežios (neužšaldytos) žalios žuvies ar mažose įstaigose, kur užšaldymo negalima patvirtinti, reikėtų vengti. Virtas suši (su krevetėmis, virta lašiša, daržovinis) visada tinka.',
    reasonLt:
      'Žalia žuvis gali turėti parazitų; užšaldymas juos sunaikina. JK parduotuvėse pirktas suši gaminamas iš iš anksto užšaldytos žuvies pagal maisto saugos taisykles.',
    sourceLt: 'NHS gairės dėl maisto, vengtino nėštumo metu',
  },
  {
    slug: 'tuna',
    verdict: 'limited',
    category: 'fish-seafood',
    name: 'Tuna',
    aliases: ['tinned tuna', 'fresh tuna', 'tuna steak'],
    summary: 'Up to 2 tuna steaks or 4 medium tins per week.',
    explanation:
      'Tuna is safe in pregnancy but should be limited because of its mercury content. The NHS advises no more than 2 fresh tuna steaks (about 140g cooked) per week, OR 4 medium-sized tins of tuna (140g drained) per week. This limit does not apply to other white fish.',
    reason:
      'Tuna contains more mercury than most other fish. High mercury exposure during pregnancy can affect the baby’s developing nervous system.',
    source: 'NHS guidance on fish and shellfish in pregnancy',
    nameLt: 'Tunas',
    aliasesLt: ['konservuotas tunas', 'šviežias tunas', 'tuno kepsnys'],
    summaryLt: 'Iki 2 tuno kepsnių arba 4 vidutinių konservų per savaitę.',
    explanationLt:
      'Tunas nėštumo metu saugus, bet turėtų būti ribojamas dėl gyvsidabrio kiekio. NHS rekomenduoja ne daugiau kaip 2 šviežio tuno kepsnius (apie 140 g virto) per savaitę ARBA 4 vidutinio dydžio tuno konservus (140 g nusunkto) per savaitę. Šis apribojimas netaikomas kitoms baltoms žuvims.',
    reasonLt:
      'Tune yra daugiau gyvsidabrio nei daugumoje kitų žuvų. Didelis gyvsidabrio kiekis nėštumo metu gali paveikti besivystančią kūdikio nervų sistemą.',
    sourceLt: 'NHS gairės dėl žuvies ir vėžiagyvių nėštumo metu',
  },
  {
    slug: 'salmon',
    verdict: 'safe',
    category: 'fish-seafood',
    name: 'Salmon',
    aliases: ['cooked salmon', 'oily fish'],
    summary: 'Yes — aim for 1–2 portions per week.',
    explanation:
      'Cooked salmon is not just safe in pregnancy — it is actively recommended. Oily fish provides omega-3 fatty acids that support fetal brain and eye development. The NHS advises 1–2 portions of oily fish per week during pregnancy (no more than 2, because of other contaminants).',
    reason:
      'Salmon is rich in omega-3 (DHA/EPA) and vitamin D, both important in pregnancy. Mercury levels in salmon are low.',
    source: 'NHS guidance on oily fish in pregnancy',
    nameLt: 'Lašiša',
    aliasesLt: ['virta lašiša', 'riebi žuvis'],
    summaryLt: 'Taip — siekite 1–2 porcijų per savaitę.',
    explanationLt:
      'Virta lašiša nėštumo metu ne tik saugi — ji yra aktyviai rekomenduojama. Riebi žuvis suteikia omega-3 riebalų rūgščių, kurios palaiko vaisiaus smegenų ir akių vystymąsi. NHS rekomenduoja 1–2 riebios žuvies porcijas per savaitę nėštumo metu (ne daugiau kaip 2 dėl kitų teršalų).',
    reasonLt:
      'Lašiša turtinga omega-3 (DHA/EPA) ir vitamino D, abiejų svarbių nėštumo metu. Gyvsidabrio kiekis lašišoje mažas.',
    sourceLt: 'NHS gairės dėl riebios žuvies nėštumo metu',
  },
  {
    slug: 'prawns',
    verdict: 'safe',
    category: 'fish-seafood',
    name: 'Prawns',
    aliases: ['shrimp', 'cooked prawns'],
    summary: 'Yes, as long as they are thoroughly cooked.',
    explanation:
      'Cooked prawns are safe in pregnancy. Check that they are pink and steaming hot right through — not partially cooked. Cold prawns from reputable sources (e.g. supermarket sandwiches) are also fine as long as they were fully cooked before chilling.',
    reason:
      'Cooking destroys bacteria like Listeria. Raw or undercooked shellfish can cause food poisoning, which is riskier in pregnancy.',
    source: 'NHS guidance on shellfish in pregnancy',
    nameLt: 'Krevetės',
    aliasesLt: ['virtos krevetės'],
    summaryLt: 'Taip, jei gerai išvirtos.',
    explanationLt:
      'Virtos krevetės nėštumo metu saugios. Įsitikinkite, kad jos rausvos ir gerai įkaitusios — ne iš dalies virtos. Šaltos krevetės iš patikimų šaltinių (pvz., prekybos tinklų sumuštiniai) taip pat tinka, jei prieš atšaldymą buvo visiškai išvirtos.',
    reasonLt:
      'Virimas sunaikina bakterijas, pvz., Listeria. Žalios ar neišvirtos vėžiagyvės gali sukelti apsinuodijimą maistu, o tai nėštumo metu pavojingiau.',
    sourceLt: 'NHS gairės dėl vėžiagyvių nėštumo metu',
  },
  {
    slug: 'oysters',
    verdict: 'avoid',
    category: 'fish-seafood',
    name: 'Oysters (raw)',
    aliases: ['raw oysters', 'raw shellfish'],
    summary: 'No — raw shellfish is not recommended in pregnancy.',
    explanation:
      'Raw oysters and other raw shellfish should be avoided during pregnancy. Cooked oysters are fine if thoroughly heated through.',
    reason:
      'Raw shellfish can carry harmful bacteria and viruses (Vibrio, norovirus) that cause severe food poisoning. Pregnancy increases the risk of complications from food-borne illness.',
    source: 'NHS guidance on shellfish in pregnancy',
    nameLt: 'Austrės (žalios)',
    aliasesLt: ['žalios austrės', 'žalios vėžiagyvės'],
    summaryLt: 'Ne — žalios vėžiagyvės nėštumo metu nerekomenduojamos.',
    explanationLt:
      'Žalios austrės ir kitos žalios vėžiagyvės nėštumo metu turėtų būti vengiamos. Virtos austrės tinka, jei gerai išvirtos.',
    reasonLt:
      'Žalios vėžiagyvės gali turėti žalingų bakterijų ir virusų (Vibrio, norovirus), sukeliančių stiprų apsinuodijimą maistu. Nėštumas didina apsinuodijimo maistu komplikacijų riziką.',
    sourceLt: 'NHS gairės dėl vėžiagyvių nėštumo metu',
  },
  {
    slug: 'swordfish',
    verdict: 'avoid',
    category: 'fish-seafood',
    name: 'Swordfish, marlin, shark',
    aliases: ['marlin', 'shark', 'predatory fish'],
    summary: 'No — these high-mercury fish should be avoided in pregnancy.',
    explanation:
      'Swordfish, marlin, and shark contain significantly more mercury than other fish and should be avoided entirely during pregnancy and when trying to conceive.',
    reason:
      'These are large predatory fish that accumulate high levels of mercury. Mercury can damage the developing nervous system of the baby.',
    source: 'NHS guidance on fish in pregnancy',
    nameLt: 'Durklažuvė, marlinas, ryklys',
    aliasesLt: ['marlinas', 'ryklys', 'plėšrios žuvys'],
    summaryLt: 'Ne — šios daug gyvsidabrio turinčios žuvys nėštumo metu vengtinos.',
    explanationLt:
      'Durklažuvėje, marline ir ryklyje yra gerokai daugiau gyvsidabrio nei kitose žuvyse — nėštumo metu ir planuojant nėštumą jų reikėtų visiškai vengti.',
    reasonLt:
      'Tai didelės plėšrios žuvys, kaupiančios didelį gyvsidabrio kiekį. Gyvsidabris gali pakenkti besivystančiai kūdikio nervų sistemai.',
    sourceLt: 'NHS gairės dėl žuvies nėštumo metu',
  },
  {
    slug: 'smoked-salmon',
    verdict: 'limited',
    category: 'fish-seafood',
    name: 'Smoked salmon',
    aliases: ['cold smoked fish', 'smoked trout'],
    summary: 'UK shop-bought cold-smoked salmon is considered safe; updated NHS view.',
    explanation:
      'NHS guidance was updated in recent years: cold-smoked and cured fish from reputable UK suppliers is now considered safe for most pregnant women, provided it is kept properly refrigerated and eaten within the use-by date. If you have a weakened immune system or are immunocompromised, your midwife may advise heating it through before eating.',
    reason:
      'Earlier advice to avoid cold-smoked fish was based on Listeria risk. UK production and storage standards make this risk very low for healthy pregnancies, but not zero.',
    source: 'NHS guidance on foods in pregnancy (updated)',
    nameLt: 'Rūkyta lašiša',
    aliasesLt: ['šaltai rūkyta žuvis', 'rūkytas upėtakis'],
    summaryLt: 'JK parduotuvėse pirkta šaltai rūkyta lašiša laikoma saugia — atnaujintos NHS gairės.',
    explanationLt:
      'NHS gairės pastaraisiais metais atnaujintos: šaltai rūkyta ir vytinta žuvis iš patikimų JK tiekėjų dabar laikoma saugia daugumai nėščiųjų, jei laikoma tinkamoje šaldymo temperatūroje ir suvalgoma iki galiojimo pabaigos. Jei turite susilpnėjusią imuninę sistemą, akušerė gali rekomenduoti prieš valgant ją pašildyti.',
    reasonLt:
      'Ankstesnė rekomendacija vengti šaltai rūkytos žuvies buvo paremta Listeria rizika. JK gamybos ir laikymo standartai šią riziką padaro labai mažą sveikoms nėštumo eigoms, bet ne visai nuliui.',
    sourceLt: 'NHS gairės dėl maisto nėštumo metu (atnaujintos)',
  },

  // ==================== CHEESE & DAIRY ====================
  {
    slug: 'soft-cheese',
    verdict: 'avoid',
    category: 'cheese-dairy',
    name: 'Soft mould-ripened cheese (Brie, Camembert)',
    aliases: ['brie', 'camembert', 'mould-ripened'],
    summary: 'Avoid unless cooked through until steaming hot.',
    explanation:
      'Soft mould-ripened cheeses like Brie, Camembert, chèvre (goat’s cheese with a white rind) and similar should be avoided unless they are cooked until steaming hot all the way through (e.g. baked Brie). Pasteurisation is not sufficient on its own for these cheeses.',
    reason:
      'Soft mould-ripened cheeses can contain Listeria bacteria, which grow even at fridge temperatures and can cause serious illness in pregnancy.',
    source: 'NHS guidance on cheese in pregnancy',
    nameLt: 'Minkšti pelėsiniai sūriai (Brie, Camembert)',
    aliasesLt: ['brie', 'camembert', 'pelėsinis sūris'],
    summaryLt: 'Venkite, nebent gerai išvirti iki įkaitimo.',
    explanationLt:
      'Minkštų pelėsinių sūrių, tokių kaip Brie, Camembert, ožkos sūris su balta pluta ir panašių, reikėtų vengti, nebent jie iki galo termiškai apdoroti (pvz., keptas Brie). Vien pasterizacijos šiems sūriams nepakanka.',
    reasonLt:
      'Minkšti pelėsiniai sūriai gali turėti Listeria bakterijų, kurios dauginasi net šaldytuvo temperatūroje ir nėštumo metu gali sukelti rimtą ligą.',
    sourceLt: 'NHS gairės dėl sūrio nėštumo metu',
  },
  {
    slug: 'blue-cheese',
    verdict: 'avoid',
    category: 'cheese-dairy',
    name: 'Soft blue cheese (Stilton, Gorgonzola, Roquefort)',
    aliases: ['stilton', 'gorgonzola', 'roquefort', 'danish blue'],
    summary: 'Avoid unless cooked through until steaming hot.',
    explanation:
      'Soft blue cheeses should be avoided in pregnancy unless they are cooked until steaming hot all the way through. Hard blue cheeses (such as hard Stilton) may be safer, but NHS guidance typically groups soft blues together as ones to avoid uncooked.',
    reason:
      'Blue cheeses can contain Listeria bacteria, which poses a serious risk during pregnancy.',
    source: 'NHS guidance on cheese in pregnancy',
    nameLt: 'Minkštas mėlynasis sūris (Stilton, Gorgonzola, Roquefort)',
    aliasesLt: ['stilton', 'gorgonzola', 'roquefort'],
    summaryLt: 'Venkite, nebent gerai termiškai apdorotas.',
    explanationLt:
      'Minkštų mėlynųjų sūrių nėštumo metu reikėtų vengti, nebent jie iki galo termiškai apdoroti. Kietieji mėlynieji sūriai gali būti saugesni, tačiau NHS gairės paprastai prie vengtinų žalių priskiria minkštuosius.',
    reasonLt:
      'Mėlyniesiuose sūriuose gali būti Listeria bakterijų, keliančių rimtą pavojų nėštumo metu.',
    sourceLt: 'NHS gairės dėl sūrio nėštumo metu',
  },
  {
    slug: 'hard-cheese',
    verdict: 'safe',
    category: 'cheese-dairy',
    name: 'Hard cheese (Cheddar, Parmesan, Manchego)',
    aliases: ['cheddar', 'parmesan', 'manchego', 'gouda', 'edam'],
    summary: 'Yes — all hard cheeses are safe in pregnancy.',
    explanation:
      'Hard cheeses like Cheddar, Parmesan, Gouda, Manchego, Edam, and similar are all safe to eat in pregnancy, even if made from unpasteurised milk. The low moisture content prevents Listeria growth.',
    reason:
      'Hard cheeses have too little moisture for Listeria bacteria to multiply meaningfully, regardless of whether the milk was pasteurised.',
    source: 'NHS guidance on cheese in pregnancy',
    nameLt: 'Kieti sūriai (Čederis, Parmezanas, Manchego)',
    aliasesLt: ['čederis', 'parmezanas', 'manchego', 'gouda', 'edamas'],
    summaryLt: 'Taip — visi kieti sūriai nėštumo metu saugūs.',
    explanationLt:
      'Kieti sūriai, tokie kaip Čederis, Parmezanas, Gouda, Manchego, Edamas ir panašūs, nėštumo metu saugūs, net jei pagaminti iš nepasterizuoto pieno. Mažas drėgmės kiekis neleidžia Listeria daugintis.',
    reasonLt:
      'Kieti sūriai turi per mažai drėgmės, kad Listeria bakterijos galėtų reikšmingai daugintis, nepriklausomai nuo to, ar pienas buvo pasterizuotas.',
    sourceLt: 'NHS gairės dėl sūrio nėštumo metu',
  },
  {
    slug: 'feta',
    verdict: 'safe',
    category: 'cheese-dairy',
    name: 'Feta, mozzarella, halloumi, ricotta, paneer',
    aliases: ['mozzarella', 'halloumi', 'ricotta', 'paneer', 'cottage cheese'],
    summary: 'Yes — these soft cheeses are safe if made from pasteurised milk.',
    explanation:
      'Soft cheeses that are not mould-ripened, such as Feta, Mozzarella, Halloumi, Ricotta, Paneer, Cottage cheese and cream cheese, are safe in pregnancy provided they are made from pasteurised milk. Check the label — most UK supermarket versions are pasteurised.',
    reason:
      'Pasteurisation destroys Listeria. These cheeses do not have the mould-ripening process that creates risk in Brie and Camembert.',
    source: 'NHS guidance on cheese in pregnancy',
    nameLt: 'Feta, mocarela, halumis, rikotė, paneras',
    aliasesLt: ['mocarela', 'halumis', 'rikotė', 'paneras', 'varškės sūris'],
    summaryLt: 'Taip — šie minkšti sūriai saugūs, jei pagaminti iš pasterizuoto pieno.',
    explanationLt:
      'Minkšti sūriai, kurie nėra pelėsiniai — Feta, Mocarela, Halumis, Rikotė, Paneras, varškės sūris ir kreminis sūris — nėštumo metu saugūs, jei pagaminti iš pasterizuoto pieno. Patikrinkite etiketę — dauguma JK prekybos tinkluose parduodamų yra pasterizuoti.',
    reasonLt:
      'Pasterizacija sunaikina Listeria. Šie sūriai neturi pelėsiavimo proceso, kuris sukuria riziką Brie ir Camembert sūriuose.',
    sourceLt: 'NHS gairės dėl sūrio nėštumo metu',
  },
  {
    slug: 'unpasteurised-milk',
    verdict: 'avoid',
    category: 'cheese-dairy',
    name: 'Unpasteurised milk & dairy',
    aliases: ['raw milk', 'unpasteurised yoghurt'],
    summary: 'Avoid unpasteurised (raw) milk and its products.',
    explanation:
      'Unpasteurised (raw) milk, and yoghurt, cream or cheese made from it, should be avoided in pregnancy. If only unpasteurised milk is available, it should be boiled before use.',
    reason:
      'Unpasteurised milk can contain harmful bacteria including Listeria, Salmonella, and E. coli. Pasteurisation destroys these.',
    source: 'NHS guidance on dairy in pregnancy',
    nameLt: 'Nepasterizuotas pienas ir jo produktai',
    aliasesLt: ['žalias pienas', 'nepasterizuotas jogurtas'],
    summaryLt: 'Venkite nepasterizuoto (žalio) pieno ir jo produktų.',
    explanationLt:
      'Nepasterizuoto (žalio) pieno ir iš jo pagaminto jogurto, grietinėlės ar sūrio nėštumo metu reikėtų vengti. Jei prieinamas tik nepasterizuotas pienas, jį reikia užvirinti prieš naudojimą.',
    reasonLt:
      'Nepasterizuotame piene gali būti žalingų bakterijų, įskaitant Listeria, Salmonella ir E. coli. Pasterizacija jas sunaikina.',
    sourceLt: 'NHS gairės dėl pieno produktų nėštumo metu',
  },

  // ==================== MEAT ====================
  {
    slug: 'pate',
    verdict: 'avoid',
    category: 'meat',
    name: 'Pâté (all types)',
    aliases: ['liver pate', 'vegetable pate', 'fish pate'],
    summary: 'Avoid all types of pâté during pregnancy.',
    explanation:
      'All types of pâté should be avoided in pregnancy, including meat, fish, and vegetable pâtés. This includes pâté from a tin, jar or deli.',
    reason:
      'Pâté can contain high levels of vitamin A (from liver content), which in excess can harm the baby. It also carries a Listeria risk.',
    source: 'NHS guidance on foods to avoid in pregnancy',
    nameLt: 'Paštetas (visų rūšių)',
    aliasesLt: ['kepenų paštetas', 'daržovių paštetas', 'žuvies paštetas'],
    summaryLt: 'Venkite visų rūšių pašteto nėštumo metu.',
    explanationLt:
      'Nėštumo metu reikėtų vengti visų rūšių pašteto, įskaitant mėsos, žuvies ir daržovių paštetus. Tai apima ir paštetus iš skardinių, stiklainių ar parduotuvių šaldytuvų.',
    reasonLt:
      'Paštete gali būti daug vitamino A (iš kepenų), kurio perteklius gali pakenkti kūdikiui. Taip pat kyla Listeria rizika.',
    sourceLt: 'NHS gairės dėl nėštumo metu vengtino maisto',
  },
  {
    slug: 'liver',
    verdict: 'avoid',
    category: 'meat',
    name: 'Liver',
    aliases: ['liver meat', 'liver sausage'],
    summary: 'Avoid liver and liver products during pregnancy.',
    explanation:
      'Liver and liver products (including liver sausage and pâté) should be avoided throughout pregnancy because of their very high vitamin A content.',
    reason:
      'Excess vitamin A (specifically retinol, as found in liver) is teratogenic — it can cause birth defects, especially in the first trimester.',
    source: 'NHS guidance on vitamin A in pregnancy',
    nameLt: 'Kepenys',
    aliasesLt: ['kepenų mėsa', 'kepenų dešra'],
    summaryLt: 'Venkite kepenų ir jų produktų nėštumo metu.',
    explanationLt:
      'Kepenų ir kepenų produktų (įskaitant kepenų dešrą ir paštetą) nėštumo metu reikėtų vengti dėl labai didelio vitamino A kiekio.',
    reasonLt:
      'Vitamino A perteklius (konkrečiai retinolis, randamas kepenyse) yra teratogeniškas — gali sukelti apsigimimus, ypač pirmąjį trimestrą.',
    sourceLt: 'NHS gairės dėl vitamino A nėštumo metu',
  },
  {
    slug: 'deli-meat',
    verdict: 'limited',
    category: 'meat',
    name: 'Deli meat (ham, salami, chorizo, pepperoni)',
    aliases: ['cured meat', 'cold cuts', 'ham', 'salami', 'chorizo', 'prosciutto'],
    summary: 'Safer when cooked; heat thoroughly before eating.',
    explanation:
      'Cured, fermented, or air-dried deli meats such as salami, chorizo, pepperoni, prosciutto and Parma ham carry a small risk of toxoplasmosis. Current NHS guidance advises cooking them thoroughly before eating, or freezing at -18°C for at least 4 days before use. Cooked ham and other fully cooked sliced meats are fine.',
    reason:
      'Cured rather than cooked meats may contain Toxoplasma parasites. Freezing or cooking destroys them.',
    source: 'NHS guidance on foods to avoid in pregnancy',
    nameLt: 'Vyniota mėsa (kumpis, saliamis, chorizo, peperoni)',
    aliasesLt: ['vytinta mėsa', 'šalti užkandžiai', 'kumpis', 'saliamis', 'chorizo', 'prosciutto'],
    summaryLt: 'Saugesnė virta; prieš valgant gerai iškaitinkite.',
    explanationLt:
      'Vytinta, fermentuota ar vėdinta mėsa, tokia kaip saliamis, chorizo, peperoni, prosciutto ir Parmos kumpis, turi nedidelę toksoplazmozės riziką. Dabartinės NHS gairės rekomenduoja prieš valgant ją gerai iškaitinti arba prieš naudojimą laikyti -18°C temperatūroje bent 4 dienas. Virtas kumpis ir kita visiškai virta pjaustyta mėsa tinka.',
    reasonLt:
      'Vytintoje, o ne virtoje, mėsoje gali būti Toxoplasma parazitų. Užšaldymas ar virimas juos sunaikina.',
    sourceLt: 'NHS gairės dėl nėštumo metu vengtino maisto',
  },
  {
    slug: 'undercooked-meat',
    verdict: 'avoid',
    category: 'meat',
    name: 'Rare or undercooked meat',
    aliases: ['rare steak', 'tartare', 'carpaccio', 'pink meat'],
    summary: 'Meat should be cooked through with no pink or red remaining.',
    explanation:
      'All meat — especially poultry, pork, sausages, burgers, and minced meat — should be cooked thoroughly until steaming hot with no pink or red colour remaining. Beef steak can be rare if it is a whole cut (not minced), but many midwives advise caution and recommend well-done during pregnancy.',
    reason:
      'Undercooked meat can contain Toxoplasma parasites, Salmonella, E. coli, and Campylobacter. Pregnancy raises the risks of these infections.',
    source: 'NHS guidance on meat in pregnancy',
    nameLt: 'Neišvirta ar nepakankamai iškepta mėsa',
    aliasesLt: ['retas kepsnys', 'tartare', 'karpačio', 'rausva mėsa'],
    summaryLt: 'Mėsa turi būti gerai išvirta — be rausvos ar raudonos spalvos.',
    explanationLt:
      'Visa mėsa — ypač paukštiena, kiauliena, dešrelės, mėsainiai ir malta mėsa — turi būti gerai išvirta iki įkaitimo, be rausvos ar raudonos spalvos. Jautienos kepsnys gali būti retas, jei tai visas gabalas (ne malta), bet akušerės dažnai rekomenduoja nėštumo metu rinktis gerai iškeptą.',
    reasonLt:
      'Neišvirtoje mėsoje gali būti Toxoplasma parazitų, Salmonella, E. coli ir Campylobacter. Nėštumas didina šių infekcijų riziką.',
    sourceLt: 'NHS gairės dėl mėsos nėštumo metu',
  },

  // ==================== EGGS ====================
  {
    slug: 'eggs-raw',
    verdict: 'safe',
    category: 'eggs',
    name: 'Runny or raw eggs (British Lion)',
    aliases: ['soft boiled eggs', 'poached eggs', 'raw eggs', 'runny yolk'],
    summary: 'Yes — UK British Lion eggs are safe, even raw or runny.',
    explanation:
      'Eggs stamped with the British Lion mark are safe to eat raw or runny in pregnancy — including soft-boiled, poached, mousse, mayonnaise, and fresh cake batter. Non-Lion eggs, eggs from small producers, or eggs from abroad should be cooked until yolk and white are solid.',
    reason:
      'British Lion eggs come from hens vaccinated against Salmonella and have stringent on-farm safety controls, bringing the risk of Salmonella to a very low level.',
    source: 'NHS guidance on eggs in pregnancy',
    nameLt: 'Skystas ar žalias kiaušinis (British Lion)',
    aliasesLt: ['minkštai virti kiaušiniai', 'pošeriai kiaušiniai', 'žali kiaušiniai', 'skystas trynys'],
    summaryLt: 'Taip — JK British Lion kiaušiniai saugūs, net žali ar skysti.',
    explanationLt:
      'Kiaušinius su British Lion ženklu galima valgyti žalius ar skystus ir nėštumo metu — įskaitant minkštai virtus, pošerius, musą, majonezą ir šviežią pyrago tešlą. Ne Lion kiaušinius, kiaušinius iš smulkių augintojų ar kiaušinius iš užsienio reikėtų virti, kol trynys ir baltymas sukietės.',
    reasonLt:
      'British Lion kiaušiniai atkeliauja iš vištų, paskiepytų nuo Salmonella, ir atitinka griežtus saugos reikalavimus ūkyje — Salmonella rizika tampa labai maža.',
    sourceLt: 'NHS gairės dėl kiaušinių nėštumo metu',
  },

  // ==================== DRINKS ====================
  {
    slug: 'coffee',
    verdict: 'limited',
    category: 'drinks',
    name: 'Coffee',
    aliases: ['caffeine', 'espresso', 'latte', 'cappuccino'],
    summary: 'Up to 200 mg of caffeine per day — roughly 2 mugs of instant coffee.',
    explanation:
      'Coffee is safe in moderation during pregnancy. The NHS advises keeping total daily caffeine under 200 mg. Approximate caffeine content: one mug of instant coffee ~100 mg, one mug of filter coffee ~140 mg, one espresso shot ~75 mg, one mug of tea ~75 mg, can of cola ~40 mg, 50g dark chocolate ~25 mg.',
    reason:
      'High caffeine intake during pregnancy has been associated with low birth weight and an increased risk of miscarriage. Moderate amounts have not shown these associations.',
    source: 'NHS guidance on caffeine in pregnancy',
    nameLt: 'Kava',
    aliasesLt: ['kofeinas', 'espresso', 'latte', 'kapučino'],
    summaryLt: 'Iki 200 mg kofeino per dieną — apie 2 puodeliai tirpios kavos.',
    explanationLt:
      'Kava nėštumo metu saugi saikingai. NHS rekomenduoja bendrą dienos kofeino kiekį laikyti mažiau nei 200 mg. Apytikris kofeino kiekis: puodelis tirpios kavos ~100 mg, puodelis filtro kavos ~140 mg, vienas espresso ~75 mg, puodelis arbatos ~75 mg, skardinė kolos ~40 mg, 50 g juodo šokolado ~25 mg.',
    reasonLt:
      'Didelis kofeino kiekis nėštumo metu siejamas su mažesniu kūdikio svoriu gimus ir padidėjusia persileidimo rizika. Saikingi kiekiai šių sąsajų nerodo.',
    sourceLt: 'NHS gairės dėl kofeino nėštumo metu',
  },
  {
    slug: 'alcohol',
    verdict: 'avoid',
    category: 'drinks',
    name: 'Alcohol',
    aliases: ['wine', 'beer', 'spirits'],
    summary: 'No — the safest approach in pregnancy is no alcohol.',
    explanation:
      'UK Chief Medical Officers advise that the safest approach during pregnancy is to not drink alcohol at all, to keep any risk to the baby to a minimum. There is no known safe level.',
    reason:
      'Alcohol passes to the baby through the placenta and can affect brain development and growth, particularly in the first trimester. Risk is dose-related but no threshold has been proven safe.',
    source: 'UK Chief Medical Officers, NHS guidance',
    nameLt: 'Alkoholis',
    aliasesLt: ['vynas', 'alus', 'stiprieji gėrimai'],
    summaryLt: 'Ne — saugiausia nėštumo metu alkoholio visai nevartoti.',
    explanationLt:
      'JK vyriausiųjų medicinos pareigūnų rekomendacija — saugiausia nėštumo metu alkoholio visiškai nevartoti, kad rizika kūdikiui būtų minimali. Saugaus kiekio nėra.',
    reasonLt:
      'Alkoholis per placentą pasiekia kūdikį ir gali paveikti smegenų bei augimo vystymąsi, ypač pirmąjį trimestrą. Rizika priklauso nuo dozės, bet saugi riba neįrodyta.',
    sourceLt: 'JK vyriausiųjų medicinos pareigūnų, NHS gairės',
  },
  {
    slug: 'herbal-tea',
    verdict: 'limited',
    category: 'drinks',
    name: 'Herbal teas',
    aliases: ['chamomile', 'peppermint', 'ginger tea', 'raspberry leaf'],
    summary: 'Most are fine in moderation; a few should be avoided or timed.',
    explanation:
      'Most herbal teas (ginger, peppermint, lemon) are safe in moderation — up to 4 cups per day. Raspberry leaf tea is often avoided in the first trimester and only used from 32 weeks under midwife guidance. Avoid teas containing liquorice root, sage, or unknown "detox" blends. When in doubt, check the ingredients or ask your midwife.',
    reason:
      'Herbal teas vary widely in their active compounds. Some herbs have hormonal or uterine effects that are best avoided in pregnancy.',
    source: 'NHS guidance on drinks in pregnancy',
    nameLt: 'Žolelių arbatos',
    aliasesLt: ['ramunėlių', 'mėtų', 'imbiero', 'avietės lapų'],
    summaryLt: 'Dauguma tinka saikingai; kelias verta vengti ar laiko pasirinkti.',
    explanationLt:
      'Dauguma žolelių arbatų (imbieras, mėta, citrina) saikingai saugios — iki 4 puodelių per dieną. Avietės lapų arbatos dažnai vengiama pirmąjį trimestrą ir ji vartojama tik nuo 32 savaitės, pasitarus su akušere. Venkite arbatų su saldymedžiu, šalaviju ar nežinomais „detoksikacijos” mišiniais. Abejodami patikrinkite sudedamąsias dalis arba pasitarkite su akušere.',
    reasonLt:
      'Žolelių arbatų aktyvios medžiagos labai skirtingos. Kai kurios žolelės turi hormoninį ar gimdą veikiantį poveikį, kurio nėštumo metu geriau vengti.',
    sourceLt: 'NHS gairės dėl gėrimų nėštumo metu',
  },
  {
    slug: 'energy-drinks',
    verdict: 'avoid',
    category: 'drinks',
    name: 'Energy drinks',
    aliases: ['red bull', 'monster', 'caffeine drink'],
    summary: 'Avoid — high caffeine and other stimulants make these unsuitable.',
    explanation:
      'Energy drinks should be avoided in pregnancy. They contain high levels of caffeine (often over the 200 mg daily pregnancy limit in a single can) and often additional stimulants and sugars.',
    reason:
      'High caffeine intake is associated with low birth weight and miscarriage risk. Other stimulants in energy drinks have not been evaluated for pregnancy safety.',
    source: 'NHS guidance on caffeine in pregnancy',
    nameLt: 'Energetiniai gėrimai',
    aliasesLt: ['red bull', 'monster', 'kofeino gėrimas'],
    summaryLt: 'Venkite — didelis kofeino ir kitų stimuliatorių kiekis daro juos netinkamais.',
    explanationLt:
      'Nėštumo metu energetinių gėrimų reikėtų vengti. Juose daug kofeino (dažnai viršijama 200 mg dienos riba vienoje skardinėje) ir papildomų stimuliatorių bei cukraus.',
    reasonLt:
      'Didelis kofeino kiekis siejamas su mažesniu kūdikio svoriu gimus ir persileidimo rizika. Kiti energetinių gėrimų stimuliatoriai nėštumui nebuvo įvertinti.',
    sourceLt: 'NHS gairės dėl kofeino nėštumo metu',
  },

  // ==================== HERBS & SUPPLEMENTS ====================
  {
    slug: 'vitamin-a-supplements',
    verdict: 'avoid',
    category: 'herbs-supplements',
    name: 'Vitamin A supplements (retinol)',
    aliases: ['retinol supplements', 'high-dose multivitamin'],
    summary: 'Avoid high-dose vitamin A supplements and any multivitamin not labelled for pregnancy.',
    explanation:
      'Avoid supplements containing vitamin A as retinol above the pregnancy-safe amount, and do not take standard multivitamins unless they are specifically formulated for pregnancy. Pregnancy multivitamins contain safe, controlled levels.',
    reason:
      'Excess vitamin A as retinol is teratogenic — it can cause birth defects, particularly in the first trimester. Beta-carotene (from vegetables) is not a concern.',
    source: 'NHS guidance on vitamins in pregnancy',
    nameLt: 'Vitamino A papildai (retinolis)',
    aliasesLt: ['retinolio papildai', 'didelės dozės multivitaminas'],
    summaryLt: 'Venkite didelių dozių vitamino A papildų ir bet kokio multivitamino, nepažymėto nėštumui.',
    explanationLt:
      'Venkite papildų, kuriuose yra vitamino A kaip retinolio, viršijančių nėštumui saugų kiekį. Nevartokite standartinių multivitaminų, jei jie nėra specialiai skirti nėštumui. Nėštumo multivitaminai turi saugius, kontroliuojamus kiekius.',
    reasonLt:
      'Vitamino A kaip retinolio perteklius teratogeniškas — gali sukelti apsigimimus, ypač pirmąjį trimestrą. Beta karotinas (iš daržovių) nekelia rizikos.',
    sourceLt: 'NHS gairės dėl vitaminų nėštumo metu',
  },
  {
    slug: 'folic-acid',
    verdict: 'safe',
    category: 'herbs-supplements',
    name: 'Folic acid',
    aliases: ['folate supplement', 'vitamin B9'],
    summary: 'Yes — 400 micrograms daily from before conception to 12 weeks.',
    explanation:
      'Folic acid is not only safe in pregnancy but actively recommended. The standard dose is 400 micrograms daily, starting at least one month before conception and through the first 12 weeks. Some women need a higher dose of 5 mg — this is on prescription for women with diabetes, BMI over 30, certain epilepsy medications, or a previous neural tube defect pregnancy.',
    reason:
      'Folic acid supplementation reduces the risk of neural tube defects like spina bifida by around 70%.',
    source: 'NHS guidance on folic acid in pregnancy',
    nameLt: 'Folio rūgštis',
    aliasesLt: ['folato papildas', 'vitaminas B9'],
    summaryLt: 'Taip — 400 mikrogramų per dieną nuo iki apvaisinimo iki 12 savaitės.',
    explanationLt:
      'Folio rūgštis nėštumo metu ne tik saugi — ji aktyviai rekomenduojama. Standartinė dozė — 400 mikrogramų per dieną, pradedant bent mėnesį prieš apvaisinimą ir tęsiant per pirmąsias 12 savaičių. Kai kurioms moterims reikia didesnės 5 mg dozės — ji skiriama receptu moterims su diabetu, KMI virš 30, vartojančioms tam tikrus vaistus nuo epilepsijos ar po ankstesnio nėštumo su neuralinio vamzdelio defektu.',
    reasonLt:
      'Folio rūgšties papildai sumažina neuralinio vamzdelio defektų, tokių kaip stuburo nesuaugimas, riziką apie 70%.',
    sourceLt: 'NHS gairės dėl folio rūgšties nėštumo metu',
  },
  {
    slug: 'vitamin-d',
    verdict: 'safe',
    category: 'herbs-supplements',
    name: 'Vitamin D',
    aliases: ['vitamin d3', 'cholecalciferol'],
    summary: 'Yes — 10 micrograms (400 IU) daily throughout pregnancy.',
    explanation:
      'Vitamin D is actively recommended in pregnancy. The NHS advises 10 micrograms (400 IU) daily, year-round, for all pregnant and breastfeeding women. Many pregnancy multivitamins include this amount.',
    reason:
      'Vitamin D supports the baby’s bone and tooth development. Most UK adults are insufficient in vitamin D for part of the year.',
    source: 'NHS guidance on vitamins in pregnancy',
    nameLt: 'Vitaminas D',
    aliasesLt: ['vitaminas d3', 'cholekalciferolis'],
    summaryLt: 'Taip — 10 mikrogramų (400 TV) per dieną visą nėštumą.',
    explanationLt:
      'Vitaminas D nėštumo metu aktyviai rekomenduojamas. NHS rekomenduoja 10 mikrogramų (400 TV) per dieną ištisus metus visoms nėščiosioms ir žindyvėms. Daugumoje nėštumo multivitaminų šis kiekis yra.',
    reasonLt:
      'Vitaminas D palaiko kūdikio kaulų ir dantų vystymąsi. Dauguma JK suaugusiųjų dalį metų turi nepakankamą vitamino D lygį.',
    sourceLt: 'NHS gairės dėl vitaminų nėštumo metu',
  },
  {
    slug: 'liquorice',
    verdict: 'limited',
    category: 'herbs-supplements',
    name: 'Liquorice (and liquorice root)',
    aliases: ['licorice', 'liquorice tea'],
    summary: 'Small amounts in sweets are fine; avoid liquorice root tea or supplements.',
    explanation:
      'Occasional small amounts of liquorice sweets are generally fine, but pure liquorice root, liquorice root tea, and high-dose liquorice supplements should be avoided. Guidance varies — Finnish research suggests limiting liquorice more strictly.',
    reason:
      'Glycyrrhizin in liquorice root can affect stress hormones and has been associated in some studies with preterm birth and effects on the baby.',
    source: 'UK and European pregnancy guidance',
    nameLt: 'Saldymedis (ir saldymedžio šaknis)',
    aliasesLt: ['saldymedžio arbata', 'saldymedžio ekstraktas'],
    summaryLt: 'Nedideli kiekiai saldainiuose tinka; venkite saldymedžio arbatos ar papildų.',
    explanationLt:
      'Nedideli saldymedžio saldainių kiekiai retkarčiais paprastai tinka, bet gryno saldymedžio šaknies, saldymedžio arbatos ir didelės dozės saldymedžio papildų reikėtų vengti. Gairės skiriasi — suomių tyrimai siūlo griežčiau riboti.',
    reasonLt:
      'Saldymedžio šaknies glicirizinas gali veikti streso hormonus ir kai kuriuose tyrimuose siejamas su ankstesniu gimdymu ir poveikiu kūdikiui.',
    sourceLt: 'JK ir Europos nėštumo gairės',
  },

  // ==================== FRUITS & VEGETABLES ====================
  {
    slug: 'pineapple',
    verdict: 'safe',
    category: 'fruits-vegetables',
    name: 'Pineapple',
    aliases: ['ananas', 'bromelain'],
    summary: 'Yes — pineapple is safe in normal amounts.',
    explanation:
      'Pineapple is safe to eat throughout pregnancy in normal portions. The common myth that pineapple causes miscarriage is not supported by evidence — you would need to eat impossible quantities to get meaningful amounts of bromelain from fresh fruit.',
    reason:
      'Pineapple contains bromelain, but the amount in fresh fruit is far too low to affect the uterus. Concentrated bromelain supplements are a separate matter and should be avoided.',
    source: 'Pregnancy dietary guidance',
    nameLt: 'Ananasas',
    aliasesLt: ['bromelainas'],
    summaryLt: 'Taip — ananasas saugus normaliais kiekiais.',
    explanationLt:
      'Ananasą visą nėštumą galima valgyti normaliomis porcijomis. Paplitęs mitas, kad ananasas sukelia persileidimą, nėra paremtas įrodymais — reikėtų suvalgyti neįmanomus kiekius, kad gautumėte reikšmingą bromelaino kiekį iš šviežio vaisiaus.',
    reasonLt:
      'Ananase yra bromelaino, bet jo kiekis šviežiame vaisiuje pernelyg mažas, kad paveiktų gimdą. Koncentruoti bromelaino papildai yra atskiras klausimas — jų reikėtų vengti.',
    sourceLt: 'Nėštumo mitybos gairės',
  },
  {
    slug: 'unwashed-veg',
    verdict: 'limited',
    category: 'fruits-vegetables',
    name: 'Raw vegetables & salad',
    aliases: ['salad', 'raw veg', 'lettuce', 'bagged salad'],
    summary: 'Safe — but wash thoroughly before eating.',
    explanation:
      'Raw vegetables and salad are a great part of pregnancy nutrition, but must be washed thoroughly before eating. This includes bagged pre-washed salad, which NHS guidance still recommends rinsing. Avoid any salad from buffets or outlets where freshness is uncertain.',
    reason:
      'Soil residues can carry Toxoplasma, Listeria, and E. coli. Washing removes most of this risk.',
    source: 'NHS guidance on food hygiene in pregnancy',
    nameLt: 'Žalios daržovės ir salotos',
    aliasesLt: ['salotos', 'žalios daržovės', 'lapinės salotos', 'pakuotės salotos'],
    summaryLt: 'Saugu — bet prieš valgant gerai nuplauti.',
    explanationLt:
      'Žalios daržovės ir salotos — puiki nėštumo mitybos dalis, bet prieš valgant jas reikia gerai nuplauti. Tai apima ir iš anksto nuplautas pakuotės salotas — NHS vis tiek rekomenduoja jas perplauti. Venkite salotų iš bufetų ar vietų, kur šviežumas neaiškus.',
    reasonLt:
      'Ant daržovių likusi dirva gali turėti Toxoplasma, Listeria ir E. coli. Plovimas pašalina didžiąją dalį rizikos.',
    sourceLt: 'NHS gairės dėl maisto higienos nėštumo metu',
  },
  {
    slug: 'papaya-unripe',
    verdict: 'limited',
    category: 'fruits-vegetables',
    name: 'Papaya (unripe/green)',
    aliases: ['green papaya', 'papaya latex'],
    summary: 'Ripe papaya is fine; avoid unripe/green papaya.',
    explanation:
      'Fully ripe (orange/yellow) papaya is safe in pregnancy. Unripe or semi-ripe green papaya contains latex and enzymes that may trigger uterine contractions and should be avoided.',
    reason:
      'Unripe papaya contains papain and a higher latex content, which in some studies have been associated with uterine stimulation.',
    source: 'Pregnancy dietary guidance',
    nameLt: 'Papaja (neprinokusi/žalia)',
    aliasesLt: ['žalia papaja', 'papajos pienelis'],
    summaryLt: 'Prinokusi papaja saugi; venkite neprinokusios/žalios.',
    explanationLt:
      'Visiškai prinokusi (oranžinė/geltona) papaja nėštumo metu saugi. Neprinokusioje ar pusiau prinokusioje žalioje papajoje yra pienelio ir fermentų, galinčių sukelti gimdos susitraukimus — jos reikėtų vengti.',
    reasonLt:
      'Neprinokusioje papajoje yra daugiau papaino ir pienelio, kurie kai kuriuose tyrimuose siejami su gimdos stimuliacija.',
    sourceLt: 'Nėštumo mitybos gairės',
  },

  // ==================== OTHER ====================
  {
    slug: 'peanuts',
    verdict: 'safe',
    category: 'other',
    name: 'Peanuts',
    aliases: ['nuts', 'peanut butter'],
    summary: 'Yes — peanuts are safe and may reduce allergy risk in the baby.',
    explanation:
      'Peanuts and other nuts are safe to eat in pregnancy, unless you have a nut allergy yourself. Previous advice to avoid peanuts in pregnancy has been reversed — current evidence suggests eating peanuts during pregnancy may reduce the baby’s risk of peanut allergy.',
    reason:
      'The old concern about peanuts causing allergies in the baby has not been supported by more recent research. Avoiding peanuts does not prevent allergies and may slightly increase them.',
    source: 'NHS guidance on nuts in pregnancy',
    nameLt: 'Žemės riešutai',
    aliasesLt: ['riešutai', 'žemės riešutų sviestas'],
    summaryLt: 'Taip — žemės riešutai saugūs ir gali sumažinti kūdikio alergijos riziką.',
    explanationLt:
      'Žemės riešutai ir kiti riešutai nėštumo metu saugūs, nebent jūs patys turite alergiją riešutams. Ankstesnės rekomendacijos nėštumo metu vengti žemės riešutų buvo atšauktos — dabartiniai įrodymai rodo, kad žemės riešutų vartojimas nėštumo metu gali sumažinti kūdikio alergijos žemės riešutams riziką.',
    reasonLt:
      'Senas rūpestis, kad žemės riešutai sukelia kūdikio alergiją, naujausiais tyrimais nepasitvirtino. Vengimas nėra prevencija ir gali riziką šiek tiek padidinti.',
    sourceLt: 'NHS gairės dėl riešutų nėštumo metu',
  },
  {
    slug: 'honey',
    verdict: 'safe',
    category: 'other',
    name: 'Honey',
    aliases: ['raw honey', 'manuka honey'],
    summary: 'Yes — honey is safe for pregnant women (but not for babies under 1).',
    explanation:
      'Honey is safe to eat during pregnancy. The common warning about honey applies only to babies under one year old, not to pregnant women — the adult digestive system handles any Clostridium botulinum spores safely.',
    reason:
      'Adult gut bacteria and stomach acid prevent botulinum spores from causing harm. Infant guts cannot, which is why the warning exists for under-ones.',
    source: 'NHS guidance on honey',
    nameLt: 'Medus',
    aliasesLt: ['šviežias medus', 'manuka medus'],
    summaryLt: 'Taip — medus nėščiosioms saugus (bet ne kūdikiams iki 1 metų).',
    explanationLt:
      'Medus nėštumo metu saugus. Paplitęs įspėjimas dėl medaus taikomas tik kūdikiams iki vienerių metų, o ne nėščiosioms — suaugusio žmogaus virškinimo sistema saugiai susidoroja su bet kokiais Clostridium botulinum sporomis.',
    reasonLt:
      'Suaugusio žmogaus žarnyno bakterijos ir skrandžio rūgštis neleidžia botulinum sporoms pakenkti. Kūdikių žarnynas to dar negali — todėl įspėjimas galioja vaikams iki 1 metų.',
    sourceLt: 'NHS gairės dėl medaus',
  },
  {
    slug: 'hot-drinks-spicy',
    verdict: 'safe',
    category: 'other',
    name: 'Spicy food',
    aliases: ['chilli', 'curry', 'hot food'],
    summary: 'Yes — spicy food is safe throughout pregnancy.',
    explanation:
      'Spicy food is safe throughout pregnancy. It may increase heartburn or reflux (especially in the third trimester), but it does not harm the baby. Old myths about spicy food "starting labour" are not supported by evidence.',
    reason:
      'Capsaicin and other spice compounds do not cross the placenta in amounts that affect the baby. The main practical issue is maternal reflux.',
    source: 'Pregnancy dietary guidance',
    nameLt: 'Aštrus maistas',
    aliasesLt: ['aitrus', 'karis', 'aštrus patiekalas'],
    summaryLt: 'Taip — aštrus maistas saugus visą nėštumą.',
    explanationLt:
      'Aštrus maistas saugus visą nėštumą. Jis gali sustiprinti rėmenį ar refliuksą (ypač trečią trimestrą), bet kūdikio nepakenkia. Senų mitų, kad aštrus maistas „sukelia gimdymą”, įrodymai nepalaiko.',
    reasonLt:
      'Kapsaicinas ir kitos prieskonių medžiagos per placentą nepatenka tokiais kiekiais, kurie paveiktų kūdikį. Pagrindinė praktinė problema — motinos refliuksas.',
    sourceLt: 'Nėštumo mitybos gairės',
  },
  {
    slug: 'sweeteners',
    verdict: 'safe',
    category: 'other',
    name: 'Artificial sweeteners',
    aliases: ['aspartame', 'stevia', 'sucralose', 'saccharin'],
    summary: 'Most approved sweeteners are safe in normal amounts.',
    explanation:
      'Artificial sweeteners approved for use in the UK — including aspartame, sucralose, stevia, and saccharin — are considered safe in normal amounts during pregnancy. The exception is cyclamate (banned in some countries) and any unregulated "natural" sweeteners. Most UK food labels will only show approved sweeteners.',
    reason:
      'Approved sweeteners have been tested for pregnancy safety at typical intake levels.',
    source: 'UK Food Standards Agency, NHS guidance',
    nameLt: 'Dirbtiniai saldikliai',
    aliasesLt: ['aspartamas', 'stevija', 'sukralozė', 'sacharinas'],
    summaryLt: 'Dauguma patvirtintų saldiklių saugūs normaliais kiekiais.',
    explanationLt:
      'JK patvirtinti dirbtiniai saldikliai — aspartamas, sukralozė, stevija ir sacharinas — nėštumo metu laikomi saugiais normaliais kiekiais. Išimtis — ciklamatas (kai kur uždraustas) ir bet kokie nereglamentuoti „natūralūs” saldikliai. JK maisto etiketėse rodomi tik patvirtinti saldikliai.',
    reasonLt:
      'Patvirtinti saldikliai buvo ištirti dėl saugumo nėštumo metu tipiniais vartojimo kiekiais.',
    sourceLt: 'JK maisto standartų agentūra, NHS gairės',
  },

  // ==================== BATCH 1: FISH & SEAFOOD EXPANSION ====================
  {
    slug: 'mackerel',
    verdict: 'safe',
    category: 'fish-seafood',
    name: 'Mackerel',
    aliases: ['smoked mackerel', 'tinned mackerel'],
    summary: 'Yes — mackerel is safe and recommended as oily fish.',
    explanation:
      'Mackerel is safe and actively recommended in pregnancy as one of the oily fish to include 1–2 times per week. Both fresh and tinned mackerel are fine. Smoked mackerel falls under the same updated NHS guidance as smoked salmon — generally considered safe from reputable UK suppliers.',
    reason:
      'Mackerel is rich in omega-3 fatty acids (DHA/EPA) which support fetal brain and eye development. Mercury levels are low.',
    source: 'NHS guidance on oily fish in pregnancy',
    nameLt: 'Skumbrė',
    aliasesLt: ['rūkyta skumbrė', 'konservuota skumbrė'],
    summaryLt: 'Taip — skumbrė saugi ir rekomenduojama kaip riebi žuvis.',
    explanationLt:
      'Skumbrė nėštumo metu saugi ir rekomenduojama kaip viena iš riebių žuvų, vartotinų 1–2 kartus per savaitę. Tinka ir šviežia, ir konservuota. Rūkyta skumbrė patenka į tas pačias atnaujintas NHS gaires kaip rūkyta lašiša — paprastai laikoma saugia iš patikimų JK tiekėjų.',
    reasonLt:
      'Skumbrė turtinga omega-3 riebalų rūgščių (DHA/EPA), kurios palaiko vaisiaus smegenų ir akių vystymąsi. Gyvsidabrio kiekis mažas.',
    sourceLt: 'NHS gairės dėl riebios žuvies nėštumo metu',
  },
  {
    slug: 'sardines',
    verdict: 'safe',
    category: 'fish-seafood',
    name: 'Sardines',
    aliases: ['tinned sardines', 'pilchards'],
    summary: 'Yes — excellent source of omega-3 and calcium.',
    explanation:
      'Sardines are safe and one of the best pregnancy foods. Tinned sardines (with bones) also provide calcium. Include as part of the recommended 1–2 oily fish portions per week.',
    reason:
      'Sardines provide omega-3, protein, vitamin D, and calcium — all important in pregnancy. Because they are small fish low in the food chain, mercury levels are very low.',
    source: 'NHS guidance on oily fish in pregnancy',
    nameLt: 'Sardinės',
    aliasesLt: ['konservuotos sardinės', 'pilčardai'],
    summaryLt: 'Taip — puikus omega-3 ir kalcio šaltinis.',
    explanationLt:
      'Sardinės nėštumo metu saugios ir yra vienas geriausių maistų. Konservuotos sardinės (su kaulais) dar suteikia kalcio. Įtraukite kaip dalį rekomenduojamų 1–2 riebių žuvų porcijų per savaitę.',
    reasonLt:
      'Sardinės suteikia omega-3, baltymų, vitamino D ir kalcio — visa tai svarbu nėštumo metu. Būdamos mažos žuvys, esančios maisto grandinės pradžioje, jos turi labai mažai gyvsidabrio.',
    sourceLt: 'NHS gairės dėl riebios žuvies nėštumo metu',
  },
  {
    slug: 'trout',
    verdict: 'safe',
    category: 'fish-seafood',
    name: 'Trout',
    aliases: ['rainbow trout', 'sea trout'],
    summary: 'Yes — trout is a safe and recommended oily fish.',
    explanation:
      'Trout is safe to eat throughout pregnancy and counts toward the recommended 1–2 portions of oily fish per week. Both rainbow trout and sea trout are fine when cooked thoroughly.',
    reason:
      'Trout provides omega-3 fatty acids without the mercury concerns of larger predatory fish.',
    source: 'NHS guidance on oily fish in pregnancy',
    nameLt: 'Upėtakis',
    aliasesLt: ['vaivorykštinis upėtakis', 'jūros upėtakis'],
    summaryLt: 'Taip — upėtakis yra saugi ir rekomenduojama riebi žuvis.',
    explanationLt:
      'Upėtakis nėštumo metu saugus ir priskaitomas prie rekomenduojamų 1–2 riebios žuvies porcijų per savaitę. Ir vaivorykštinis upėtakis, ir jūros upėtakis tinka, kai gerai išvirti.',
    reasonLt:
      'Upėtakis suteikia omega-3 riebalų rūgščių be didelių plėšrių žuvų gyvsidabrio rūpesčio.',
    sourceLt: 'NHS gairės dėl riebios žuvies nėštumo metu',
  },
  {
    slug: 'cod',
    verdict: 'safe',
    category: 'fish-seafood',
    name: 'Cod',
    aliases: ['white fish', 'baked cod'],
    summary: 'Yes — cod is safe with no weekly limit.',
    explanation:
      'Cod and other white fish (haddock, plaice, pollock) are safe throughout pregnancy when thoroughly cooked. There is no weekly limit on white fish, unlike oily fish.',
    reason:
      'White fish has very low mercury and no weekly limit applies. It is a lean protein source without the pollutant limits of oily fish.',
    source: 'NHS guidance on fish in pregnancy',
    nameLt: 'Menkė',
    aliasesLt: ['balta žuvis', 'kepta menkė'],
    summaryLt: 'Taip — menkė saugi, savaitinio apribojimo nėra.',
    explanationLt:
      'Menkė ir kitos baltos žuvys (ešerys, plekšnė, polakas) nėštumo metu saugios, kai gerai išvirtos. Baltoms žuvims savaitinis apribojimas netaikomas (skirtingai nuo riebios žuvies).',
    reasonLt:
      'Balta žuvis turi labai mažai gyvsidabrio ir savaitinis apribojimas netaikomas. Tai liesos baltymų šaltinis be riebios žuvies teršalų apribojimų.',
    sourceLt: 'NHS gairės dėl žuvies nėštumo metu',
  },
  {
    slug: 'haddock',
    verdict: 'safe',
    category: 'fish-seafood',
    name: 'Haddock',
    aliases: ['smoked haddock', 'white fish'],
    summary: 'Yes — haddock is safe, including smoked when cooked.',
    explanation:
      'Haddock is a safe white fish throughout pregnancy. Smoked haddock is generally safe when cooked thoroughly (e.g. in fish pie, kedgeree, or poached).',
    reason:
      'Haddock is a low-mercury white fish. Cooking smoked fish removes any residual Listeria risk.',
    source: 'NHS guidance on fish in pregnancy',
    nameLt: 'Juodadėmė menkė',
    aliasesLt: ['rūkyta juodadėmė menkė', 'balta žuvis'],
    summaryLt: 'Taip — juodadėmė menkė saugi, įskaitant rūkytą, kai išvirta.',
    explanationLt:
      'Juodadėmė menkė — saugi balta žuvis visą nėštumą. Rūkyta juodadėmė menkė paprastai saugi, kai gerai išvirta (pvz., žuvies pyrage, kedgeree ar pošeriuojant).',
    reasonLt:
      'Juodadėmė menkė — mažo gyvsidabrio balta žuvis. Virimas pašalina likutinę Listeria riziką rūkytoje žuvyje.',
    sourceLt: 'NHS gairės dėl žuvies nėštumo metu',
  },
  {
    slug: 'anchovies',
    verdict: 'safe',
    category: 'fish-seafood',
    name: 'Anchovies',
    aliases: ['tinned anchovies', 'anchovy paste'],
    summary: 'Yes — anchovies are safe in normal amounts.',
    explanation:
      'Anchovies are safe in pregnancy. They are preserved (salted, cured, or oil-packed) which makes them shelf-stable. The main consideration is their salt content — watch overall sodium if you eat them regularly.',
    reason:
      'Small fish like anchovies have very low mercury. The salt content is the only practical limit.',
    source: 'Pregnancy dietary guidance',
    nameLt: 'Ančiuviai',
    aliasesLt: ['konservuoti ančiuviai', 'ančiuvių pasta'],
    summaryLt: 'Taip — ančiuviai saugūs normaliais kiekiais.',
    explanationLt:
      'Ančiuviai nėštumo metu saugūs. Jie konservuojami (sūdomi, vytinami ar laikomi aliejuje), todėl yra ilgai išliekantys. Pagrindinis dėmesys — druskos kiekis, jei juos vartojate reguliariai.',
    reasonLt:
      'Mažos žuvys, kaip ančiuviai, turi labai mažai gyvsidabrio. Druskos kiekis — vienintelis praktinis apribojimas.',
    sourceLt: 'Nėštumo mitybos gairės',
  },
  {
    slug: 'crab',
    verdict: 'safe',
    category: 'fish-seafood',
    name: 'Crab',
    aliases: ['cooked crab', 'crab meat', 'dressed crab'],
    summary: 'Yes — cooked crab is safe in pregnancy.',
    explanation:
      'Thoroughly cooked crab is safe during pregnancy. Avoid the brown meat if possible, as it can accumulate higher levels of cadmium and dioxins. White crab meat is preferred. Raw crab and crab sticks made from uncooked fish should be avoided; most UK shop-bought crab sticks are pre-cooked and therefore fine.',
    reason:
      'Cooking destroys bacterial risks. The brown meat contains higher pollutant levels than white.',
    source: 'NHS guidance on shellfish in pregnancy',
    nameLt: 'Krabas',
    aliasesLt: ['virtas krabas', 'krabo mėsa'],
    summaryLt: 'Taip — virtas krabas nėštumo metu saugus.',
    explanationLt:
      'Gerai virtas krabas nėštumo metu saugus. Jei įmanoma, venkite rudos mėsos — joje gali kauptis daugiau kadmio ir dioksinų. Geriau rinktis baltą krabo mėsą. Žalio krabo ir krabo lazdelių iš nevirtos žuvies reikėtų vengti; dauguma JK parduotuvėse parduodamų krabo lazdelių yra iš anksto virtos ir tinka.',
    reasonLt:
      'Virimas sunaikina bakterijas. Ruda mėsa turi daugiau teršalų nei balta.',
    sourceLt: 'NHS gairės dėl vėžiagyvių nėštumo metu',
  },
  {
    slug: 'mussels',
    verdict: 'safe',
    category: 'fish-seafood',
    name: 'Mussels',
    aliases: ['cooked mussels', 'moules'],
    summary: 'Yes — thoroughly cooked mussels are safe.',
    explanation:
      'Mussels are safe in pregnancy provided they are thoroughly cooked. The shells should have opened fully during cooking; discard any that stay closed. Avoid raw or undercooked mussels.',
    reason:
      'Cooking destroys bacteria and viruses. Closed shells after cooking suggest the mussel was not alive before cooking, raising contamination risk.',
    source: 'NHS guidance on shellfish in pregnancy',
    nameLt: 'Midijos',
    aliasesLt: ['virtos midijos'],
    summaryLt: 'Taip — gerai virtos midijos saugios.',
    explanationLt:
      'Midijos nėštumo metu saugios, kai gerai išvirtos. Geldelės virimo metu turi visiškai atsidaryti; išmeskite tas, kurios lieka uždaros. Venkite žalių ar neišvirtų midijų.',
    reasonLt:
      'Virimas sunaikina bakterijas ir virusus. Uždaros geldelės po virimo rodo, kad midija nebuvo gyva prieš virimą — tai didina užkrato riziką.',
    sourceLt: 'NHS gairės dėl vėžiagyvių nėštumo metu',
  },
  {
    slug: 'lobster',
    verdict: 'safe',
    category: 'fish-seafood',
    name: 'Lobster',
    aliases: ['cooked lobster', 'langoustine'],
    summary: 'Yes — cooked lobster is safe in pregnancy.',
    explanation:
      'Thoroughly cooked lobster is safe during pregnancy. The same rules apply as for all shellfish: cook through until the shell turns bright red and the flesh is firm and opaque.',
    reason:
      'Cooking destroys bacterial risks. Lobster mercury levels are within safe limits.',
    source: 'NHS guidance on shellfish in pregnancy',
    nameLt: 'Omaras',
    aliasesLt: ['virtas omaras', 'langustinas'],
    summaryLt: 'Taip — virtas omaras nėštumo metu saugus.',
    explanationLt:
      'Gerai virtas omaras nėštumo metu saugus. Taikomos tos pačios taisyklės kaip visiems vėžiagyviams: virti iki tol, kol kiautas pasidaro ryškiai raudonas, o mėsa — tvirta ir matinė.',
    reasonLt:
      'Virimas sunaikina bakterijas. Omaro gyvsidabrio kiekis yra saugiose ribose.',
    sourceLt: 'NHS gairės dėl vėžiagyvių nėštumo metu',
  },
  {
    slug: 'kippers',
    verdict: 'safe',
    category: 'fish-seafood',
    name: 'Kippers (smoked herring)',
    aliases: ['smoked herring', 'bloaters'],
    summary: 'Yes — kippers are safe, especially when cooked.',
    explanation:
      'Kippers are safe in pregnancy. Traditionally they are cold-smoked, which falls under the updated NHS guidance on smoked fish — generally safe from UK suppliers. Hot kippers (grilled or poached) are always fine.',
    reason:
      'Herring has low mercury. Cooking eliminates any residual smoking-related risk.',
    source: 'NHS guidance on oily fish in pregnancy',
    nameLt: 'Rūkyta silkė (kipperiai)',
    aliasesLt: ['rūkyta silkė'],
    summaryLt: 'Taip — kipperiai saugūs, ypač iškepti.',
    explanationLt:
      'Kipperiai nėštumo metu saugūs. Tradiciškai jie šaltai rūkyti, o tai patenka į atnaujintas NHS gaires dėl rūkytos žuvies — paprastai saugūs iš JK tiekėjų. Karšti kipperiai (grilinti ar pošeriuoti) visada tinka.',
    reasonLt:
      'Silkė turi mažai gyvsidabrio. Virimas pašalina bet kokią likutinę su rūkymu susijusią riziką.',
    sourceLt: 'NHS gairės dėl riebios žuvies nėštumo metu',
  },
  {
    slug: 'sea-bass',
    verdict: 'safe',
    category: 'fish-seafood',
    name: 'Sea bass',
    aliases: ['bass', 'branzino'],
    summary: 'Yes — sea bass is safe, counts as oily fish.',
    explanation:
      'Sea bass is safe to eat in pregnancy and counts toward the 1–2 portions of oily fish per week. Must be cooked thoroughly.',
    reason:
      'Sea bass provides omega-3 with acceptable mercury levels, though it sits in the "oily fish" category with its 1–2 per week limit.',
    source: 'NHS guidance on oily fish in pregnancy',
    nameLt: 'Jūrinis ešerys',
    aliasesLt: ['ešerys', 'branzinas'],
    summaryLt: 'Taip — jūrinis ešerys saugus, priskaitomas riebiai žuviai.',
    explanationLt:
      'Jūrinis ešerys nėštumo metu saugus ir priskaitomas prie 1–2 riebios žuvies porcijų per savaitę. Turi būti gerai išvirtas.',
    reasonLt:
      'Jūrinis ešerys suteikia omega-3 su priimtinais gyvsidabrio kiekiais, tačiau priklauso „riebios žuvies” kategorijai su 1–2 porcijų per savaitę apribojimu.',
    sourceLt: 'NHS gairės dėl riebios žuvies nėštumo metu',
  },

  // ==================== BATCH 1: CHEESE EXPANSION ====================
  {
    slug: 'goats-cheese-hard',
    verdict: 'safe',
    category: 'cheese-dairy',
    name: 'Hard goats cheese',
    aliases: ['aged goats cheese'],
    summary: 'Yes — hard goats cheese is safe in pregnancy.',
    explanation:
      'Hard goats cheese, including aged varieties, is safe throughout pregnancy even if made from unpasteurised milk. The soft mould-ripened goats cheese (with a white rind) falls under the "avoid unless cooked" category with Brie and Camembert.',
    reason:
      'Hard cheeses are too low in moisture to support Listeria growth. Soft goats cheese with mould rind carries the same risk as Brie.',
    source: 'NHS guidance on cheese in pregnancy',
    nameLt: 'Kietas ožkos sūris',
    aliasesLt: ['brandintas ožkos sūris'],
    summaryLt: 'Taip — kietas ožkos sūris nėštumo metu saugus.',
    explanationLt:
      'Kietas ožkos sūris, įskaitant brandintas rūšis, nėštumo metu saugus, net jei pagamintas iš nepasterizuoto pieno. Minkštas pelėsinis ožkos sūris (su balta pluta) patenka į „vengti, nebent išvirtas” kategoriją kartu su Brie ir Camembert.',
    reasonLt:
      'Kieti sūriai turi per mažai drėgmės, kad Listeria galėtų daugintis. Minkštas ožkos sūris su pelėsio pluta turi tą pačią riziką kaip Brie.',
    sourceLt: 'NHS gairės dėl sūrio nėštumo metu',
  },
  {
    slug: 'greek-yoghurt',
    verdict: 'safe',
    category: 'cheese-dairy',
    name: 'Greek yoghurt',
    aliases: ['greek yogurt', 'strained yoghurt'],
    summary: 'Yes — Greek yoghurt is safe and a great protein source.',
    explanation:
      'Greek yoghurt is safe and actively recommended in pregnancy. It provides protein, calcium, and beneficial probiotics. Check the label to confirm it is made from pasteurised milk (nearly all UK supermarket Greek yoghurt is).',
    reason:
      'Pasteurisation eliminates Listeria risk. The high protein content is particularly valuable in pregnancy.',
    source: 'NHS guidance on dairy in pregnancy',
    nameLt: 'Graikiškas jogurtas',
    aliasesLt: ['nukoštas jogurtas'],
    summaryLt: 'Taip — graikiškas jogurtas saugus ir puikus baltymų šaltinis.',
    explanationLt:
      'Graikiškas jogurtas nėštumo metu saugus ir aktyviai rekomenduojamas. Jis suteikia baltymų, kalcio ir naudingų probiotikų. Patikrinkite etiketę, kad įsitikintumėte, jog pagamintas iš pasterizuoto pieno (beveik visi JK parduotuvėse parduodami graikiški jogurtai yra).',
    reasonLt:
      'Pasterizacija pašalina Listeria riziką. Didelis baltymų kiekis nėštumo metu ypač vertingas.',
    sourceLt: 'NHS gairės dėl pieno produktų nėštumo metu',
  },
  {
    slug: 'cream-cheese',
    verdict: 'safe',
    category: 'cheese-dairy',
    name: 'Cream cheese',
    aliases: ['philadelphia', 'soft cheese spread'],
    summary: 'Yes — cream cheese is safe when made with pasteurised milk.',
    explanation:
      'Cream cheese (Philadelphia-style spreads) is safe in pregnancy as it is made from pasteurised milk and does not have the mould-ripening process that creates Listeria risk in Brie or Camembert.',
    reason:
      'Though soft, cream cheese is not mould-ripened and is made from pasteurised milk, so Listeria risk is minimal.',
    source: 'NHS guidance on cheese in pregnancy',
    nameLt: 'Kreminis sūris',
    aliasesLt: ['philadelphia', 'tepamas sūris'],
    summaryLt: 'Taip — kreminis sūris saugus, kai pagamintas iš pasterizuoto pieno.',
    explanationLt:
      'Kreminis sūris (Philadelphia tipo tepalai) nėštumo metu saugus, nes gaminamas iš pasterizuoto pieno ir neturi pelėsiavimo proceso, kuris sukuria Listeria riziką Brie ar Camembert sūriuose.',
    reasonLt:
      'Nors minkštas, kreminis sūris nėra pelėsinis ir gaminamas iš pasterizuoto pieno, todėl Listeria rizika minimali.',
    sourceLt: 'NHS gairės dėl sūrio nėštumo metu',
  },
  {
    slug: 'mascarpone',
    verdict: 'safe',
    category: 'cheese-dairy',
    name: 'Mascarpone',
    aliases: ['italian cream cheese'],
    summary: 'Yes — mascarpone is safe if made from pasteurised milk.',
    explanation:
      'Mascarpone is safe in pregnancy when made from pasteurised milk (as nearly all UK shop-bought mascarpone is). Watch for mascarpone in traditional tiramisu — it is usually fine, but the tiramisu itself may contain raw egg, which is only safe with British Lion eggs.',
    reason:
      'Pasteurised mascarpone carries no Listeria risk. The concern with desserts using mascarpone is usually the raw egg, not the cheese.',
    source: 'NHS guidance on cheese in pregnancy',
    nameLt: 'Mascarpone',
    aliasesLt: ['itališkas kreminis sūris'],
    summaryLt: 'Taip — mascarpone saugus, jei pagamintas iš pasterizuoto pieno.',
    explanationLt:
      'Mascarpone nėštumo metu saugus, kai pagamintas iš pasterizuoto pieno (beveik visi JK parduotuvėse parduodami yra). Atkreipkite dėmesį į mascarpone tradicinėje tiramisu — paprastai tinka, bet pati tiramisu gali turėti žalio kiaušinio, o tai saugu tik su British Lion kiaušiniais.',
    reasonLt:
      'Pasterizuotas mascarpone neturi Listeria rizikos. Rūpestis dėl desertų su mascarpone paprastai yra žalias kiaušinis, ne sūris.',
    sourceLt: 'NHS gairės dėl sūrio nėštumo metu',
  },
  {
    slug: 'cottage-cheese',
    verdict: 'safe',
    category: 'cheese-dairy',
    name: 'Cottage cheese',
    aliases: ['curd cheese'],
    summary: 'Yes — cottage cheese is safe and high in protein.',
    explanation:
      'Cottage cheese is safe throughout pregnancy and is one of the highest-protein dairy options. Made from pasteurised milk, not mould-ripened.',
    reason:
      'Pasteurised and non-mould-ripened, cottage cheese carries no Listeria concerns.',
    source: 'NHS guidance on cheese in pregnancy',
    nameLt: 'Varškė',
    aliasesLt: ['varškės sūris'],
    summaryLt: 'Taip — varškė saugi ir turtinga baltymų.',
    explanationLt:
      'Varškė saugi visą nėštumą ir yra vienas iš labiausiai baltymingų pieno produktų. Gaminama iš pasterizuoto pieno, nėra pelėsinė.',
    reasonLt:
      'Pasterizuota ir ne pelėsinė, varškė neturi Listeria problemų.',
    sourceLt: 'NHS gairės dėl sūrio nėštumo metu',
  },
  {
    slug: 'ice-cream',
    verdict: 'safe',
    category: 'cheese-dairy',
    name: 'Ice cream',
    aliases: ['gelato', 'sorbet'],
    summary: 'Yes — shop-bought ice cream is safe in pregnancy.',
    explanation:
      'Shop-bought ice cream from reputable manufacturers is safe during pregnancy because it is made with pasteurised ingredients. Homemade ice cream that contains raw egg should only be made with British Lion eggs. Soft-serve ice cream from machines is also generally safe in the UK, though some advice prefers scooped ice cream over soft-serve from poorly maintained machines.',
    reason:
      'Commercial ice cream uses pasteurised dairy and egg. Concerns arise only with raw-egg homemade versions or poorly maintained dispensers.',
    source: 'NHS guidance on dairy in pregnancy',
    nameLt: 'Ledai',
    aliasesLt: ['gelato', 'sorbetas'],
    summaryLt: 'Taip — parduotuvėse pirkti ledai nėštumo metu saugūs.',
    explanationLt:
      'Parduotuvėse pirkti ledai iš patikimų gamintojų nėštumo metu saugūs, nes gaminami iš pasterizuotų ingredientų. Namie gaminti ledai su žaliu kiaušiniu turėtų būti gaminami tik su British Lion kiaušiniais. Minkšti ledai iš aparatų JK taip pat paprastai saugūs, nors kai kurios rekomendacijos siūlo rinktis pakuotės ledus vietoj minkštų iš prastai prižiūrimų aparatų.',
    reasonLt:
      'Komerciniai ledai naudoja pasterizuotus pieno produktus ir kiaušinius. Rūpesčiai kyla tik su namie gamintomis žalio kiaušinio versijomis ar prastai prižiūrimais aparatais.',
    sourceLt: 'NHS gairės dėl pieno produktų nėštumo metu',
  },
  {
    slug: 'feta-specifically',
    verdict: 'safe',
    category: 'cheese-dairy',
    name: 'Feta cheese',
    aliases: ['greek feta'],
    summary: 'Yes — feta is safe when made from pasteurised milk.',
    explanation:
      'Feta is safe in pregnancy provided it is made from pasteurised milk. The vast majority of feta sold in UK supermarkets is pasteurised — check the label. Traditional Greek feta from small producers may be unpasteurised; avoid unless confirmed otherwise.',
    reason:
      'Pasteurisation eliminates Listeria. Feta itself is not mould-ripened, so the concern is purely about the milk source.',
    source: 'NHS guidance on cheese in pregnancy',
    nameLt: 'Feta sūris',
    aliasesLt: ['graikiška feta'],
    summaryLt: 'Taip — feta saugi, kai pagaminta iš pasterizuoto pieno.',
    explanationLt:
      'Feta nėštumo metu saugi, jei pagaminta iš pasterizuoto pieno. Dauguma JK parduotuvėse parduodamos fetos yra pasterizuotos — patikrinkite etiketę. Tradicinė graikiška feta iš smulkių gamintojų gali būti nepasterizuota; venkite, nebent patvirtinta kitaip.',
    reasonLt:
      'Pasterizacija pašalina Listeria. Pati feta nėra pelėsinė, todėl rūpestis tik dėl pieno kilmės.',
    sourceLt: 'NHS gairės dėl sūrio nėštumo metu',
  },

  // ==================== BATCH 1: EGGS EXPANSION ====================
  {
    slug: 'mayonnaise',
    verdict: 'safe',
    category: 'eggs',
    name: 'Mayonnaise',
    aliases: ['mayo', 'aioli'],
    summary: 'Shop-bought is fine; homemade depends on the eggs used.',
    explanation:
      'Shop-bought mayonnaise (Hellmanns, supermarket own-brand, etc.) is safe in pregnancy as it uses pasteurised egg. Homemade mayonnaise is safe only if made with British Lion eggs; otherwise avoid. Restaurant mayonnaise is usually shop-bought and therefore fine, though you can ask if unsure.',
    reason:
      'Pasteurisation destroys Salmonella. Raw non-Lion eggs carry the original Salmonella risk.',
    source: 'NHS guidance on eggs in pregnancy',
    nameLt: 'Majonezas',
    aliasesLt: ['majo', 'aioli'],
    summaryLt: 'Pirktas tinka; naminis priklauso nuo naudotų kiaušinių.',
    explanationLt:
      'Parduotuvėje pirktas majonezas (Hellmanns, parduotuvės prekės ženklo ir pan.) nėštumo metu saugus, nes naudojamas pasterizuotas kiaušinis. Naminis majonezas saugus tik tuomet, kai gaminamas su British Lion kiaušiniais; kitu atveju venkite. Restorano majonezas dažniausiai yra pirktas, todėl tinka, tačiau galite pasiteirauti, jei abejojate.',
    reasonLt:
      'Pasterizacija sunaikina Salmonella. Žali ne-Lion kiaušiniai turi pradinę Salmonella riziką.',
    sourceLt: 'NHS gairės dėl kiaušinių nėštumo metu',
  },
  {
    slug: 'tiramisu',
    verdict: 'limited',
    category: 'eggs',
    name: 'Tiramisu',
    aliases: ['italian dessert'],
    summary: 'Depends on the eggs and alcohol — check before eating.',
    explanation:
      'Traditional tiramisu contains raw egg, which is only safe if made with British Lion eggs. Most restaurant tiramisu uses non-Lion eggs or imported eggs — ask before ordering. Tiramisu also contains coffee and marsala (alcohol); the alcohol amount per serving is usually small but the coffee contributes to daily caffeine. Shop-bought UK versions typically use pasteurised egg and are safer.',
    reason:
      'Multiple ingredients of concern: raw egg (Salmonella if not Lion), alcohol (should be avoided), and caffeine (counts toward daily limit).',
    source: 'NHS guidance on eggs and alcohol in pregnancy',
    nameLt: 'Tiramisu',
    aliasesLt: ['itališkas desertas'],
    summaryLt: 'Priklauso nuo kiaušinių ir alkoholio — pasitikslinkite.',
    explanationLt:
      'Tradiciniame tiramisu yra žalio kiaušinio — jis saugus tik kai naudojami British Lion kiaušiniai. Dauguma restorano tiramisu gaminama su ne-Lion ar importuotais kiaušiniais — pasiteiraukite prieš užsisakydami. Tiramisu taip pat turi kavos ir marsalos (alkoholio); alkoholio kiekis porcijoje paprastai nedidelis, bet kava prisideda prie dienos kofeino kiekio. Parduotuvėse pirktos JK versijos dažnai naudoja pasterizuotą kiaušinį ir yra saugesnės.',
    reasonLt:
      'Keli rizikingi ingredientai: žalias kiaušinis (Salmonella, jei ne Lion), alkoholis (jo reikėtų vengti) ir kofeinas (priskaitomas prie dienos normos).',
    sourceLt: 'NHS gairės dėl kiaušinių ir alkoholio nėštumo metu',
  },
  {
    slug: 'hollandaise',
    verdict: 'limited',
    category: 'eggs',
    name: 'Hollandaise sauce',
    aliases: ['eggs benedict sauce'],
    summary: 'Only safe if made with British Lion or pasteurised eggs.',
    explanation:
      'Traditional hollandaise is made with barely-cooked egg yolks, which is only safe in pregnancy when British Lion eggs are used. Most restaurant hollandaise is unlikely to specify Lion eggs — ask before ordering eggs Benedict. Shop-bought pre-made hollandaise is pasteurised and safe.',
    reason:
      'Hollandaise egg yolks are warmed but not cooked enough to destroy Salmonella in non-Lion eggs.',
    source: 'NHS guidance on eggs in pregnancy',
    nameLt: 'Holandaise padažas',
    aliasesLt: ['eggs benedict padažas'],
    summaryLt: 'Saugus tik su British Lion ar pasterizuotais kiaušiniais.',
    explanationLt:
      'Tradicinis holandaise padažas gaminamas iš vos apšildytų trynių — nėštumo metu jis saugus tik su British Lion kiaušiniais. Dauguma restoranų holandaise padažo greičiausiai nenaudoja Lion kiaušinių — pasiteiraukite prieš užsisakydami eggs Benedict. Parduotuvėse pirktas paruoštas holandaise yra pasterizuotas ir saugus.',
    reasonLt:
      'Holandaise padažo tryniai sušildomi, bet ne pakankamai, kad sunaikintų Salmonella ne-Lion kiaušiniuose.',
    sourceLt: 'NHS gairės dėl kiaušinių nėštumo metu',
  },
  {
    slug: 'cookie-dough',
    verdict: 'limited',
    category: 'eggs',
    name: 'Raw cookie dough',
    aliases: ['cake batter', 'raw flour'],
    summary: 'Two risks: raw egg and raw flour.',
    explanation:
      'Cookie dough has two pregnancy concerns. The raw egg is safe if using British Lion eggs, but raw flour itself can contain E. coli and should be avoided uncooked. "Edible cookie dough" products in shops are made with heat-treated flour and pasteurised egg, so those are safe. Home-made cookie dough should only be eaten after baking.',
    reason:
      'Raw flour has caused E. coli outbreaks. Raw egg carries Salmonella risk unless Lion-marked.',
    source: 'NHS and Food Standards Agency guidance',
    nameLt: 'Žalia sausainių tešla',
    aliasesLt: ['pyrago tešla', 'žali miltai'],
    summaryLt: 'Dvi rizikos: žalias kiaušinis ir žali miltai.',
    explanationLt:
      'Sausainių tešla turi dvi rizikas nėštumui. Žalias kiaušinis saugus, jei British Lion, bet patys žali miltai gali turėti E. coli — jų neišvirtų vengti. „Valgomos sausainių tešlos” produktai parduotuvėse gaminami iš termiškai apdorotų miltų ir pasterizuoto kiaušinio — tokie saugūs. Namie gaminta sausainių tešla valgoma tik išvirta.',
    reasonLt:
      'Žali miltai yra sukėlę E. coli protrūkių. Žalias kiaušinis turi Salmonella riziką, nebent pažymėtas Lion.',
    sourceLt: 'NHS ir Maisto standartų agentūros gairės',
  },
  {
    slug: 'mousse',
    verdict: 'limited',
    category: 'eggs',
    name: 'Chocolate mousse',
    aliases: ['mousse au chocolat'],
    summary: 'Shop-bought is safe; restaurant/homemade depends on eggs.',
    explanation:
      'Shop-bought chocolate mousse from major supermarkets uses pasteurised ingredients and is safe. Homemade or restaurant chocolate mousse typically contains raw egg — safe only with British Lion eggs. Ask before ordering if unsure.',
    reason:
      'Commercial mousse is pasteurised. Homemade versions contain raw egg with Salmonella risk unless Lion-marked.',
    source: 'NHS guidance on eggs in pregnancy',
    nameLt: 'Šokoladinis musas',
    aliasesLt: ['mousse au chocolat'],
    summaryLt: 'Parduotuvinis saugus; restorano/naminis priklauso nuo kiaušinių.',
    explanationLt:
      'Parduotuvėje pirktas šokoladinis musas iš pagrindinių prekybos tinklų naudoja pasterizuotus ingredientus ir yra saugus. Naminis ar restorano šokoladinis musas paprastai turi žalio kiaušinio — saugus tik su British Lion kiaušiniais. Pasiteiraukite prieš užsisakydami, jei abejojate.',
    reasonLt:
      'Komercinis musas pasterizuotas. Naminės versijos turi žalio kiaušinio su Salmonella rizika, nebent pažymėta Lion.',
    sourceLt: 'NHS gairės dėl kiaušinių nėštumo metu',
  },

  // ==================== BATCH 2: MEAT EXPANSION ====================
  {
    slug: 'chicken',
    verdict: 'safe',
    category: 'meat',
    name: 'Chicken',
    aliases: ['cooked chicken', 'roast chicken', 'chicken breast'],
    summary: 'Yes — as long as it is cooked through with no pink meat.',
    explanation:
      'Chicken is safe and a great protein source in pregnancy, provided it is cooked thoroughly with no pink meat and the juices run clear. Avoid chicken liver (high vitamin A) and be cautious with chicken liver parfait at restaurants — always confirm it is fully cooked.',
    reason:
      'Raw or undercooked chicken can carry Salmonella and Campylobacter. Thorough cooking destroys them.',
    source: 'NHS guidance on meat in pregnancy',
    nameLt: 'Vištiena',
    aliasesLt: ['virta vištiena', 'kepta vištiena', 'vištienos krūtinėlė'],
    summaryLt: 'Taip — kai gerai iškepta, be rausvos mėsos.',
    explanationLt:
      'Vištiena nėštumo metu saugi ir yra puikus baltymų šaltinis, jei gerai iškepta, be rausvos mėsos ir skaidrių sulčių. Venkite vištienos kepenų (daug vitamino A) ir atsargiai su vištienos kepenų parfė restoranuose — visada pasitikslinkite, ar visiškai iškeptas.',
    reasonLt:
      'Žalia ar neišvirta vištiena gali turėti Salmonella ir Campylobacter. Gerai iškepus, jos sunaikinamos.',
    sourceLt: 'NHS gairės dėl mėsos nėštumo metu',
  },
  {
    slug: 'turkey',
    verdict: 'safe',
    category: 'meat',
    name: 'Turkey',
    aliases: ['roast turkey', 'turkey mince'],
    summary: 'Yes — safe when cooked thoroughly.',
    explanation:
      'Turkey is safe in pregnancy when cooked through until the juices run clear. The same rules apply as for chicken — no pink meat, steaming hot throughout. Cooked sliced turkey from packets is fine; deli-counter sliced turkey is subject to the same Listeria concerns as other deli meats and is best heated before eating.',
    reason:
      'Raw or undercooked turkey can carry Salmonella and Campylobacter. Cooking destroys them.',
    source: 'NHS guidance on meat in pregnancy',
    nameLt: 'Kalakutiena',
    aliasesLt: ['keptas kalakutas', 'kalakutienos faršas'],
    summaryLt: 'Taip — saugi gerai iškepta.',
    explanationLt:
      'Kalakutiena nėštumo metu saugi, kai iškepta iki galo ir sultys skaidrios. Galioja tos pačios taisyklės kaip vištienai — be rausvos mėsos, iki galo įkaitinta. Virta pjaustyta kalakutiena iš pakuočių tinka; gastronomijos skyriaus pjaustyta kalakutiena turi tas pačias Listeria rizikas kaip ir kiti gastronomijos gaminiai — geriau pašildyti prieš valgant.',
    reasonLt:
      'Žalia ar neišvirta kalakutiena gali turėti Salmonella ir Campylobacter. Virimas jas sunaikina.',
    sourceLt: 'NHS gairės dėl mėsos nėštumo metu',
  },
  {
    slug: 'sausages',
    verdict: 'safe',
    category: 'meat',
    name: 'Sausages',
    aliases: ['pork sausages', 'bangers'],
    summary: 'Yes — provided they are cooked through.',
    explanation:
      'Sausages are safe when cooked thoroughly with no pink meat visible. This applies to pork, beef, chicken and vegetarian sausages. Avoid undercooked or "pink" sausages.',
    reason:
      'Undercooked pork or beef sausages can carry Toxoplasma, Salmonella, and other bacteria. Cooking eliminates these risks.',
    source: 'NHS guidance on meat in pregnancy',
    nameLt: 'Dešrelės',
    aliasesLt: ['kiaulienos dešrelės'],
    summaryLt: 'Taip — jei gerai iškeptos.',
    explanationLt:
      'Dešrelės saugios, kai gerai iškeptos ir nematoma rausvos mėsos. Tai taikoma kiaulienos, jautienos, vištienos ir vegetariškoms dešrelėms. Venkite neišvirtų ar „rausvų” dešrelių.',
    reasonLt:
      'Neišvirtos kiaulienos ar jautienos dešrelės gali turėti Toxoplasma, Salmonella ir kitų bakterijų. Virimas pašalina šias rizikas.',
    sourceLt: 'NHS gairės dėl mėsos nėštumo metu',
  },
  {
    slug: 'hot-dogs',
    verdict: 'safe',
    category: 'meat',
    name: 'Hot dogs',
    aliases: ['frankfurters'],
    summary: 'Yes — when heated thoroughly until steaming hot.',
    explanation:
      'Hot dogs and frankfurters are safe in pregnancy when heated until steaming hot right through. Do not eat them lukewarm or cold straight from the packet — even though they are pre-cooked, they can carry Listeria that proliferates at fridge temperatures.',
    reason:
      'Pre-cooked processed meats can become contaminated with Listeria after production. Heating until steaming destroys it.',
    source: 'NHS and CDC guidance on processed meats',
    nameLt: 'Dešrainiai (hot dogs)',
    aliasesLt: ['frankfurteriai'],
    summaryLt: 'Taip — kai gerai pakaitinti iki įkaitimo.',
    explanationLt:
      'Dešrainiai ir frankfurteriai nėštumo metu saugūs, kai pakaitinti iki įkaitimo. Nevalgykite drungnų ar šaltų tiesiai iš pakuotės — nors iš anksto virti, jie gali turėti Listeria, kuri dauginasi šaldytuvo temperatūroje.',
    reasonLt:
      'Iš anksto virti perdirbti mėsos gaminiai gali būti užteršti Listeria po gamybos. Pakaitinimas iki įkaitimo ją sunaikina.',
    sourceLt: 'NHS ir CDC gairės dėl perdirbtos mėsos',
  },
  {
    slug: 'cooked-ham',
    verdict: 'safe',
    category: 'meat',
    name: 'Cooked ham (packet)',
    aliases: ['gammon', 'ham slices'],
    summary: 'Yes — pre-cooked packaged ham is safe.',
    explanation:
      'Pre-cooked ham sold in sealed packets from supermarket chillers is safe throughout pregnancy. Gammon steaks are safe when cooked through. Deli-counter sliced ham carries slightly higher Listeria risk — eat quickly after purchase or heat through before eating.',
    reason:
      'Packaged cooked ham is heat-treated before packaging. Risk arises with prolonged exposure at deli counters.',
    source: 'NHS guidance on meat in pregnancy',
    nameLt: 'Virtas kumpis (pakuotėje)',
    aliasesLt: ['kumpis riekėmis'],
    summaryLt: 'Taip — iš anksto virtas pakuotėje esantis kumpis saugus.',
    explanationLt:
      'Iš anksto virtas kumpis, parduodamas užsandarintose pakuotėse iš prekybos tinklų šaldytuvų, saugus visą nėštumą. Virti kumpio kepsniai saugūs, kai iškepti iki galo. Pjaustytas kumpis iš gastronomijos skyriaus turi šiek tiek didesnę Listeria riziką — valgykite greitai po pirkimo arba prieš valgant pakaitinkite.',
    reasonLt:
      'Pakuotėje esantis virtas kumpis termiškai apdorojamas prieš pakavimą. Rizika kyla ilgai laikant atvirose gastronomijos vitrinose.',
    sourceLt: 'NHS gairės dėl mėsos nėštumo metu',
  },
  {
    slug: 'game',
    verdict: 'avoid',
    category: 'meat',
    name: 'Game meat (venison, pheasant, grouse)',
    aliases: ['venison', 'pheasant', 'rabbit', 'grouse'],
    summary: 'Avoid unless you can confirm it is lead-shot-free.',
    explanation:
      'Game meat shot with lead ammunition should be avoided in pregnancy because of potential lead contamination. If you are confident the game was shot with lead-free ammunition or wild-caught without shot (netted/trapped), thoroughly cooked game is otherwise safe. In practice, this is hard to verify, so most guidance suggests avoiding game in pregnancy.',
    reason:
      'Lead from shot can embed in the meat and transfer to the baby. Lead is neurotoxic during fetal development.',
    source: 'Food Standards Agency guidance on game',
    nameLt: 'Medžiojamoji mėsa (elnio, fazano, tetervino)',
    aliasesLt: ['elnio mėsa', 'fazanas', 'triušis', 'tetervinas'],
    summaryLt: 'Venkite, nebent žinoma, kad be švino šovinių.',
    explanationLt:
      'Medžiojamos mėsos, sumedžiotos švino amunicija, nėštumo metu reikėtų vengti dėl galimo švino užteršimo. Jei esate tikri, kad medžiota be švino amunicijos ar gauta be šovinių (tinklu, spąstais), gerai iškepta medžiojamoji mėsa kitu atveju saugi. Praktiškai tai sunku patikrinti, todėl dauguma gairių rekomenduoja vengti medžiojamos mėsos nėštumo metu.',
    reasonLt:
      'Švinas iš šovinių gali įsiterpti į mėsą ir pasiekti kūdikį. Švinas vaisiaus vystymosi metu yra neurotoksiškas.',
    sourceLt: 'Maisto standartų agentūros gairės dėl medžiojamos mėsos',
  },
  {
    slug: 'black-pudding',
    verdict: 'safe',
    category: 'meat',
    name: 'Black pudding',
    aliases: ['blood sausage', 'boudin noir'],
    summary: 'Yes — safe when thoroughly cooked.',
    explanation:
      'Black pudding is safe in pregnancy when heated through thoroughly (steaming hot). It is a useful source of iron, which is valuable during pregnancy. Pre-packaged supermarket black pudding should be cooked through before eating.',
    reason:
      'Cooking destroys bacteria that may be present. The iron content is a positive for pregnancy nutrition.',
    source: 'NHS guidance on meat in pregnancy',
    nameLt: 'Juodoji dešra (krupininė)',
    aliasesLt: ['kraujo dešra'],
    summaryLt: 'Taip — saugi gerai pakaitinta.',
    explanationLt:
      'Juodoji dešra nėštumo metu saugi, kai gerai pakaitinama iki įkaitimo. Tai naudingas geležies šaltinis, vertingas nėštumo metu. Pakuotėje parduodama juodoji dešra turi būti gerai iškepta prieš valgant.',
    reasonLt:
      'Virimas sunaikina galimas bakterijas. Geležies kiekis — teigiamas aspektas nėštumo mitybai.',
    sourceLt: 'NHS gairės dėl mėsos nėštumo metu',
  },

  // ==================== BATCH 2: DRINKS EXPANSION ====================
  {
    slug: 'tea',
    verdict: 'limited',
    category: 'drinks',
    name: 'Tea (black tea)',
    aliases: ['english breakfast tea', 'earl grey', 'black tea'],
    summary: 'Yes — but counts toward the 200 mg daily caffeine limit.',
    explanation:
      'Black tea is safe in pregnancy in moderation. A mug of tea contains roughly 75 mg of caffeine, so 2 mugs is within the 200 mg daily limit. Be mindful of combining tea with coffee or chocolate, which all contribute to the daily total.',
    reason:
      'Tea contains caffeine, which should be limited to 200 mg daily in pregnancy. Black tea also contains tannins that can reduce iron absorption — avoid drinking tea with iron-rich meals.',
    source: 'NHS guidance on caffeine in pregnancy',
    nameLt: 'Juodoji arbata',
    aliasesLt: ['angliška arbata', 'earl grey'],
    summaryLt: 'Taip — bet priskaitoma prie 200 mg dienos kofeino ribos.',
    explanationLt:
      'Juodoji arbata nėštumo metu saugi saikingai. Puodelis arbatos turi apie 75 mg kofeino, taigi 2 puodeliai telpa į 200 mg dienos ribą. Atkreipkite dėmesį, jei kartu geriate kavą ar šokoladą — visi prisideda prie dienos sumos.',
    reasonLt:
      'Arbatoje yra kofeino, kurio nėštumo metu reikėtų riboti iki 200 mg per dieną. Juodoji arbata taip pat turi taninų, mažinančių geležies pasisavinimą — nevartokite arbatos su geležies turinčiais patiekalais.',
    sourceLt: 'NHS gairės dėl kofeino nėštumo metu',
  },
  {
    slug: 'green-tea',
    verdict: 'limited',
    category: 'drinks',
    name: 'Green tea',
    aliases: ['matcha'],
    summary: 'Small amounts fine; concentrated forms and high intake not advised.',
    explanation:
      'Green tea in normal amounts (1–2 cups per day) is generally considered safe in pregnancy, contributing to the 200 mg daily caffeine limit. Matcha and concentrated green tea extracts are more potent and should be limited or avoided. High intake has been associated with reduced folate absorption.',
    reason:
      'Green tea contains caffeine and EGCG (epigallocatechin gallate), which at high intakes may interfere with folate. Normal cups are fine; supplements are not.',
    source: 'UK and European pregnancy guidance',
    nameLt: 'Žalioji arbata',
    aliasesLt: ['matcha'],
    summaryLt: 'Nedideli kiekiai tinka; koncentruotų formų ir didelių kiekių nerekomenduojama.',
    explanationLt:
      'Žalioji arbata normaliais kiekiais (1–2 puodeliai per dieną) paprastai laikoma saugia nėštumo metu ir prisideda prie 200 mg dienos kofeino ribos. Matcha ir koncentruoti žaliosios arbatos ekstraktai yra stipresni — juos reikėtų riboti ar vengti. Didelis vartojimas siejamas su sumažėjusiu folato pasisavinimu.',
    reasonLt:
      'Žaliojoje arbatoje yra kofeino ir EGCG (epigalokatechino galato), kurie dideliais kiekiais gali trikdyti folato pasisavinimą. Įprasti puodeliai tinka, papildai — ne.',
    sourceLt: 'JK ir Europos nėštumo gairės',
  },
  {
    slug: 'decaf-coffee',
    verdict: 'safe',
    category: 'drinks',
    name: 'Decaffeinated coffee',
    aliases: ['decaf', 'decaffeinated'],
    summary: 'Yes — decaf is safe throughout pregnancy.',
    explanation:
      'Decaffeinated coffee is safe during pregnancy. A cup typically contains 2–5 mg of caffeine, which is negligible. Same applies to decaf tea.',
    reason:
      'The caffeine content is low enough to not be a concern. The decaffeination process itself uses solvents that are within food safety limits.',
    source: 'NHS guidance on caffeine in pregnancy',
    nameLt: 'Bekofeinė kava',
    aliasesLt: ['decaf'],
    summaryLt: 'Taip — bekofeinė kava saugi visą nėštumą.',
    explanationLt:
      'Bekofeinė kava nėštumo metu saugi. Puodelis paprastai turi 2–5 mg kofeino — labai mažai. Tas pats galioja bekofeinei arbatai.',
    reasonLt:
      'Kofeino kiekis pakankamai mažas, kad nebūtų rūpestis. Pats kavos bekofeinimo procesas naudoja tirpiklius, kurie atitinka maisto saugos reikalavimus.',
    sourceLt: 'NHS gairės dėl kofeino nėštumo metu',
  },
  {
    slug: 'kombucha',
    verdict: 'avoid',
    category: 'drinks',
    name: 'Kombucha',
    aliases: ['fermented tea'],
    summary: 'Best avoided — raw, unpasteurised, low alcohol content.',
    explanation:
      'Kombucha is generally not recommended in pregnancy. It is fermented and unpasteurised, carries a small amount of alcohol (typically 0.5–3%), and can harbour unwanted bacteria or yeast. Commercial pasteurised kombucha is lower risk but still contains trace alcohol. The safest approach is to avoid it during pregnancy.',
    reason:
      'Combination of alcohol content, unpasteurised status, and potential bacterial contamination makes kombucha a better "save for after pregnancy" drink.',
    source: 'UK and European pregnancy guidance',
    nameLt: 'Kombucha',
    aliasesLt: ['fermentuota arbata'],
    summaryLt: 'Geriau vengti — žalia, nepasterizuota, turi alkoholio.',
    explanationLt:
      'Kombucha nėštumo metu paprastai nerekomenduojama. Ji fermentuota ir nepasterizuota, turi šiek tiek alkoholio (paprastai 0,5–3%) ir gali turėti nepageidaujamų bakterijų ar mielių. Komercinė pasterizuota kombucha — mažesnės rizikos, bet vis tiek turi alkoholio pėdsakų. Saugiausia nėštumo metu jos vengti.',
    reasonLt:
      'Alkoholio kiekio, nepasterizuoto statuso ir galimo bakterinio užkrato derinys daro kombuchą labiau „pasilikite po nėštumo” gėrimu.',
    sourceLt: 'JK ir Europos nėštumo gairės',
  },
  {
    slug: 'fresh-juice',
    verdict: 'limited',
    category: 'drinks',
    name: 'Fresh juice / smoothies (commercial)',
    aliases: ['smoothie', 'pressed juice', 'fresh orange juice'],
    summary: 'Pasteurised is fine; avoid unpasteurised juices.',
    explanation:
      'Pasteurised juices and smoothies (most UK supermarket cartons) are safe in pregnancy. Freshly-pressed juices from juice bars should be consumed only if you can verify the fruit was thoroughly washed. Unpasteurised "raw" juices sold in health food shops should be avoided. Watch the sugar content even in pure fruit juice — NHS limits juice/smoothies to 150 ml per day toward the "5 a day."',
    reason:
      'Unpasteurised juices can carry bacteria from fruit surfaces. Sugar content in juice can contribute to gestational diabetes risk.',
    source: 'NHS guidance on drinks in pregnancy',
    nameLt: 'Šviežios sultys / kokteiliai',
    aliasesLt: ['smoothie', 'spaustos sultys', 'šviežios apelsinų sultys'],
    summaryLt: 'Pasterizuotos tinka; nepasterizuotų venkite.',
    explanationLt:
      'Pasterizuotos sultys ir kokteiliai (dauguma JK parduotuvėse parduodamų pakuočių) nėštumo metu saugūs. Šviežiai spaustas sultis iš sulčių barų galima gerti tik tuo atveju, jei galite įsitikinti, kad vaisiai buvo gerai nuplauti. Nepasterizuotų „žalių” sulčių, parduodamų sveiko maisto parduotuvėse, reikėtų vengti. Atkreipkite dėmesį į cukraus kiekį net grynose vaisių sultyse — NHS riboja sultis/kokteilius iki 150 ml per dieną kaip dalį „5 per dieną”.',
    reasonLt:
      'Nepasterizuotos sultys gali turėti bakterijų nuo vaisių paviršiaus. Didelis cukraus kiekis sultyse gali prisidėti prie nėštumo diabeto rizikos.',
    sourceLt: 'NHS gairės dėl gėrimų nėštumo metu',
  },
  {
    slug: 'diet-drinks',
    verdict: 'safe',
    category: 'drinks',
    name: 'Diet drinks (Diet Coke, sugar-free)',
    aliases: ['coke zero', 'diet pepsi', 'sugar-free drinks'],
    summary: 'Yes — in moderation, with approved sweeteners.',
    explanation:
      'Diet drinks using UK-approved sweeteners (aspartame, sucralose, acesulfame K) are safe in moderation during pregnancy. Watch caffeine content if it contains cola — a can has about 40 mg of caffeine, which counts toward the daily 200 mg limit. Moderation also matters because high diet-drink intake is associated with cravings and less satisfying nutrition overall.',
    reason:
      'Approved sweeteners have been tested as safe. Caffeine content applies as with other caffeinated drinks.',
    source: 'UK Food Standards Agency, NHS guidance',
    nameLt: 'Dietiniai gėrimai (Diet Coke, be cukraus)',
    aliasesLt: ['coke zero', 'diet pepsi', 'gėrimai be cukraus'],
    summaryLt: 'Taip — saikingai, su patvirtintais saldikliais.',
    explanationLt:
      'Dietiniai gėrimai su JK patvirtintais saldikliais (aspartamu, sukraloze, acesulfamo K) nėštumo metu saikingai saugūs. Jei gėrime yra kolos — atkreipkite dėmesį į kofeiną: skardinė turi apie 40 mg, o tai priskaitoma prie dienos 200 mg ribos. Saikingas vartojimas svarbus ir todėl, kad didelis dietinių gėrimų kiekis siejamas su noru ko nors saldaus ir mažiau sveika visuma.',
    reasonLt:
      'Patvirtinti saldikliai ištirti kaip saugūs. Kofeino kiekis taikomas taip pat, kaip ir kituose kofeino turinčiuose gėrimuose.',
    sourceLt: 'JK maisto standartų agentūra, NHS gairės',
  },
  {
    slug: 'sparkling-water',
    verdict: 'safe',
    category: 'drinks',
    name: 'Sparkling / fizzy water',
    aliases: ['fizzy water', 'carbonated water', 'soda water'],
    summary: 'Yes — completely safe, a good alternative to sugary drinks.',
    explanation:
      'Sparkling water and plain soda water are completely safe throughout pregnancy. They can be a useful way to meet hydration goals if plain water is unappealing. Flavoured sparkling waters are also fine, as long as they do not contain caffeine or quinine.',
    reason:
      'Carbonation is simply dissolved CO2 — no pregnancy risk at all. No sugar, no calories, no contraindications.',
    source: 'Pregnancy dietary guidance',
    nameLt: 'Gazuotas vanduo',
    aliasesLt: ['putojantis vanduo', 'mineralinis vanduo su dujomis'],
    summaryLt: 'Taip — visiškai saugus, puiki saldžių gėrimų alternatyva.',
    explanationLt:
      'Gazuotas vanduo ir paprastas soda vanduo yra visiškai saugūs visą nėštumą. Jie gali būti naudingi siekiant pakankamai skysčių, jei paprastas vanduo netinka. Skonio gazuoti vandenys taip pat tinka, jei tik neturi kofeino ar chinino.',
    reasonLt:
      'Gazavimas — tai tik ištirpęs CO2, jokios nėštumo rizikos. Be cukraus, be kalorijų, be kontraindikacijų.',
    sourceLt: 'Nėštumo mitybos gairės',
  },

  // ==================== BATCH 2: HERBS & SUPPLEMENTS EXPANSION ====================
  {
    slug: 'fish-oil',
    verdict: 'limited',
    category: 'herbs-supplements',
    name: 'Fish oil / Omega-3 supplements',
    aliases: ['omega 3', 'cod liver oil', 'DHA supplement'],
    summary: 'Omega-3 (DHA/EPA) supplements are safe; cod liver oil is not.',
    explanation:
      'Omega-3 supplements labelled as "DHA" or "EPA" fish oil are safe and often helpful in pregnancy, especially if you do not eat oily fish. DO NOT take cod liver oil or any fish liver oil — these contain high levels of vitamin A (retinol) which can harm the baby. Look for supplements specifically labelled "pregnancy-safe" or made from algae.',
    reason:
      'Omega-3 supports fetal brain and eye development. However, liver-based fish oils contain teratogenic levels of vitamin A.',
    source: 'NHS guidance on supplements in pregnancy',
    nameLt: 'Žuvų taukai / Omega-3 papildai',
    aliasesLt: ['omega 3', 'menkių kepenų taukai', 'DHA papildas'],
    summaryLt: 'Omega-3 (DHA/EPA) papildai saugūs; menkių kepenų taukai ne.',
    explanationLt:
      'Omega-3 papildai, pažymėti kaip „DHA” arba „EPA” žuvų taukai, nėštumo metu saugūs ir dažnai naudingi — ypač jei nevartojate riebios žuvies. NEVARTOKITE menkių kepenų taukų ar bet kokių žuvies kepenų taukų — juose didelis vitamino A (retinolio) kiekis, galintis pakenkti kūdikiui. Rinkitės papildus, specialiai pažymėtus „saugu nėštumo metu” arba gamintus iš dumblių.',
    reasonLt:
      'Omega-3 palaiko vaisiaus smegenų ir akių vystymąsi. Tačiau kepenų pagrindo žuvų taukai turi teratogeninio vitamino A kiekius.',
    sourceLt: 'NHS gairės dėl papildų nėštumo metu',
  },
  {
    slug: 'iron-supplements',
    verdict: 'safe',
    category: 'herbs-supplements',
    name: 'Iron supplements',
    aliases: ['ferrous sulphate', 'pregnancy iron'],
    summary: 'Yes — safe, and often needed if your iron is low.',
    explanation:
      'Iron supplements are safe in pregnancy. Many pregnant women develop low iron stores; your midwife will check iron levels with blood tests and may prescribe supplements if needed. Do not self-diagnose and take high-dose iron without a test — excess iron has downsides too.',
    reason:
      'Iron is essential for the blood-volume increase of pregnancy and fetal development. Supplementation at appropriate doses is safe and recommended when indicated.',
    source: 'NHS guidance on iron in pregnancy',
    nameLt: 'Geležies papildai',
    aliasesLt: ['geležies sulfatas'],
    summaryLt: 'Taip — saugu, dažnai reikalinga, jei geležies kiekis mažas.',
    explanationLt:
      'Geležies papildai nėštumo metu saugūs. Daugeliui nėščiųjų sumažėja geležies atsargos; akušerė tikrins geležies kiekį kraujo tyrimais ir, jei reikia, skirs papildus. Nediagnozuokite patys ir nevartokite didelių dozių geležies be tyrimo — perteklius taip pat turi neigiamų pasekmių.',
    reasonLt:
      'Geležis būtina kraujo tūrio padidėjimui nėštumo metu ir vaisiaus vystymuisi. Papildymas tinkamomis dozėmis saugus ir rekomenduojamas, kai tai nurodoma.',
    sourceLt: 'NHS gairės dėl geležies nėštumo metu',
  },
  {
    slug: 'calcium',
    verdict: 'safe',
    category: 'herbs-supplements',
    name: 'Calcium supplements',
    aliases: ['calcium tablets'],
    summary: 'Yes — if you are not getting enough from food.',
    explanation:
      'Calcium supplements are safe in pregnancy. However, most women getting a few portions of dairy, leafy greens, or fortified plant milks daily will meet their needs from food. Do not take mega-doses. If you follow a vegan diet or avoid dairy, a supplement is often appropriate — ideally discussed with a dietitian or GP.',
    reason:
      'Calcium is essential for the baby’s bone development. Moderate supplementation is safe; mega-doses can interfere with magnesium and iron absorption.',
    source: 'NHS guidance on calcium in pregnancy',
    nameLt: 'Kalcio papildai',
    aliasesLt: ['kalcio tabletės'],
    summaryLt: 'Taip — jei negaunate pakankamai iš maisto.',
    explanationLt:
      'Kalcio papildai nėštumo metu saugūs. Tačiau daugumai moterų, kasdien vartojančių kelias pieno produktų porcijas, lapinių daržovių ar praturtintų augalinių pieno gėrimų, poreikis patenkinamas iš maisto. Nevartokite milžiniškų dozių. Jei laikotės veganiškos mitybos ar vengiate pieno produktų, papildas dažnai tinkamas — geriausia aptarti su dietologu ar šeimos gydytoju.',
    reasonLt:
      'Kalcis būtinas kūdikio kaulų vystymuisi. Saikingas papildymas saugus; milžiniškos dozės gali trikdyti magnio ir geležies pasisavinimą.',
    sourceLt: 'NHS gairės dėl kalcio nėštumo metu',
  },
  {
    slug: 'probiotics',
    verdict: 'safe',
    category: 'herbs-supplements',
    name: 'Probiotics',
    aliases: ['probiotic supplement', 'live cultures'],
    summary: 'Yes — probiotic foods and most supplements are safe.',
    explanation:
      'Probiotic foods (yoghurt, kefir made from pasteurised milk, sauerkraut, kimchi) are safe in pregnancy. Probiotic supplements with well-studied strains (Lactobacillus, Bifidobacterium) are also considered safe. If you have a weakened immune system, discuss with your GP first.',
    reason:
      'Research on probiotics in pregnancy has generally shown safety, with some evidence of benefit for digestive comfort and possibly reduced pre-eclampsia risk.',
    source: 'UK and European pregnancy guidance',
    nameLt: 'Probiotikai',
    aliasesLt: ['probiotinis papildas', 'gyvos kultūros'],
    summaryLt: 'Taip — probiotiniai maistai ir dauguma papildų saugūs.',
    explanationLt:
      'Probiotiniai maistai (jogurtas, kefyras iš pasterizuoto pieno, raugintieji kopūstai, kimchi) nėštumo metu saugūs. Probiotiniai papildai su gerai ištirtomis kultūromis (Lactobacillus, Bifidobacterium) taip pat laikomi saugiais. Jei turite susilpnėjusią imuninę sistemą, pirmiausia aptarkite su šeimos gydytoju.',
    reasonLt:
      'Tyrimai apie probiotikus nėštumo metu paprastai rodo saugumą — su kai kuriais įrodymais apie naudą virškinimui ir galimai sumažintą preeklampsijos riziką.',
    sourceLt: 'JK ir Europos nėštumo gairės',
  },
  {
    slug: 'magnesium',
    verdict: 'safe',
    category: 'herbs-supplements',
    name: 'Magnesium supplements',
    aliases: ['magnesium citrate', 'magnesium glycinate'],
    summary: 'Yes — at normal doses; useful for some pregnancy symptoms.',
    explanation:
      'Magnesium supplements at normal doses (200–400 mg daily) are safe in pregnancy. They are sometimes recommended for leg cramps, constipation, or sleep support. Avoid mega-doses. Magnesium sulfate ("Epsom salts") for leg cramping baths is also fine externally.',
    reason:
      'Moderate magnesium supplementation is safe and often beneficial in pregnancy. Very high doses can affect blood pressure.',
    source: 'UK and European pregnancy guidance',
    nameLt: 'Magnio papildai',
    aliasesLt: ['magnio citratas', 'magnio glicinatas'],
    summaryLt: 'Taip — normaliomis dozėmis; naudingi kai kuriems nėštumo simptomams.',
    explanationLt:
      'Magnio papildai normaliomis dozėmis (200–400 mg per dieną) nėštumo metu saugūs. Kartais rekomenduojami dėl kojų mėšlungio, vidurių užkietėjimo ar miego palaikymo. Venkite milžiniškų dozių. Magnio sulfatas („Epsom druska”) vonios kojų mėšlungiui taip pat tinkamas išoriniam naudojimui.',
    reasonLt:
      'Saikingas magnio papildymas nėštumo metu saugus ir dažnai naudingas. Labai didelės dozės gali paveikti kraujospūdį.',
    sourceLt: 'JK ir Europos nėštumo gairės',
  },
  {
    slug: 'herbal-supplements',
    verdict: 'avoid',
    category: 'herbs-supplements',
    name: 'Herbal supplements (general)',
    aliases: ['herbal remedies', 'plant supplements', 'echinacea', 'st johns wort'],
    summary: 'Most herbal supplements should be avoided — evidence is too thin.',
    explanation:
      'The majority of herbal supplements have not been adequately tested for pregnancy safety. This includes echinacea, St. John’s Wort, valerian, ginkgo, ginseng, and many others. Some (like St. John’s Wort) have known interactions and risks; many are simply unknown. The safe default is to avoid during pregnancy unless specifically discussed with your GP or midwife.',
    reason:
      'Herbal products can contain active pharmacological compounds that cross the placenta. Without pregnancy-specific safety data, avoidance is the safest approach.',
    source: 'NHS guidance on medicines and supplements in pregnancy',
    nameLt: 'Žolelių papildai (bendrai)',
    aliasesLt: ['žolelių preparatai', 'augaliniai papildai', 'echinacėja', 'šv. Jono žolė'],
    summaryLt: 'Daugumos žolelių papildų reikėtų vengti — įrodymų per mažai.',
    explanationLt:
      'Dauguma žolelių papildų nebuvo pakankamai ištirti dėl saugumo nėštumo metu. Tai apima echinacėją, šv. Jono žolę, valerijoną, ginkmedį, ženšenį ir daugelį kitų. Kai kurie (kaip šv. Jono žolė) turi žinomų sąveikų ir rizikų; daugelio poveikis nežinomas. Saugiausia nėštumo metu jų vengti, nebent aptarta su šeimos gydytoju ar akušere.',
    reasonLt:
      'Žolelių produktuose gali būti aktyvių farmakologinių medžiagų, pereinančių per placentą. Be nėštumui specifinių saugumo duomenų, vengimas — saugiausias sprendimas.',
    sourceLt: 'NHS gairės dėl vaistų ir papildų nėštumo metu',
  },
  {
    slug: 'chamomile',
    verdict: 'limited',
    category: 'herbs-supplements',
    name: 'Chamomile tea',
    aliases: ['camomile'],
    summary: 'Occasional cup is fine; large amounts not advised.',
    explanation:
      'An occasional cup of chamomile tea is generally considered safe in pregnancy. Large quantities or concentrated chamomile supplements should be avoided, as some studies have raised theoretical concerns about uterine stimulation. One or two cups a week of ordinary shop-bought chamomile tea is fine.',
    reason:
      'Chamomile contains compounds that, in high doses, have been associated with uterine effects in some studies. Normal tea amounts are too dilute to pose a risk.',
    source: 'UK pregnancy guidance on herbal teas',
    nameLt: 'Ramunėlių arbata',
    aliasesLt: ['ramunėlių gėrimas'],
    summaryLt: 'Retas puodelis tinka; didelių kiekių nerekomenduojama.',
    explanationLt:
      'Retkarčiais išgertas ramunėlių arbatos puodelis nėštumo metu paprastai laikomas saugiu. Didelių kiekių ar koncentruotų ramunėlių papildų reikėtų vengti, nes kai kurie tyrimai kėlė teorinius rūpesčius dėl poveikio gimdai. Vienas ar du paprastos parduotuvinės ramunėlių arbatos puodeliai per savaitę — tinka.',
    reasonLt:
      'Ramunėlėse yra medžiagų, kurios didelėmis dozėmis kai kuriuose tyrimuose siejamos su poveikiu gimdai. Įprasto arbatos kiekio koncentracija per maža rizikai kelti.',
    sourceLt: 'JK nėštumo gairės dėl žolelių arbatų',
  },
  {
    slug: 'ginger',
    verdict: 'safe',
    category: 'herbs-supplements',
    name: 'Ginger (tea, fresh, capsules)',
    aliases: ['ginger tea', 'ginger root', 'morning sickness ginger'],
    summary: 'Yes — often recommended for morning sickness.',
    explanation:
      'Ginger is safe in pregnancy and is one of the most commonly recommended natural options for managing morning sickness. Fresh ginger, ginger tea, and ginger capsules (up to 1 g per day) are all supported by a reasonable evidence base. Avoid very high doses or concentrated ginger extracts.',
    reason:
      'Multiple clinical trials have shown ginger reduces nausea in early pregnancy with no increase in adverse outcomes.',
    source: 'NHS and Cochrane reviews on morning sickness',
    nameLt: 'Imbieras (arbata, šviežias, kapsulės)',
    aliasesLt: ['imbiero arbata', 'imbiero šaknis', 'imbieras nuo pykinimo'],
    summaryLt: 'Taip — dažnai rekomenduojamas nuo rytinio pykinimo.',
    explanationLt:
      'Imbieras nėštumo metu saugus ir yra vienas dažniausiai rekomenduojamų natūralių sprendimų nuo rytinio pykinimo. Šviežias imbieras, imbiero arbata ir imbiero kapsulės (iki 1 g per dieną) turi pagrįstą įrodymų bazę. Venkite labai didelių dozių ar koncentruotų imbiero ekstraktų.',
    reasonLt:
      'Keli klinikiniai tyrimai parodė, kad imbieras mažina pykinimą ankstyvu nėštumo laikotarpiu be nepageidaujamų pasekmių padidėjimo.',
    sourceLt: 'NHS ir Cochrane apžvalgos apie rytinį pykinimą',
  },

  // ==================== BATCH 3: FRUITS & VEGETABLES EXPANSION ====================
  {
    slug: 'berries',
    verdict: 'safe',
    category: 'fruits-vegetables',
    name: 'Berries (strawberries, blueberries, raspberries)',
    aliases: ['strawberries', 'blueberries', 'raspberries', 'blackberries'],
    summary: 'Yes — all berries are safe and beneficial in pregnancy.',
    explanation:
      'All fresh berries are safe and recommended in pregnancy as part of the "5 a day." Wash thoroughly before eating, especially strawberries and raspberries, which can hold soil or pesticide residue. Frozen berries are equally nutritious — freeze-point suspends degradation and kills most pathogens.',
    reason:
      'Berries provide antioxidants, vitamin C, folate, and fibre. Washing removes any soil-borne contamination risk.',
    source: 'NHS guidance on fruits in pregnancy',
    nameLt: 'Uogos (braškės, mėlynės, avietės)',
    aliasesLt: ['braškės', 'mėlynės', 'avietės', 'gervuogės'],
    summaryLt: 'Taip — visos uogos saugios ir naudingos nėštumo metu.',
    explanationLt:
      'Visos šviežios uogos nėštumo metu saugios ir rekomenduojamos kaip dalis „5 per dieną”. Prieš valgant gerai nuplaukite, ypač braškes ir avietes — jose gali likti dirvos ar pesticidų pėdsakų. Šaldytos uogos vienodai maistingos — šaldymas sustabdo gedimą ir sunaikina daugumą patogenų.',
    reasonLt:
      'Uogose yra antioksidantų, vitamino C, folato ir skaidulų. Plovimas pašalina dirvožemio taršos riziką.',
    sourceLt: 'NHS gairės dėl vaisių nėštumo metu',
  },
  {
    slug: 'grapes',
    verdict: 'safe',
    category: 'fruits-vegetables',
    name: 'Grapes',
    aliases: ['white grapes', 'red grapes'],
    summary: 'Yes — safe and a useful source of hydration.',
    explanation:
      'Grapes are safe throughout pregnancy. Wash thoroughly before eating to remove pesticide residues. Both red and white varieties are fine, as are raisins (concentrated source of iron).',
    reason:
      'Grapes provide water, natural sugars, and some vitamins. The only consideration is washing to remove agricultural chemicals on the skin.',
    source: 'NHS guidance on fruits in pregnancy',
    nameLt: 'Vynuogės',
    aliasesLt: ['baltos vynuogės', 'raudonos vynuogės'],
    summaryLt: 'Taip — saugios ir naudingas hidratacijos šaltinis.',
    explanationLt:
      'Vynuogės nėštumo metu saugios. Prieš valgant gerai nuplaukite, kad pašalintumėte pesticidų pėdsakus. Tinka tiek raudonos, tiek baltos rūšys, kaip ir razinos (koncentruotas geležies šaltinis).',
    reasonLt:
      'Vynuogėse yra vandens, natūralių cukrų ir vitaminų. Vienintelis dėmesys — plovimas, kad pašalintumėte žemės ūkio chemikalus nuo odelės.',
    sourceLt: 'NHS gairės dėl vaisių nėštumo metu',
  },
  {
    slug: 'citrus',
    verdict: 'safe',
    category: 'fruits-vegetables',
    name: 'Citrus fruits (oranges, lemons, grapefruit)',
    aliases: ['orange', 'lemon', 'grapefruit', 'lime', 'clementine'],
    summary: 'Yes — excellent source of vitamin C and folate.',
    explanation:
      'Citrus fruits are safe and particularly beneficial in pregnancy. Vitamin C helps iron absorption, which is especially useful when eating iron-rich foods. Grapefruit and grapefruit juice can interact with certain medications — if you take regular medication, check with your pharmacist.',
    reason:
      'Citrus provides vitamin C, folate, and hydration. The grapefruit-medication interaction is a pharmaceutical consideration, not a pregnancy-specific one.',
    source: 'NHS guidance on fruits in pregnancy',
    nameLt: 'Citrusiniai vaisiai (apelsinai, citrinos, greipfrutai)',
    aliasesLt: ['apelsinas', 'citrina', 'greipfrutas', 'laimas', 'klementina'],
    summaryLt: 'Taip — puikus vitamino C ir folato šaltinis.',
    explanationLt:
      'Citrusiniai vaisiai nėštumo metu saugūs ir ypač naudingi. Vitaminas C padeda pasisavinti geležį — tai ypač vertinga valgant geležimi turtingą maistą. Greipfrutas ir greipfrutų sultys gali sąveikauti su tam tikrais vaistais — jei reguliariai vartojate vaistus, pasikonsultuokite su vaistininku.',
    reasonLt:
      'Citrusiniuose yra vitamino C, folato ir skysčių. Greipfruto ir vaistų sąveika — farmacinis, o ne su nėštumu susijęs klausimas.',
    sourceLt: 'NHS gairės dėl vaisių nėštumo metu',
  },
  {
    slug: 'bananas',
    verdict: 'safe',
    category: 'fruits-vegetables',
    name: 'Bananas',
    aliases: ['banana'],
    summary: 'Yes — bananas are safe and particularly good for morning sickness.',
    explanation:
      'Bananas are safe throughout pregnancy and often well-tolerated during morning sickness thanks to their bland taste and easy digestion. They provide potassium, vitamin B6 (which also helps with nausea), and natural sugars for quick energy.',
    reason:
      'Bananas are nutrient-dense with no pregnancy concerns. Vitamin B6 content has been shown in trials to reduce nausea.',
    source: 'NHS guidance on fruits in pregnancy',
    nameLt: 'Bananai',
    aliasesLt: ['bananas'],
    summaryLt: 'Taip — bananai saugūs ir ypač naudingi nuo rytinio pykinimo.',
    explanationLt:
      'Bananai nėštumo metu saugūs ir dažnai gerai toleruojami rytinio pykinimo metu dėl švelnaus skonio ir lengvo virškinamumo. Jie suteikia kalio, vitamino B6 (kuris taip pat padeda nuo pykinimo) ir natūralių cukrų greitai energijai.',
    reasonLt:
      'Bananai maistingi ir nėštumui jokios rizikos nekelia. Vitamino B6 kiekis tyrimuose parodė mažinantį pykinimą poveikį.',
    sourceLt: 'NHS gairės dėl vaisių nėštumo metu',
  },
  {
    slug: 'avocado',
    verdict: 'safe',
    category: 'fruits-vegetables',
    name: 'Avocado',
    aliases: ['avocados', 'guacamole'],
    summary: 'Yes — avocado is a pregnancy superfood.',
    explanation:
      'Avocado is safe and one of the most nutritious foods you can eat in pregnancy. It provides healthy fats, folate, potassium, fibre, and vitamin E. No limits apply. Guacamole made with pasteurised ingredients is also fine.',
    reason:
      'Avocado is one of the most nutrient-dense whole foods and has no pregnancy contraindications.',
    source: 'Pregnancy dietary guidance',
    nameLt: 'Avokadas',
    aliasesLt: ['avokadai', 'guacamole'],
    summaryLt: 'Taip — avokadas yra nėštumo „superfood”.',
    explanationLt:
      'Avokadas nėštumo metu saugus ir yra vienas maistingiausių maistų, kuriuos galite valgyti. Suteikia sveikų riebalų, folato, kalio, skaidulų ir vitamino E. Jokių apribojimų. Guacamole su pasterizuotais ingredientais taip pat tinka.',
    reasonLt:
      'Avokadas — vienas maistingiausių viso maisto produktų ir neturi nėštumo kontraindikacijų.',
    sourceLt: 'Nėštumo mitybos gairės',
  },
  {
    slug: 'sprouts',
    verdict: 'avoid',
    category: 'fruits-vegetables',
    name: 'Raw sprouts / beansprouts',
    aliases: ['alfalfa sprouts', 'bean sprouts', 'raw sprouts', 'sprouted seeds'],
    summary: 'Avoid raw; cooked sprouts are fine.',
    explanation:
      'Raw sprouts (alfalfa, mung bean, clover, radish) should be avoided in pregnancy. The warm, moist conditions in which they are grown can harbour Salmonella, E. coli, and Listeria — even thorough washing does not reliably remove these. Fully cooked sprouts (stir-fried until soft) are safe.',
    reason:
      'Multiple food poisoning outbreaks have been traced to raw sprouts globally. Cooking destroys the bacteria; washing alone does not.',
    source: 'UK Food Standards Agency guidance on sprouts',
    nameLt: 'Žalios daigintos pupelės / daigai',
    aliasesLt: ['liucernos daigai', 'pupelių daigai', 'žali daigai'],
    summaryLt: 'Venkite žalių; virti daigai tinka.',
    explanationLt:
      'Žalių daigų (liucernos, mungo pupelių, dobilų, ridikėlių) nėštumo metu reikėtų vengti. Šiltomis, drėgnomis auginimo sąlygomis jie gali turėti Salmonella, E. coli ir Listeria — net kruopštus plovimas nepatikimai jas pašalina. Visiškai termiškai apdoroti daigai (keptuvėje iki minkštumo) saugūs.',
    reasonLt:
      'Daug pasaulinio lygio apsinuodijimų maistu atvejų siejami su žaliais daigais. Virimas sunaikina bakterijas; plovimas vienas — ne.',
    sourceLt: 'JK maisto standartų agentūros gairės dėl daigų',
  },
  {
    slug: 'mushrooms',
    verdict: 'safe',
    category: 'fruits-vegetables',
    name: 'Mushrooms (shop-bought, cooked)',
    aliases: ['button mushrooms', 'portobello', 'chestnut mushrooms'],
    summary: 'Shop-bought cooked mushrooms are safe; avoid wild or raw.',
    explanation:
      'Cultivated mushrooms from supermarkets (white, chestnut, portobello, shiitake, oyster) are safe in pregnancy when thoroughly cooked. Avoid wild-foraged mushrooms entirely unless identified by an expert. Avoid raw mushrooms on salads — they can harbour bacteria and contain natural toxins that are destroyed by cooking.',
    reason:
      'Cultivated mushrooms are grown under controlled conditions. Wild mushrooms can be toxic if misidentified. Cooking destroys low-level natural compounds in raw mushrooms.',
    source: 'NHS and Food Standards Agency guidance',
    nameLt: 'Grybai (parduotuvėse pirkti, virti)',
    aliasesLt: ['pievagrybiai', 'portobello', 'kaštoniniai grybai'],
    summaryLt: 'Parduotuvėse pirkti virti grybai saugūs; venkite laukinių ar žalių.',
    explanationLt:
      'Auginami grybai iš prekybos tinklų (pievagrybiai, kaštoniniai, portobello, šitake, austerės) nėštumo metu saugūs, kai gerai išvirti. Laukinių, paties surinktų grybų reikia visiškai vengti, nebent juos atpažino ekspertas. Venkite žalių grybų salotose — juose gali būti bakterijų ir natūralių toksinų, kuriuos sunaikina virimas.',
    reasonLt:
      'Kultūriniai grybai auginami kontroliuojamomis sąlygomis. Laukiniai grybai, klaidingai atpažinti, gali būti nuodingi. Virimas sunaikina nedidelio kiekio natūralių junginių žaliuose grybuose.',
    sourceLt: 'NHS ir Maisto standartų agentūros gairės',
  },
  {
    slug: 'seaweed',
    verdict: 'limited',
    category: 'fruits-vegetables',
    name: 'Seaweed / nori / kelp',
    aliases: ['nori', 'kelp', 'wakame', 'kombu', 'sushi seaweed'],
    summary: 'Small amounts fine; large amounts can give too much iodine.',
    explanation:
      'Seaweed in small amounts (e.g. the nori wrap around sushi, a sprinkle of wakame in soup) is safe. Large amounts of seaweed, especially kelp or kombu, can provide excessive iodine, which can affect thyroid function and the baby. Avoid kelp supplements entirely.',
    reason:
      'Seaweed is very high in iodine. Small amounts contribute positively to iodine needs; large amounts or supplements can exceed the safe upper limit.',
    source: 'UK Food Standards Agency guidance on iodine',
    nameLt: 'Jūros dumbliai / nori / kelpas',
    aliasesLt: ['nori', 'kelpas', 'wakame', 'kombu', 'suši dumbliai'],
    summaryLt: 'Nedideli kiekiai tinka; dideli kiekiai gali suteikti per daug jodo.',
    explanationLt:
      'Jūros dumbliai mažais kiekiais (pvz., nori lapas apie suši, žiupsnelis wakame sriuboje) saugūs. Didelių kiekių dumblių, ypač kelpo ar kombu, reikėtų vengti — jie gali suteikti per daug jodo, o tai veikia skydliaukės funkciją ir kūdikį. Kelpo papildų visiškai venkite.',
    reasonLt:
      'Jūros dumbliuose labai daug jodo. Mažais kiekiais jie teigiamai prisideda prie jodo poreikio; dideli kiekiai ar papildai gali viršyti saugią viršutinę ribą.',
    sourceLt: 'JK maisto standartų agentūros gairės dėl jodo',
  },
  {
    slug: 'beets',
    verdict: 'safe',
    category: 'fruits-vegetables',
    name: 'Beetroot',
    aliases: ['beet', 'beets', 'beetroot juice'],
    summary: 'Yes — beetroot is safe and nutrient-rich.',
    explanation:
      'Beetroot is safe and nutritious in pregnancy. It provides folate, iron, and nitrates, which can support healthy blood pressure. Wash soil off thoroughly before cooking. Beetroot juice is fine in normal amounts.',
    reason:
      'Beetroot is a naturally rich source of folate (important in pregnancy) and has no pregnancy-specific concerns.',
    source: 'Pregnancy dietary guidance',
    nameLt: 'Burokėliai',
    aliasesLt: ['burokėlis', 'burokėlių sultys'],
    summaryLt: 'Taip — burokėliai saugūs ir maistingi.',
    explanationLt:
      'Burokėliai nėštumo metu saugūs ir maistingi. Jie suteikia folato, geležies ir nitratų, kurie gali palaikyti sveiką kraujospūdį. Prieš verdant gerai nuplaukite nuo žemių. Burokėlių sultys normaliais kiekiais tinka.',
    reasonLt:
      'Burokėliai — natūraliai turtingas folato šaltinis (svarbus nėštumo metu) ir neturi su nėštumu susijusių rūpesčių.',
    sourceLt: 'Nėštumo mitybos gairės',
  },

  // ==================== BATCH 3: OTHER ====================
  {
    slug: 'chocolate',
    verdict: 'limited',
    category: 'other',
    name: 'Chocolate (milk)',
    aliases: ['milk chocolate', 'cadbury', 'dairy milk'],
    summary: 'Yes — in moderation, mindful of caffeine total.',
    explanation:
      'Milk chocolate is safe in pregnancy. A 50g bar contains around 10 mg of caffeine, which is low but counts toward the daily 200 mg limit. Enjoy in moderation as part of a balanced diet. Nothing in chocolate is specifically dangerous to pregnancy.',
    reason:
      'Caffeine content is low but not zero. Sugar content is the practical consideration for regular consumption.',
    source: 'NHS guidance on caffeine in pregnancy',
    nameLt: 'Pieniškas šokoladas',
    aliasesLt: ['pieninis šokoladas', 'cadbury'],
    summaryLt: 'Taip — saikingai, atsižvelgiant į bendrą kofeiną.',
    explanationLt:
      'Pieniškas šokoladas nėštumo metu saugus. 50 g plytelė turi apie 10 mg kofeino — nedaug, bet priskaitoma prie dienos 200 mg ribos. Mėgaukitės saikingai, kaip balansuotos mitybos dalimi. Niekas šokolade nėra specifiškai pavojinga nėštumui.',
    reasonLt:
      'Kofeino kiekis mažas, bet ne nulis. Cukraus kiekis — praktinis dėmesys reguliariam vartojimui.',
    sourceLt: 'NHS gairės dėl kofeino nėštumo metu',
  },
  {
    slug: 'dark-chocolate',
    verdict: 'limited',
    category: 'other',
    name: 'Dark chocolate',
    aliases: ['70% chocolate', '85% chocolate', 'plain chocolate'],
    summary: 'Yes — more caffeine than milk chocolate; a few squares is fine.',
    explanation:
      'Dark chocolate is safe in pregnancy but has more caffeine than milk chocolate — a 50g bar of 70% dark chocolate can contain 25–40 mg of caffeine. A few squares a day is fine. Dark chocolate also contains beneficial flavonoids, which is a small plus.',
    reason:
      'Higher cocoa content means higher caffeine. Dark chocolate also contains theobromine, a related stimulant.',
    source: 'NHS guidance on caffeine in pregnancy',
    nameLt: 'Juodasis šokoladas',
    aliasesLt: ['70% šokoladas', '85% šokoladas'],
    summaryLt: 'Taip — daugiau kofeino nei pieniškame; kelios plytelės tinka.',
    explanationLt:
      'Juodasis šokoladas nėštumo metu saugus, bet turi daugiau kofeino nei pieniškas — 50 g plytelė 70% juodojo šokolado gali turėti 25–40 mg kofeino. Kelios plytelės per dieną tinka. Juodame šokolade taip pat yra naudingų flavonoidų — tai nedidelis pliusas.',
    reasonLt:
      'Didesnis kakavos kiekis reiškia daugiau kofeino. Juodame šokolade taip pat yra teobromino — giminingo stimuliatoriaus.',
    sourceLt: 'NHS gairės dėl kofeino nėštumo metu',
  },
  {
    slug: 'nuts-general',
    verdict: 'safe',
    category: 'other',
    name: 'Nuts (almonds, walnuts, cashews, pistachios)',
    aliases: ['almonds', 'walnuts', 'cashews', 'pistachios', 'hazelnuts', 'brazil nuts'],
    summary: 'Yes — all nuts are safe unless you have an allergy.',
    explanation:
      'All nuts are safe in pregnancy unless you personally have a nut allergy. They are excellent sources of healthy fats, protein, magnesium, and folate. Brazil nuts are particularly good for selenium — 1–2 per day is plenty (more can give too much selenium).',
    reason:
      'Nuts are one of the most nutritionally dense foods. Previous advice to avoid them in pregnancy has been reversed — eating nuts may reduce the baby’s allergy risk.',
    source: 'NHS guidance on nuts in pregnancy',
    nameLt: 'Riešutai (migdolai, graikiniai, anakardžiai, pistacijos)',
    aliasesLt: ['migdolai', 'graikiniai riešutai', 'anakardžiai', 'pistacijos', 'lazdyniniai', 'brazilai'],
    summaryLt: 'Taip — visi riešutai saugūs, nebent turite alergiją.',
    explanationLt:
      'Visi riešutai nėštumo metu saugūs, nebent patys turite alergiją riešutams. Tai puikūs sveikų riebalų, baltymų, magnio ir folato šaltiniai. Brazilo riešutai ypač naudingi dėl seleno — 1–2 per dieną visiškai pakanka (daugiau gali suteikti per daug seleno).',
    reasonLt:
      'Riešutai — vieni maistingiausių maisto produktų. Ankstesnės rekomendacijos jų vengti nėštumo metu atšauktos — valgyti riešutus gali net sumažinti kūdikio alergijos riziką.',
    sourceLt: 'NHS gairės dėl riešutų nėštumo metu',
  },
  {
    slug: 'olives',
    verdict: 'safe',
    category: 'other',
    name: 'Olives',
    aliases: ['green olives', 'black olives', 'kalamata'],
    summary: 'Yes — olives are safe and provide healthy fats.',
    explanation:
      'Olives are safe throughout pregnancy. They provide monounsaturated fats, vitamin E, and iron. The main consideration is salt content — olives are naturally high in sodium from the brine.',
    reason:
      'Olives have no pregnancy-specific risks. Their sodium content is the only practical limit for regular consumption.',
    source: 'Pregnancy dietary guidance',
    nameLt: 'Alyvuogės',
    aliasesLt: ['žaliosios alyvuogės', 'juodosios alyvuogės', 'kalamata'],
    summaryLt: 'Taip — alyvuogės saugios ir suteikia sveikų riebalų.',
    explanationLt:
      'Alyvuogės nėštumo metu saugios. Jos suteikia mononesočiųjų riebalų, vitamino E ir geležies. Pagrindinis dėmesys — druskos kiekis, nes alyvuogės iš sūrymo yra natūraliai sūrios.',
    reasonLt:
      'Alyvuogės neturi nėštumui specifinių rūpesčių. Natrio kiekis — vienintelis praktinis apribojimas reguliariam vartojimui.',
    sourceLt: 'Nėštumo mitybos gairės',
  },
  {
    slug: 'tofu',
    verdict: 'safe',
    category: 'other',
    name: 'Tofu, tempeh, soy products',
    aliases: ['tempeh', 'edamame', 'soy milk', 'soya'],
    summary: 'Yes — soy foods are safe in pregnancy.',
    explanation:
      'Tofu, tempeh, soya milk, and edamame are all safe in pregnancy and are valuable protein sources, particularly for vegetarian and vegan diets. Cook tofu and tempeh thoroughly. Soy formula or mega-doses of soy isolates are a different matter and not advised without dietitian input.',
    reason:
      'Whole soy foods in normal dietary amounts are safe. Concerns about phytoestrogens are not supported by the evidence at usual intake levels.',
    source: 'UK and European pregnancy guidance',
    nameLt: 'Tofu, tempė, sojos produktai',
    aliasesLt: ['tempė', 'edamame', 'sojos pienas', 'soja'],
    summaryLt: 'Taip — sojos produktai nėštumo metu saugūs.',
    explanationLt:
      'Tofu, tempė, sojos pienas ir edamame nėštumo metu saugūs ir yra vertingi baltymų šaltiniai, ypač vegetariškai ir veganiškai mitybai. Tofu ir tempę gerai išvirkite. Sojos formulė ar didelės sojos izoliatų dozės — kitas klausimas, ir jų nereikėtų vartoti be dietologo konsultacijos.',
    reasonLt:
      'Viso maisto sojos produktai įprastais mitybos kiekiais saugūs. Rūpesčiai dėl fitoestrogenų nėra patvirtinti įrodymais įprastais vartojimo kiekiais.',
    sourceLt: 'JK ir Europos nėštumo gairės',
  },
  {
    slug: 'takeaway-food',
    verdict: 'limited',
    category: 'other',
    name: 'Takeaway food',
    aliases: ['fast food', 'delivery food', 'takeout'],
    summary: 'Fine occasionally; choose thoroughly-cooked options.',
    explanation:
      'Takeaway food is safe in pregnancy as an occasional choice, provided you pick options that are freshly cooked and steaming hot on arrival. Avoid raw or undercooked items (rare burgers, raw fish sushi from unknown sources, soft-centre eggs in breakfast dishes). Indian, Chinese, and Thai curries that are served piping hot are generally safe; cold-buffet or salad-bar items are higher risk.',
    reason:
      'The risk with takeaway isn\'t the cuisine type but the temperature and freshness at the point of eating.',
    source: 'Pregnancy food safety guidance',
    nameLt: 'Maistas išsinešti / pristatomas',
    aliasesLt: ['greitas maistas', 'maisto pristatymas'],
    summaryLt: 'Retkarčiais tinka; rinkitės gerai termiškai apdorotus patiekalus.',
    explanationLt:
      'Maistas išsinešti nėštumo metu saugus kaip retkarčiais pasirenkamas variantas, jei renkatės šviežiai paruoštus ir atvežamus karštus patiekalus. Venkite žalių ar neišvirtų patiekalų (retai keptų mėsainių, žalios žuvies suši iš nežinomų šaltinių, minkštų trynių pusryčių patiekaluose). Indiški, kiniški ir tailandietiški kariai, atnešti karšti, paprastai saugūs; šalto bufeto ar salotų baro patiekalai — didesnės rizikos.',
    reasonLt:
      'Rizika maiste išsinešti — ne virtuvės tipas, o temperatūra ir šviežumas valgymo momentu.',
    sourceLt: 'Nėštumo maisto saugos gairės',
  },
  {
    slug: 'sushi-rolls-cooked',
    verdict: 'safe',
    category: 'other',
    name: 'Cooked sushi rolls (tempura, teriyaki, cooked salmon)',
    aliases: ['tempura roll', 'california roll', 'cooked sushi'],
    summary: 'Yes — sushi with cooked fillings is always safe.',
    explanation:
      'Sushi rolls with fully cooked fillings — tempura prawn, cooked salmon, teriyaki chicken, vegetarian rolls, California rolls (with cooked imitation crab or cooked shrimp) — are safe throughout pregnancy. The "is sushi safe" concern applies only to raw fish varieties.',
    reason:
      'Cooking eliminates any parasite or bacterial risk. The rice, seaweed, and vegetables carry no specific pregnancy concerns.',
    source: 'NHS guidance on fish in pregnancy',
    nameLt: 'Virti suši suktinukai (tempura, teriyaki, virta lašiša)',
    aliasesLt: ['tempura suktinukas', 'California suktinukas', 'virtas suši'],
    summaryLt: 'Taip — suši su virtais įdarais visada saugus.',
    explanationLt:
      'Suši suktinukai su visiškai virtais įdarais — tempura krevetės, virta lašiša, teriyaki vištiena, vegetariški suktinukai, California suktinukai (su virta imitacija ar virtomis krevetėmis) — visą nėštumą saugūs. Rūpestis „ar suši saugus” taikomas tik žalios žuvies variantams.',
    reasonLt:
      'Virimas pašalina bet kokią parazitų ar bakterijų riziką. Ryžiai, dumbliai ir daržovės neturi specifinių nėštumo rūpesčių.',
    sourceLt: 'NHS gairės dėl žuvies nėštumo metu',
  },
  {
    slug: 'curry',
    verdict: 'safe',
    category: 'other',
    name: 'Curry',
    aliases: ['indian food', 'chicken curry', 'spicy curry'],
    summary: 'Yes — curry is safe, spice does not cause labour.',
    explanation:
      'Curry is safe throughout pregnancy. The common myth that spicy food causes labour is not supported by evidence. The main consideration is heartburn or reflux, which can worsen in later pregnancy — in which case milder dishes may feel better. Ensure meat is cooked through, and avoid raw chutneys from uncertain sources.',
    reason:
      'Capsaicin and curry spices do not cross the placenta in amounts that affect the baby or trigger labour.',
    source: 'Pregnancy dietary guidance',
    nameLt: 'Karis',
    aliasesLt: ['indiškas maistas', 'vištienos karis', 'aštrus karis'],
    summaryLt: 'Taip — karis saugus, aštrumas nesukelia gimdymo.',
    explanationLt:
      'Karis nėštumo metu saugus. Paplitęs mitas, kad aštrus maistas sukelia gimdymą, įrodymais nepagrįstas. Pagrindinis dėmesys — rėmuo ar refliuksas, kuris gali sustiprėti vėlesniame nėštumo laikotarpyje; tuomet švelnesni patiekalai gali jaustis geriau. Įsitikinkite, kad mėsa gerai išvirta, ir venkite žalių padažų iš nežinomų šaltinių.',
    reasonLt:
      'Kapsaicinas ir kario prieskoniai per placentą nepatenka tokiais kiekiais, kurie paveiktų kūdikį ar sukeltų gimdymą.',
    sourceLt: 'Nėštumo mitybos gairės',
  },
  {
    slug: 'kefir',
    verdict: 'safe',
    category: 'other',
    name: 'Kefir',
    aliases: ['milk kefir', 'fermented milk'],
    summary: 'Pasteurised kefir is safe; avoid unpasteurised versions.',
    explanation:
      'Shop-bought kefir made from pasteurised milk is safe in pregnancy and a useful source of probiotics. Unpasteurised or "raw milk" kefir should be avoided. Water kefir (a different product) is more similar to kombucha — check the label for alcohol content.',
    reason:
      'Pasteurisation destroys harmful bacteria. Fermentation itself is safe when the starting milk is pasteurised.',
    source: 'NHS guidance on dairy in pregnancy',
    nameLt: 'Kefyras',
    aliasesLt: ['pieno kefyras', 'fermentuotas pienas'],
    summaryLt: 'Pasterizuotas kefyras saugus; venkite nepasterizuotų.',
    explanationLt:
      'Parduotuvėje pirktas kefyras iš pasterizuoto pieno nėštumo metu saugus ir yra naudingas probiotikų šaltinis. Nepasterizuoto ar „žalio pieno” kefyro reikėtų vengti. Vandens kefyras (kitas produktas) panašesnis į kombuchą — patikrinkite etiketę dėl alkoholio.',
    reasonLt:
      'Pasterizacija sunaikina žalingas bakterijas. Pati fermentacija saugi, kai pradinis pienas pasterizuotas.',
    sourceLt: 'NHS gairės dėl pieno produktų nėštumo metu',
  },
  {
    slug: 'vegan-food',
    verdict: 'safe',
    category: 'other',
    name: 'Vegan / plant-based diet',
    aliases: ['plant based', 'vegetarian', 'veggie'],
    summary: 'Yes — well-planned vegan diets are safe in pregnancy.',
    explanation:
      'A well-planned vegan or vegetarian diet is safe throughout pregnancy. Key nutrients to watch: vitamin B12 (supplement is essential for vegans), iron (plant iron is less absorbed — pair with vitamin C), omega-3 (algae-based supplement recommended if no oily fish), calcium (fortified plant milks), iodine (can be low without dairy or fish — sometimes supplemented), and zinc. A pregnancy multivitamin suitable for vegans covers most of this.',
    reason:
      'Plant-based diets can fully meet pregnancy nutritional needs with attention to specific at-risk nutrients.',
    source: 'BDA vegan pregnancy guidance',
    nameLt: 'Veganiška / augalinė mityba',
    aliasesLt: ['augalinė mityba', 'vegetariška'],
    summaryLt: 'Taip — gerai suplanuota veganiška mityba nėštumo metu saugi.',
    explanationLt:
      'Gerai suplanuota veganiška ar vegetariška mityba saugi visą nėštumą. Pagrindinės maistinės medžiagos, kurias reikia stebėti: vitaminas B12 (veganams papildas būtinas), geležis (augalinė geležis prasčiau pasisavinama — derinkite su vitaminu C), omega-3 (rekomenduojamas iš dumblių jei nevartojate riebios žuvies), kalcis (praturtinti augaliniai pienai), jodas (gali trūkti be pieno produktų ar žuvies — kartais papildomas) ir cinkas. Veganams tinkamas nėštumo multivitaminas apima daugumą šių medžiagų.',
    reasonLt:
      'Augalinė mityba gali visiškai patenkinti nėštumo poreikius, skiriant dėmesio konkrečioms rizikos medžiagoms.',
    sourceLt: 'BDA gairės dėl veganiškos mitybos nėštumo metu',
  },
  {
    slug: 'spicy-chilli',
    verdict: 'safe',
    category: 'other',
    name: 'Chilli / hot peppers',
    aliases: ['chilli peppers', 'jalapeno', 'hot sauce', 'sriracha'],
    summary: 'Yes — chilli is safe and does not cause labour.',
    explanation:
      'Chilli and hot peppers are safe in pregnancy. They can worsen heartburn, particularly in the third trimester, but they do not affect the baby and do not induce labour. If they make you uncomfortable, reduce; otherwise, enjoy.',
    reason:
      'Capsaicin does not cross the placenta in physiologically relevant amounts. The "spicy food starts labour" myth is not supported by evidence.',
    source: 'Pregnancy dietary guidance',
    nameLt: 'Čili / aštrūs pipirai',
    aliasesLt: ['čili pipirai', 'jalapeño', 'aštrus padažas', 'sriracha'],
    summaryLt: 'Taip — čili saugūs ir gimdymo nesukelia.',
    explanationLt:
      'Čili ir aštrūs pipirai nėštumo metu saugūs. Jie gali sustiprinti rėmenį, ypač trečią trimestrą, bet kūdikio nepaveikia ir gimdymo nesukelia. Jei jaučiate diskomfortą — mažinkite; kitu atveju — mėgaukitės.',
    reasonLt:
      'Kapsaicinas per placentą nepatenka fiziologiškai reikšmingais kiekiais. Mitas, kad „aštrus maistas sukelia gimdymą”, įrodymais nepagrįstas.',
    sourceLt: 'Nėštumo mitybos gairės',
  },
  {
    slug: 'vinegar-pickles',
    verdict: 'safe',
    category: 'other',
    name: 'Vinegar & pickled foods',
    aliases: ['pickles', 'gherkins', 'pickled onions', 'sauerkraut'],
    summary: 'Yes — pickled and vinegar foods are safe.',
    explanation:
      'Vinegar and pickled foods (gherkins, pickled onions, pickled beetroot, commercial sauerkraut) are safe in pregnancy. Commercial fermented sauerkraut and kimchi are typically pasteurised and safe. Raw, fresh, unpasteurised fermented vegetables from specialty shops carry small Listeria risk — check the label or ask.',
    reason:
      'The acidity of vinegar and the salt in commercial fermented products prevent harmful bacteria. Raw unpasteurised ferments are a small risk.',
    source: 'NHS food safety guidance',
    nameLt: 'Actas ir marinuoti produktai',
    aliasesLt: ['marinuoti agurkai', 'marinuoti svogūnai', 'raugintieji kopūstai'],
    summaryLt: 'Taip — marinuoti ir acto produktai saugūs.',
    explanationLt:
      'Actas ir marinuoti produktai (agurkai, svogūnai, burokėliai, komerciniai raugintieji kopūstai) nėštumo metu saugūs. Komerciniai fermentuoti raugintieji kopūstai ir kimchi paprastai pasterizuoti ir saugūs. Žali, švieži, nepasterizuoti fermentuoti produktai iš specializuotų parduotuvių turi nedidelę Listeria riziką — patikrinkite etiketę arba pasiteiraukite.',
    reasonLt:
      'Acto rūgštumas ir druska komerciniuose fermentuotuose produktuose neleidžia augti žalingoms bakterijoms. Žali nepasterizuoti fermentai — nedidelė rizika.',
    sourceLt: 'NHS maisto saugos gairės',
  },
  {
    slug: 'crisps-snacks',
    verdict: 'safe',
    category: 'other',
    name: 'Crisps & snacks',
    aliases: ['chips', 'potato crisps', 'snacks', 'popcorn'],
    summary: 'Yes — safe, no pregnancy-specific concerns.',
    explanation:
      'Crisps, popcorn, and similar savoury snacks are safe in pregnancy. The only considerations are general — salt intake and balanced overall diet. Nothing in standard shop-bought crisps is specifically dangerous to pregnancy.',
    reason:
      'No ingredient in commercial crisps poses a pregnancy-specific risk. Standard dietary moderation applies.',
    source: 'Pregnancy dietary guidance',
    nameLt: 'Traškučiai ir užkandžiai',
    aliasesLt: ['bulvių traškučiai', 'užkandžiai', 'spragėsiai'],
    summaryLt: 'Taip — saugu, nėštumui specifinių rūpesčių nėra.',
    explanationLt:
      'Traškučiai, spragėsiai ir panašūs sūrūs užkandžiai nėštumo metu saugūs. Vieninteliai dėmesiai — bendri: druskos kiekis ir subalansuota visa mityba. Niekas įprastuose parduotuvėse pirktuose traškučiuose nėra specifiškai pavojinga nėštumui.',
    reasonLt:
      'Nė viena komercinių traškučių sudedamoji dalis nekelia nėštumui specifinės rizikos. Taikomas įprastas mitybos saikas.',
    sourceLt: 'Nėštumo mitybos gairės',
  },
  {
    slug: 'white-bread',
    verdict: 'safe',
    category: 'other',
    name: 'Bread (white, wholegrain, sourdough)',
    aliases: ['wholegrain bread', 'sourdough', 'baguette'],
    summary: 'Yes — all shop-bought breads are safe in pregnancy.',
    explanation:
      'All commercially-baked bread is safe in pregnancy, including white, wholegrain, sourdough, rye, and seeded varieties. Wholegrain is preferable nutritionally for fibre and iron content. UK white flour is now fortified with folic acid, adding a small boost to daily intake.',
    reason:
      'Commercially-baked bread has no pregnancy-specific risks. Wholegrain simply provides more fibre and micronutrients.',
    source: 'NHS guidance on carbohydrates in pregnancy',
    nameLt: 'Duona (baltoji, viso grūdo, raugo)',
    aliasesLt: ['viso grūdo duona', 'raugo duona', 'batonas'],
    summaryLt: 'Taip — visos parduotuvėse pirktos duonos saugios nėštumo metu.',
    explanationLt:
      'Visa komerciškai kepta duona nėštumo metu saugi, įskaitant baltąją, viso grūdo, raugo, rugio ir su sėklomis. Viso grūdo duona maistiniu požiūriu geresnė dėl skaidulų ir geležies kiekio. JK balti miltai dabar praturtinti folio rūgštimi, kas suteikia nedidelį papildomą kiekį kasdienei normai.',
    reasonLt:
      'Komerciškai kepta duona neturi nėštumui specifinių rizikų. Viso grūdo tiesiog suteikia daugiau skaidulų ir mikroelementų.',
    sourceLt: 'NHS gairės dėl angliavandenių nėštumo metu',
  },
  {
    slug: 'water',
    verdict: 'safe',
    category: 'other',
    name: 'Water (tap & bottled)',
    aliases: ['tap water', 'bottled water', 'mineral water', 'spring water'],
    summary: 'Yes — UK tap water and bottled water are both safe.',
    explanation:
      'UK tap water is safe throughout pregnancy — it is rigorously tested and regulated. Bottled still or mineral water is equally fine. Aim for 2–2.5 litres of fluid total per day in pregnancy, with most of this from water. Very high-mineral waters (like certain imported spa waters) are best not consumed in very large amounts, but occasional drinking is fine.',
    reason:
      'UK water supply standards are among the strictest in the world. Hydration needs increase in pregnancy.',
    source: 'NHS guidance on drinks in pregnancy',
    nameLt: 'Vanduo (iš čiaupo ir buteliuose)',
    aliasesLt: ['vanduo iš čiaupo', 'butelio vanduo', 'mineralinis vanduo', 'šaltinio vanduo'],
    summaryLt: 'Taip — JK čiaupo vanduo ir butelio vanduo abu saugūs.',
    explanationLt:
      'JK čiaupo vanduo saugus visą nėštumą — jis griežtai tiriamas ir reguliuojamas. Butelio negazuotas ar mineralinis vanduo vienodai tinkamas. Nėštumo metu siekite 2–2,5 litro skysčių per dieną, didžiąją dalį iš vandens. Labai mineralizuotų vandenų (pvz., tam tikrų importuotų kurortinių) labai dideliais kiekiais vartoti neverta, bet retkarčiais — tinka.',
    reasonLt:
      'JK vandens tiekimo standartai — vieni griežčiausių pasaulyje. Skysčių poreikis nėštumo metu didėja.',
    sourceLt: 'NHS gairės dėl gėrimų nėštumo metu',
  },
];

export function getFoodBySlug(slug: string): PregnancyFood | undefined {
  return pregnancyFoods.find((f) => f.slug === slug);
}

export function getFoodsByCategory(category: FoodCategory): PregnancyFood[] {
  return pregnancyFoods.filter((f) => f.category === category);
}

export function getAllFoodSlugs(): string[] {
  return pregnancyFoods.map((f) => f.slug);
}