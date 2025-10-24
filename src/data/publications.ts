export type Publication = {
  year: number;
  title: string;
  authors: string;
  venue: string;
  volume?: string;
  issue?: string;
  pages?: string;
  link?: string;
};

export const publications: Publication[] = [
  {
    year: 2021,
    title: 'Atypical advanced interatrial block due to giant atrial lipoma',
    authors: [
      'Gentille-Lorente, D. I.',
      'Scott, L.',
      '<strong>Escobar-Robledo, L. A.</strong>',
      'Mesa, M. M. A.',
      'Carreras, C. F.',
      'Baranchuk, A.',
      'Martínez, S. M.',
      'Elosua, R.',
      'Bayés, G. A.',
      '& Bayés-de-Luna, A.'
    ].join(', '),
    venue: 'Pacing and Clinical Electrophysiology (PACE)',
    volume: '44',
    issue: '4',
    pages: '737–739',
    link: 'https://onlinelibrary.wiley.com/doi/10.1111/pace.14210'
  },
  {
    year: 2021,
    title:
      'ECG patterns of typical and atypical advanced interatrial block: prevalence and clinical relevance',
    authors: [
      'Elosua, R.',
      '<strong>Escobar-Robledo, L. A.</strong>',
      'Massó-van Roessel, A.',
      'Martínez-Sellés, M.',
      'Baranchuk, A.',
      '& Bayés-de-Luna, A.'
    ].join(', '),
    venue: 'Revista Española de Cardiología (English Edition)',
    volume: '74',
    issue: '9',
    pages: '807–810',
    link: 'https://doi.org/10.1016/j.rec.2021.02.008'
  },
  {
    year: 2021,
    title:
      'A novel method for the noninvasive estimation of cardiac output with brachial oscillometric blood pressure measurements through an assessment of arterial compliance',
    authors: [
      'Álvarez-Montoya, D.',
      'Madrid-Muñoz, C.',
      '<strong>Escobar-Robledo, L.</strong>',
      'Gallo-Villegas, J.',
      '& Aristizábal-Ocampo, D.'
    ].join(', '),
    venue: 'Blood Pressure Monitoring',
    volume: '26',
    issue: '6',
    pages: '426–434',
    link: 'https://journals.lww.com/bpmonitoring/fulltext/2021/12000/A_novel_method_for_the_noninvasive_estimation_of.5.aspx'
  },
  {
    year: 2020,
    title:
      'Advanced interatrial block: A predictor of covert atrial fibrillation in embolic stroke of undetermined source',
    authors: [
      'Mendieta, G.',
      'Guasch, E.',
      'Weir, D.',
      'Aristizabal, D.',
      '<strong>Escobar-Robledo, L. A.</strong>',
      'Llull, L.',
      'Mont, L.',
      'Bayés de Luna, A.',
      '& Sitges, M.'
    ].join(', '),
    venue: 'Journal of Electrocardiology',
    volume: '58',
    pages: '113–118',
    link: 'https://doi.org/10.1016/j.jelectrocard.2019.11.050'
  },
  {
    year: 2020,
    title:
      'Baseline ECG and prognosis after transcatheter aortic valve implantation: the role of interatrial block',
    authors: [
      'Vicent, L.',
      'Fernández-Cordón, C.',
      'Nombela-Franco, L.',
      '<strong>Escobar-Robledo, L. A.</strong>',
      'Ayesta, A.',
      'Ariza-Solé, A.',
      'Gómez-Doblas, J. J.',
      'Bernal, E.',
      'Tirado-Conté, G.',
      'Cobiella, J.',
      'González-Saldivar, H.',
      'López-Otero, D.',
      'Díez-Villanueva, P.',
      'Sarnago, F.',
      'Armario, X.',
      'Bayés-de-Luna, A.',
      'Martínez-Sellés, M.',
      'Fadeuilhe Grau, E.',
      'Serra, A.',
      'Arzamendi, D.',
      'Millán, X.',
      'Díez-delHoyo, F.',
      'Grigorian, L.',
      'Juárez, M.',
      'Vázquez, M. E.',
      'Sanz, R.',
      'Gutiérrez, E.',
      'Elízaga, J.',
      'Fernández-Avilés, F.',
      'Alvarado Casas, T.',
      'Alfonso, F.',
      'Albarrán González de Trevilla, A.',
      'García Tejada, J.',
      'Gómez Blázquez, I. T.',
      'Guerrero Morales, C.',
      'Avanzas, P.',
      'Persia, Y.',
      'Moris, C.',
      'Sanmartin Pena, X. C.',
      'Lopez Pais, J.',
      'Muñoz, A.',
      'Muñoz, E.',
      '& Hernández, J. M.'
    ].join(', '),
    venue: 'Journal of the American Heart Association',
    volume: '9',
    issue: '22',
    pages: 'e017624',
    link: 'https://doi.org/10.1161/JAHA.120.017624'
  },
  {
    year: 2019,
    title:
      'Old teaching tools should not be forgotten: The value of the Lewis ladder diagram in understanding bigeminal rhythms',
    authors: [
      'Antiperovitch, P.',
      'Bayés de Luna, A.',
      'Nunes de Alencar, J.',
      'García-Niebla, J.',
      '<strong>Escobar-Robledo, L. A.</strong>',
      'Restrepo, D. W.',
      'Aristizabal, D.',
      'Massó van Roessel, A.',
      'Bayés-Genís, A.',
      '& Baranchuk, A.'
    ].join(', '),
    venue: 'Annals of Noninvasive Electrocardiology',
    volume: '24',
    issue: '5',
    pages: 'e12685',
    link: 'https://doi.org/10.1111/anec.12685'
  },
  {
    year: 2019,
    title:
      'Rationale and design of the Baseline Interatrial Block and Transcatheter Aortic Valve Implantation (BIT) registry',
    authors: [
      'Martínez-Sellés, M.',
      '<strong>Escobar-Robledo, L. A.</strong>',
      'Bernal, E.',
      'Nombela, L.',
      'Ayesta, A.',
      'Gómez-Doblas, J. J.',
      'López-Otero, D.',
      'González-Saldivar, H.',
      'Fernández-Cordón, C.',
      'Bayés-de-Luna, A.',
      '& Ariza-Solé, A.'
    ].join(', '),
    venue: 'Journal of Electrocardiology',
    volume: '57',
    pages: '100–103',
    link: 'https://pubmed.ncbi.nlm.nih.gov/31629098/'
  },
  {
    year: 2018,
    title:
      'Interatrial block and atrial remodeling assessed using speckle tracking echocardiography',
    authors: [
      'Lacalzada-Almeida, J.',
      'Izquierdo-Gómez, M. M.',
      'Belleyo-Belkasem, C.',
      'Barrio-Martínez, P.',
      'García-Niebla, J.',
      'Elosua, R.',
      'Jiménez-Sosa, A.',
      '<strong>Escobar-Robledo, L. A.</strong>',
      '& Bayés de Luna, A.'
    ].join(', '),
    venue: 'BMC Cardiovascular Disorders',
    volume: '18',
    issue: '1',
    pages: '38',
    link: 'https://doi.org/10.1186/s12872-018-0776-6'
  },
  {
    year: 2018,
    title:
      'Advanced interatrial block predicts new-onset atrial fibrillation and ischemic stroke in patients with heart failure: The “Bayes’ Syndrome-HF” study',
    authors: [
      '<strong>Escobar-Robledo, L. A.</strong>',
      'Bayés-de-Luna, A.',
      'Lupón, J.',
      'Baranchuk, A.',
      'Moliner, P.',
      'Martínez-Sellés, M.',
      'Zamora, E.',
      'de Antonio, M.',
      'Domingo, M.',
      'Cediel, G.',
      'Núñez, J.',
      'Santiago-Vacas, E.',
      '& Bayés-Genís, A.'
    ].join(', '),
    venue: 'International Journal of Cardiology',
    volume: '271',
    pages: '174–180',
    link: 'https://pubmed.ncbi.nlm.nih.gov/29801761/'
  },
  {
    year: 2018,
    title:
      'Atypical advanced interatrial blocks: Definition and electrocardiographic recognition',
    authors: [
      'Bayés de Luna, A.',
      '<strong>Escobar-Robledo, L. A.</strong>',
      'Aristizabal, D.',
      'Weir Restrepo, D.',
      'Mendieta, G.',
      'Massó van Roessel, A.',
      'Elosua, R.',
      'Bayés-Genís, A.',
      'Martínez-Sellés, M.',
      '& Baranchuk, A.'
    ].join(', '),
    venue: 'Journal of Electrocardiology',
    volume: '51',
    issue: '6',
    pages: '1091–1093',
    link: 'https://pubmed.ncbi.nlm.nih.gov/30497736/'
  },
  {
    year: 2018,
    title:
      'Interatrial block, frailty and prognosis in elderly patients with myocardial infarction',
    authors: [
      'Bernal, E.',
      'Bayés-Genís, A.',
      'Ariza-Solé, A.',
      'Formiga, F.',
      'Vidán, M. T.',
      '<strong>Escobar-Robledo, L. A.</strong>',
      'Aboal, J.',
      'Alcoberro, L.',
      'Guerrero, C.',
      'Ariza-Segovia, I.',
      'Hernández de Benito, A.',
      'Vilardell, P.',
      'Sánchez-Salado, J. C.',
      'Lorente, V.',
      'Bayés de Luna, A.',
      '& Martínez-Sellés, M.'
    ].join(', '),
    venue: 'Journal of Electrocardiology',
    volume: '51',
    issue: '1',
    pages: '1–7',
    link: 'https://pubmed.ncbi.nlm.nih.gov/28969847/'
  },
  {
    year: 2018,
    title:
      'Actualización de la muerte súbita cardiaca: epidemiología y estratificación del riesgo',
    authors: [
      'Bayés de Luna, A.',
      'Massó van-Roessel, A.',
      '<strong>Escobar-Robledo, L. A.</strong>',
      '& Arimany-Manso, J.'
    ].join(', '),
    venue: 'Revista Española de Medicina Legal',
    volume: '44',
    issue: '1',
    pages: '5–12',
    link: 'https://www.sciencedirect.com/science/article/abs/pii/S0377473217300901'
  },
  {
    year: 2018,
    title:
      'Corrigendum to “Interatrial block, frailty and prognosis in elderly patients with myocardial infarction”',
    authors: [
      'Bernal, E.',
      'Bayés-Genís, A.',
      'Ariza-Solé, A.',
      'Formiga, F.',
      'Vidán, M. T.',
      '<strong>Escobar-Robledo, L. A.</strong>',
      'Aboal, J.',
      'Alcoberro, L.',
      'Guerrero, C.',
      'Ariza-Segovia, I.',
      'Hernández de Benito, A.',
      'Vilardell, P.',
      'Sánchez-Salado, J. C.',
      'Lorente, V.',
      'Bayés de Luna, A.',
      '& Martínez-Sellés, M.'
    ].join(', '),
    venue: 'Journal of Electrocardiology',
    volume: '51',
    issue: '4',
    pages: '747',
    link: 'https://www.sciencedirect.com/science/article/pii/S0022073617302674'
  },
  {
    year: 2017,
    title: 'Diagnosis of interatrial block',
    authors: [
      'Bayés de Luna, A.',
      'Baranchuk, A.',
      '<strong>Escobar-Robledo, L. A.</strong>',
      'Massó van Roessel, A.',
      '& Martínez-Sellés, M.'
    ].join(', '),
    venue: 'Journal of Geriatric Cardiology',
    volume: '14',
    issue: '3',
    pages: '161',
    link: 'https://doi.org/10.11909/j.issn.1671-5411.2017.03.007'
  },
  {
    year: 2017,
    title: 'La onda P normal y patológica',
    authors: [
      'Bayés de Luna, A.',
      '<strong>Escobar-Robledo, L. A.</strong>',
      '& Massó-van Roessel, A.'
    ].join(', '),
    venue: 'Cardiocore',
    volume: '52',
    issue: '3',
    pages: '91–98',
    link: 'https://www.elsevier.es/es-revista-cardiocore-298-articulo-la-onda-p-normal-patologica-S1889898X17300531'
  },
  {
    year: 2017,
    title: 'Interatrial block and the risk of ischemic stroke',
    authors: [
      'Martínez-Sellés, M.',
      '<strong>Escobar-Robledo, L. A.</strong>',
      '& Baranchuk, A.'
    ].join(', '),
    venue: 'Journal of Atherosclerosis and Thrombosis',
    volume: '24',
    issue: '2',
    pages: '185–186',
    link: 'https://doi.org/10.5551/jat.37242'
  },
  {
    year: 2017,
    title:
      'Analysis of the association between electrocardiographic P-wave characteristics and atrial fibrillation in the REGICOR study',
    authors: [
      'Massó-van Roessel, A.',
      '<strong>Escobar-Robledo, L. A.</strong>',
      'Dégano, I. R.',
      'Grau, M.',
      'Sala, J.',
      'Ramos, R.',
      'Marrugat, J.',
      'Bayés de Luna, A.',
      '& Elosua, R.'
    ].join(', '),
    venue: 'Revista Española de Cardiología (English Edition)',
    volume: '70',
    issue: '10',
    pages: '841–847',
    link: 'https://pubmed.ncbi.nlm.nih.gov/28330820/'
  },
  {
    year: 2015,
    title:
      'The diagnosis and clinical implications of interatrial block',
    authors: [
      'Bayes de Luna, A.',
      'Massó-van Roessel, A.',
      '& <strong>Escobar-Robledo, L. A.</strong>'
    ].join(', '),
    venue: 'European Cardiology Review',
    volume: '10',
    issue: '1',
    pages: '54–59',
    link: 'https://www.ecrjournal.com/articles/diagnosis-and-clinical-implications-interatrial-block'
  }
];

export const bookChapters: Publication[] = [
  {
    year: 2017,
    title: 'Pathophysiology of the Interatrial Blocks',
    authors: [
      'Bayés de Luna, A.',
      'Massó-van Roessel, A.',
      '& <strong>Escobar-Robledo, L. A.</strong>'
    ].join(', '),
    venue:
      'Interatrial Block and Supraventricular Arrhythmias: Clinical Implications of Bayés’ Syndrome, Cardiotext Publishing',
    pages: '43–50'
  }
];
