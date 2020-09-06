// @flow

export const gender = [
  {
    name: 'female',
    label: 'Female',
    radioMode: true,
  },
  {
    radioMode: true,
    name: 'male',
    label: 'Male',
  },
  {
    radioMode: true,
    name: 'transgender_female',
    label: 'Transgender female',
  },
  {
    radioMode: true,
    name: 'transgender_male',
    label: 'Transgender male',
  },
  {
    radioMode: true,
    name: 'does_not_identify',
    label: `I'd prefer not to say`,
  },
];

export const riskFactors = [
  {
    name: 'birth_problems',
    label: 'Birth problems',
  },
  {
    name: 'genetically-related_relatives_with_epilepsy',
    label: 'Genetically-related relatives with epilepsy',
  },
  {
    name: 'severe_head_trauma',
    label: 'Severe head trauma',
  },
  {
    name: 'brain_injury_from_lack_of_oxygen',
    label: 'Brain injury from lack of oxygen',
  },
  {
    name: 'meningitis_or_brain_infection',
    label: 'Meningitis or brain infection',
  },
  {
    name: 'stroke',
    label: 'Stroke',
  },
  {
    name: 'brain_bleed',
    label: 'Brain bleed',
  },
  {
    name: 'autism_spectrum_disorder',
    label: 'Autism, autism spectrum disorder',
  },
  {
    name: 'non-autism_development_delay',
    label: 'Non-autism developmental delay',
  },
  {
    name: 'febrile_seizures',
    label: 'Seizures with fever before 6 years of age (febrile seizures)',
  },
  {
    name: 'brain_tumor',
    label: 'Brain tumor',
  },
  {
    label: 'Other',
    name: 'other',
    hasInput: true,
  },
  {
    name: 'none',
    label: 'None',
    radioMode: true,
    checkboxShape: 'square',
  },
];

export const surgeryList = [
  {
    label: 'Vagus nerve stimulation',
    name: 'vagus_nerve_stimulation',
  },
  {
    label: 'Responsive neurostimulation (Neuropace)',
    name: 'responsive_neurostimulation',
  },
  {
    label: 'Deep brain stimulation of thalamus',
    name: 'deep_brain_stimulation_of_thalamus',
  },
  {
    label: 'Removal of brain tissue',
    name: 'removal_of_brain_tissue',
  },
  {
    label: 'Other',
    name: 'other',
    hasInput: true,
  },
  {
    label: 'None',
    name: 'none',
    radioMode: true,
    checkboxShape: 'square',
  },
];

export const ethnicity = [
  {
    label: 'Caucasian',
    name: 'caucasian',
    radioMode: true,
  },
  {
    label: 'African-American',
    name: 'african_american',
    radioMode: true,
  },
  {
    label: 'Hispanic',
    name: 'hispanic',
    radioMode: true,
  },
  {
    label: 'Asian',
    name: 'asian',
    radioMode: true,
  },
  {
    label: 'Pacific Islander',
    name: 'pacific_islander',
    radioMode: true,
  },
  {
    label: 'Mixed',
    name: 'mixed',
    radioMode: true,
  },
  {
    label: 'Other',
    name: 'other',
    radioMode: true,
    hasInput: true,
  },
  {
    label: 'I’d prefer not to say',
    name: 'prefer_not_to_say',
    radioMode: true,
  },
];

export const dominantHand = [
  {
    label: 'Right',
    name: 'right',
    radioMode: true,
  },
  {
    radioMode: true,
    label: 'Left',
    name: 'left',
  },
  {
    radioMode: true,
    label: 'Ambidextrous (able to switch for most tasks with equal skill)',
    name: 'ambidextrous',
  },
];

export const userHealthProblems = [
  {
    label: 'Allergic:',
    name: 'allergic:',
    hasInput: true,
  },
  {
    label: 'Blood:',
    name: 'blood:',
    hasInput: true,
  },
  {
    label: 'Cardiovascular:',
    name: 'cardiovascular:',
    hasInput: true,
  },
  {
    label: 'General (Constitutional):',
    name: 'general',
    hasInput: true,
  },
  {
    label: 'ENT (Ear, Nose, Throat',
    name: 'ent',
    hasInput: true,
  },
  {
    label: 'Gastrointestinal',
    name: 'gastrointestinal',
    hasInput: true,
  },
  {
    label: 'Gentiourinary',
    name: 'gentiourinary',
    hasInput: true,
  },
  {
    label: 'Musculoskeletal:',
    name: 'musculoskeletal',
    hasInput: true,
  },
  {
    label: 'Neurological:',
    name: 'neurological',
    hasInput: true,
  },
  {
    label: 'Psychiatric:',
    name: 'psychiatric',
    hasInput: true,
  },
  {
    label: 'Respiratory:',
    name: 'respiratory',
    hasInput: true,
  },
  {
    label: 'Skin:',
    name: 'skin',
    hasInput: true,
  },
];

const pillboxSliderProps = {
  question: 'How well did this work?',
  choices: [
    {
      id: '1',
      value: 'No',
    },
    {
      id: '2',
      value: 'Somewhat',
    },
    {
      id: '3',
      value: 'Fully',
    },
    {
      id: '4',
      value: 'Unsure',
    },
  ],
};

export const seizureMedications = [
  {
    label: 'Brivaracetam (Briviact)',
    name: 'brivaracetam_(briviact)',
    hasPillboxSlider: true,
    pillboxSliderProps,
  },
  {
    label: 'Carbamazepine (Tegretol, Carbatrol)',
    name: 'carbamazepine_(tegretol,_carbatrol)',
    hasPillboxSlider: true,
    pillboxSliderProps,
  },
  {
    label: 'Cannabadiol (Epidiolex)',
    name: 'cannabadiol',
    hasPillboxSlider: true,
    pillboxSliderProps,
  },
  {
    label: 'Clobazam (Onfi, Frisium, Urbanol)',
    name: 'clobazam',
    hasPillboxSlider: true,
    pillboxSliderProps,
  },
  {
    label: 'Clonazepam (Klonopin)',
    name: 'clonazepam_(klonopin)',
    hasPillboxSlider: true,
    pillboxSliderProps,
  },
  {
    label: 'Clorazepate (Tranxene)',
    name: 'clorazepate_(tranxene)',
    hasPillboxSlider: true,
    pillboxSliderProps,
  },
  {
    label: 'Diazepam (Valium)',
    name: 'diazepam_(valium)',
    hasPillboxSlider: true,
    pillboxSliderProps,
  },
  {
    label: 'Eslicarbazepine (Aptiom)',
    name: 'eslicarbazepine_(aptiom)',
    hasPillboxSlider: true,
    pillboxSliderProps,
  },
  {
    label: 'Ethotoin (Peganone)',
    name: 'ethotoin_(peganone)',
    hasPillboxSlider: true,
    pillboxSliderProps,
  },
  {
    label: 'Ethosuximide (Zarontin)',
    name: 'ethosuximide_(zarontin)',
    hasPillboxSlider: true,
    pillboxSliderProps,
  },
  {
    label: 'Felbamate (Felbatol)',
    name: 'felbamate',
    hasPillboxSlider: true,
    pillboxSliderProps,
  },
  {
    label: 'Gabapentin (Neurontin)',
    name: 'gabapentin_(neurontin)',
    hasPillboxSlider: true,
    pillboxSliderProps,
  },
  {
    label: 'Lacosamide (Vimpat)',
    name: 'lacosamide_(vimpat)',
    hasPillboxSlider: true,
    pillboxSliderProps,
  },
  {
    label: 'Lamotrigine (Lamictal)',
    name: 'lamotrigine_(lamictal)',
    hasPillboxSlider: true,
    pillboxSliderProps,
  },
  {
    label: 'Levetiracetam (Keppra)',
    name: 'levetiracetam_(keppra)',
    hasPillboxSlider: true,
    pillboxSliderProps,
  },
  {
    label: 'Lorazepam (Ativan)',
    name: 'lorazepam_(ativan)',
    hasPillboxSlider: true,
    pillboxSliderProps,
  },
  {
    label: 'Oxcarbazepine (Trileptal)',
    name: 'oxcarbazepine_(trileptal)',
    hasPillboxSlider: true,
    pillboxSliderProps,
  },
  {
    label: 'Perampanel (Fycompa)',
    name: 'perampanel_(fycompa)',
    hasPillboxSlider: true,
    pillboxSliderProps,
  },
  {
    label: 'Phenobarbital (Luminal)',
    name: 'phenobarbital_(luminal)',
    hasPillboxSlider: true,
    pillboxSliderProps,
  },
  {
    label: 'Phenytoin (Dilantin)',
    name: 'phenytoin_(dilantin)',
    hasPillboxSlider: true,
    pillboxSliderProps,
  },
  {
    label: 'Pregabalin (Lyrica)',
    name: 'pregabalin_(lyrica)',
    hasPillboxSlider: true,
    pillboxSliderProps,
  },
  {
    label: 'Primidone (Mysoline)',
    name: 'primidone',
    hasPillboxSlider: true,
    pillboxSliderProps,
  },
  {
    label: 'Rufinamide (Banzel)',
    name: 'rufinamide_(banzel)',
    hasPillboxSlider: true,
    pillboxSliderProps,
  },
  {
    label: 'Tiagabine (Gabitril)',
    name: 'tiagabine_(gabitril)',
    hasPillboxSlider: true,
    pillboxSliderProps,
  },
  {
    label: 'Topiramate (Topamax)',
    name: 'topiramate_(topamax)',
    hasPillboxSlider: true,
    pillboxSliderProps,
  },
  {
    label: 'Valproic acid (Depakote)',
    name: 'valproic_acid_(depakote)',
    hasPillboxSlider: true,
    pillboxSliderProps,
  },
  {
    label: 'Vigabatrin (Sabril)',
    name: 'vigabatrin_(sabril)',
    hasPillboxSlider: true,
    pillboxSliderProps,
  },
  {
    label: 'Zonisamide (Zonegran)',
    name: 'zonisamide_(zonegran)',
    hasPillboxSlider: true,
    pillboxSliderProps,
  },
];

export const sideEffects = [
  {
    label: 'Balance, coordination and walking',
    name: 'balance,_coordination_and_walking',
    optionList: [
      {
        label: 'Dizziness or Lightheadedness',
        name: 'dizziness_or_lightheadedness',
      },
      {
        label: 'Incoordination',
        name: 'incoordination',
      },
      {
        label: 'Tremor or Shaking',
        name: 'tremor_or_shaking',
      },
      {
        label: 'Unsteady Walking',
        name: 'unsteady_walking',
      },
    ],
  },
  {
    label: 'Digestive',
    name: 'digestive',
    optionList: [
      {
        label: "Abdominal pain",
        name: "abdominal_pain"
      },
      {
        label: "Appetite increase or weight gain",
        name: "appetite_increase_or_weight_gain"
      },
      {
        label: "Appetite decrease or weight loss",
        name: "appetite_decrease_or_weight_loss"
      },
      {
        label: "Constipation",
        name: "constipation"
      },
      {
        label: "Diarrhea",
        name: "diarrhea"
      },
      {
        label: "Stomach problems",
        name: "stomach_problems"
      },
      {
        label: "Nausea",
        name: "nausea"
      },
      {
        label: "Vomiting",
        name: "vomiting"
      },
    ],
  },
  {
    label: 'Energy',
    name: 'energy',
    optionList: [
      {
        label: "Insomnia",
        name: "insomnia"
      },
      {
        label: "Sleepiness or tiredness",
        name: "sleepiness_or_tiredness"
      },
    ],
  },
  {
    label: 'Pain',
    name: 'pain',
    optionList: [
      {
        label: "Body or joint pains",
        name: "body_or_joint_pains"
      },
      {
        label: "Headache",
        name: "headache"
      },
      {
        label: "Other pain",
        name: "other_pain"
      },
    ],
  },
  {
    label: 'Skin',
    name: 'skin',
    optionList: [
      {
        label: "Acne",
        name: "acne"
      },
      {
        label: "Hair change",
        name: "hair_change"
      },
      {
        label: "Itching or breakout",
        name: "itching_or_breakout"
      },
      {
        label: "Skin rash",
        name: "skin_rash"
      },
    ],
  },
  {
    label: 'Psychological',
    name: 'psychological',
    optionList: [
      {
        label: "Aggression",
        name: "aggression"
      },
      {
        label: "Anger or hostility",
        name: "anger_or_hostility"
      },
      {
        label: "Anxiety",
        name: "anxiety"
      },
      {
        label: "Depression",
        name: "depression",
        showPopupOnSelection: true
      },
      {
        label: "Despair or feelings of worthlessness",
        name: "despair_or_feelings_of_worthlessness"
      },
      {
        label: "Hallucination",
        name: "hallucination"
      },
      {
        label: "Nervousness",
        name: "nervousness"
      },
      {
        label: "Panic Attack",
        name: "panic_attack"
      },
      {
        label: "Psychosis",
        name: "psychosis"
      },
    ],
  },
  {
    label: 'Thinking-memory',
    name: 'thinking-memory',
    optionList: [
      {
        label: "Cognitive or thinking problems",
        name: "cognitive_or_thinking_problems"
      },
      {
        label: "Confusion",
        name: "confusion"
      },
      {
        label: "Speech changes",
        name: "speech_changes"
      },
    ],
  },
  {
    label: 'Vision',
    name: 'vision',
    optionList: [
      {
        label: "Blurred or double vision",
        name: "blurred_or_double_vision"
      },
    ],
  },
  {
    label: 'None',
    name: 'none',
    radioMode: true,
    checkboxShape: 'square',
  },
];

export const medicalConditions = [
  {
    label: 'Arthritis',
    name: 'arthritis',
    optionList: [
      {
        label: 'Osteoarthritis',
        name: 'osteoarthritis',
      },
      {
        label: 'Rheumatoid arthritis',
        name: 'rheumatoid_arthritis',
      },
      {
        label: 'Other',
        name: 'other',
        hasInput: true,
      },
    ],
  },
  {
    label: 'Auto-immune',
    name: 'autoimmune'
  },
  {
    label: 'Blood disease (eg clotting, anemia, bleeding disorder)',
    name: 'blood_disease',
    optionList: [
      {
        label: 'Anemia',
        name: 'anemia',
      },
      {
        label: 'Bleeding disorder',
        name: 'bleeding_disorder',
      },
      {
        label: 'Leukemia',
        name: 'leukemia',
      },
      {
        label: 'Clotting disorder',
        name: 'clotting_disorder',
      },
      {
        label: 'Other blood disease',
        name: 'other_blood_disease',
        hasInput: true,
      },
    ],
  },
  {
    label: 'Blood Pressure Problem',
    name: 'blood_pressure_problem',
    optionList: [
      {
        label: 'Arteriosclerosis',
        name: 'arteriosclerosis',
      },
      {
        label: 'High blood pressure (Hypertension)',
        name: 'hypertension',
      },
      {
        label: 'Low blood pressure',
        name: 'low_blood_pressure',
      },
      {
        label: 'Fainting',
        name: 'fainting',
      },
      {
        label: 'Other blood pressure disease',
        name: 'other_blood_pressure_disease',
        hasInput: true,
      },
    ],
  },
  {
    label: 'Cancer',
    name: 'cancer',
    optionList: [
      {
        label: 'Brain tumor, benign',
        name: 'brain_tumor_benign',
      },
      {
        label: 'Brain tumor, malignant',
        name: 'brain_tumor_malignant',
      },
      {
        label: 'Lung cancer',
        name: 'lung_cancer',
      },
      {
        label: 'Breast cancer',
        name: 'breast_cancer',
      },
      {
        label: 'Bowel cancer',
        name: 'bowel_cancer',
      },
      {
        label: 'Bone cancer',
        name: 'bone_cancer',
      },
      {
        label: 'Pancreatic cancer',
        name: 'pancreatic_cancer',
      },
      {
        label: 'Prostate cancer',
        name: 'prostate_cancer',
      },
      {
        label: 'Thyroid cancer',
        name: 'thyroid_cancer',
      },
      {
        label: 'Skin cancer, either melanoma or squamous (not basal cell)',
        name: 'skin_cancer',
      },
      {
        label: 'Blood cancer (Lymphoma)',
        name: 'blood_cancer',
      },
      {
        label: 'Other cancer',
        name: 'other_cancer',
        hasInput: true,
      },
    ],
  },
  {
    label: 'Digestive/GI',
    name: 'digestive/gi',
    optionList: [
      {
        label: 'Ulcers',
        name: 'ulcers',
      },
      {
        label: 'Chronic diarrhea',
        name: 'chronic_diarrhea',
      },
      {
        label: 'Chronic constipation',
        name: 'chronic_constipation',
      },
      {
        label: 'Ulcerative colitis/crohn’s disease',
        name: 'crohns_disease',
      },
      {
        label: 'Irritable bowel disorder (ie: spastic colon)',
        name: 'irritable_bowel_disorder',
      },
      {
        label: 'Other digestive disease:',
        name: 'other_digestive_disease',
        hasInput: true,
      },
    ],
  },
  {
    label: 'Heart Disease',
    name: 'heart_disease',
    optionList: [
      {
        label: 'Angina (chest pain)',
        name: 'angina',
      },
      {
        label: 'Heart attack (myocardial infarction)',
        name: 'heart_attack',
      },
      {
        label: 'Heart rhythm problem or atrial fibrillation',
        name: 'heart_rhythm_problem',
      },
      {
        label: 'I have an implanted pacemaker or defibrillator',
        name: 'implanted_pacemaker_or_defibrillator',
      },
      {
        label: 'Congenital heart disease (present from birth)',
        name: 'congenital_heart_disease_birth',
      },
      {
        label: 'Congenital heart disease (acquired over time)',
        name: 'congenital_heart_disease_over_time',
      },
      {
        label: 'Other heart disease:',
        name: 'other_heart_disease',
        hasInput: true,
      },
    ],
  },
  {
    label: 'Hepatitis/Liver',
    name: 'hepatitis/liver',
  },
  {
    label: 'Hormone Imbalance (eg diabetes, thyroid, or other problem)',
    name: 'hormone_imbalance',
    optionList: [
      {
        label: 'Diabetes',
        name: 'diabetes',
      },
      {
        label: 'Infertility',
        name: 'infertility',
      },
      {
        label: 'Thyroid disease',
        name: 'thyroid_disease',
      },
      {
        label: 'Polycystic ovarian syndrome (PCOS)',
        name: 'polycystic_ovarian_syndrome',
      },
      {
        label: 'Cushing’s disease',
        name: 'cushings_disease',
      },
      {
        label: 'Addison’s disease (Adrenal insufficiency)\n',
        name: 'addisons_disease',
      },
      {
        label: 'Other hormone disease:',
        name: 'other_hormone_disease',
        hasInput: true,
      },
    ],
  },
  {
    label: 'Infectious Disease',
    name: 'infectious_disease',
    optionList: [
      {
        label: 'HIV (+)',
        name: 'hiv',
      },
      {
        label: 'Hepatitis',
        name: 'hepatitis',
      },
      {
        label: 'History of meningitis from infection',
        name: 'meningitis',
      },
      {
        label: 'Herpes or syphilis',
        name: 'herpes',
      },
      {
        label: 'Other chronic infectious disease:',
        name: 'other_chronic_infections_disease',
        hasInput: true,
      },
    ],
  },
  {
    label: 'Kidney Disease or Stones',
    name: 'kidney_disease_or_stones',
  },
  {
    label: 'Lungs (eg asthma, emphysema, etc)',
    name: 'lungs',
    optionList: [
      {
        label: 'Asthma',
        name: 'asthma',
      },
      {
        label: 'Chronic obstructive pulmonary disease (COPD)',
        name: 'chronic_obstructive_pulmonary_disease',
      },
      {
        label: 'Emphysema',
        name: 'emphysema',
      },
      {
        label: 'Pneumonia',
        name: 'pneumonia',
      },
      {
        label: 'Other lung disease:',
        name: 'other_lung_disease',
        hasInput: true,
      },
    ],
  },
  {
    label: 'Neurological',
    name: 'neurological',
    optionList: [
      {
        label: 'Migraines or other headaches',
        name: 'migraines_or_headaches',
      },
      {
        label: 'Alzheimer’s or other dementia',
        name: 'alzheimers_or_other_dementia',
      },
      {
        label: 'Developmental delay (e.g. Down’s Syndrome, Autism, Fragile X or other cause)',
        name: 'developmental_delay',
      },
      {
        label: 'Multiple Sclerosis (MS)',
        name: 'multiple_sclerosis',
      },
      {
        label: 'Muscle Disease, such as dystrophy, atrophy, or other',
        name: 'muscle_disease',
      },
      {
        label: 'Sleep Apnea',
        name: 'sleep_apnea',
      },
      {
        label: 'Narcolepsy',
        name: 'narcolepsy',
      },
      {
        label: 'Neuropathy or nerve disease',
        name: 'neuropathy',
      },
      {
        label: 'Parkinson’s disease or other movement disorder',
        name: 'parkinsons_or_movement_disorder',
      },
      {
        label: 'Isolated tremor (e.g. essential or familial)',
        name: 'isolated_tremor',
      },
      {
        label: 'Stroke or brain bleed',
        name: 'stroke_or_brain_bleed',
      },
      {
        label: 'Other neurological disease:',
        name: 'other_neurological_disease',
        hasInput: true,
      },
    ],
  },
  {
    label: 'Neuroatypical/Behavioral',
    name: 'neuroatypical/behavioral',
  },
  {
    label: 'Psychiatric/Psychological',
    name: 'psychiatric/psychological',
    optionList: [
      {
        label: 'Anxiety disorder',
        name: 'anxiety_disorder',
      },
      {
        label: 'Major depression',
        name: 'major_depression',
      },
      {
        label: 'Bipolar disorder',
        name: 'bipolar_disorder',
      },
      {
        label: 'Schizophrenia, or other psychotic disorder',
        name: 'schizophrenia',
      },
      {
        label: 'Post-traumatic stress disorder (PTSD)',
        name: 'ptsd',
      },
      {
        label: 'Personality Disorder',
        name: 'personality_disorder',
      },
      {
        label: 'Other psychiatric disease:',
        name: 'other_psychiatric_disease',
        hasInput: true,
      },
    ],
  },
  {
    label: 'Trauma (includes traumatic brain injury or concussions)',
    name: 'trauma',
    optionList: [
      {
        label: 'Anxiety disorder',
        name: 'anxiety_disorder',
      },
      {
        label: 'Major depression',
        name: 'major_depression',
      },
      {
        label: 'Bipolar disorder',
        name: 'bipolar_disorder',
      },
      {
        label: 'Schizophrenia, or other psychotic disorder',
        name: 'schizophrenia',
      },
      {
        label: 'Post-traumatic stress disorder (PTSD)',
        name: 'ptsd',
      },
      {
        label: 'Personality Disorder',
        name: 'personality_disorder',
      },
      {
        label: 'Other psychiatric disease:',
        name: 'other_psychiatric_disease',
        hasInput: true,
      },
    ],
  },
  {
    label: 'Sleep Disorder (includes apnea)',
    name: 'sleep_disorder',
  },
  {
    label: 'Other',
    name: 'other',
    hasInput: true,
  },
  {
    label: 'None',
    name: 'none',
    radioMode: true,
    checkboxShape: 'square',
  },
];

export const seizureDuration = [
  {
    label: 'Short',
    name: 'Short',
    radioMode: true,
  },
  {
    label: 'Normal',
    name: 'Normal',
    radioMode: true,
  },
  {
    label: 'Long',
    name: 'Long',
    radioMode: true,
  },
];

export const sideEffectStrength = [
  {
    label: 'None',
    name: 'None',
    radioMode: true,
  },
  {
    label: 'Mild',
    name: 'Mild',
    radioMode: true,
  },
  {
    label: 'Moderate',
    name: 'Moderate',
    radioMode: true,
  },
  {
    label: 'Severe',
    name: 'Severe',
    radioMode: true,
  },
];

export const education = [
  {
    label: 'Pre-School, or Monitored Day Program Only',
    name: 'preschool_or_monitored_day_program_only',
    radioMode: true,
  },
  {
    label: 'Less than 8th grade',
    name: 'less_than_8th_grade',
    radioMode: true,
  },
  {
    label: 'Some High School',
    name: 'some_high_school',
    radioMode: true,
  },
  {
    label: 'High School Graduate or GED',
    name: 'high_school_graduate_or_ged',
    radioMode: true,
  },
  {
    label: 'Some College',
    name: 'some_college',
    radioMode: true,
  },
  {
    label: 'College graduate (2 or 4 year)',
    name: 'college_graduate',
    radioMode: true,
  },
  {
    label: 'Master’s Degree',
    name: 'masters_degree',
    radioMode: true,
  },
  {
    label: 'Professional or other Advanced Degree',
    name: 'professional_or_other_advanced_degree',
    radioMode: true,
  },
];

export const alcoholChoices = [
  {
    label: 'Not at all',
    name: 'not_at_all',
    radioMode: true,
  },
  {
    label: 'Occasionally',
    name: 'occasionally',
    radioMode: true,
  },
  {
    label: 'Regularly (at least 8 drinks per week)',
    name: 'regularly',
    radioMode: true,
  },
];

export const livingSituation = [
  {
    label: 'Alone',
    name: 'alone',
    radioMode: true,
  },
  {
    label: 'With parent(s)/guardian(s)',
    name: 'with_parent_guardian',
    radioMode: true,
  },
  {
    label: 'With other relative',
    name: 'with_other_relative',
    radioMode: true,
  },
  {
    label: 'Cohabitate with partner(s)',
    name: 'cohabitate_with_partner',
    radioMode: true,
  },
  {
    label: 'With unrelated housemate(s)',
    name: 'with_unrelated_housemate',
    radioMode: true,
  },
  {
    label: 'Have live-in or daily full-time caretaker',
    name: 'live_in_or_ft_caretaker',
    radioMode: true,
  },
  {
    label: 'Group care home',
    name: 'group_care_home',
    radioMode: true,
  },
  {
    label: 'Homeless',
    name: 'homeless',
    radioMode: true,
  },
];

export const seizureTimes = [
  {
    label: '1',
    name: '1',
    radioMode: true,
  },
  {
    label: '2',
    name: '2',
    radioMode: true,
  },
  {
    label: '3',
    name: '3',
    radioMode: true,
  },
  {
    label: '4',
    name: '4',
    radioMode: true,
  },
  {
    label: '5',
    name: '5',
    radioMode: true,
  },
  {
    label: '6-10',
    name: '6-10',
    radioMode: true,
  },
  {
    label: '11-15',
    name: '11-15',
    radioMode: true,
  },
  {
    label: '16-20',
    name: '16-20',
    radioMode: true,
  },
  {
    label: '>20',
    name: '>20',
    radioMode: true,
  },
];

export const seizureStrength = [
  {
    label: 'Mild',
    name: 'Mild',
    radioMode: true,
  },
  {
    label: 'Moderate',
    name: 'Moderate',
    radioMode: true,
  },
  {
    label: 'Severe',
    name: 'Severe',
    radioMode: true,
  },
];

export const tobaccoUse = [
  {
    label: 'Never Smoked',
    name: 'never_smoked',
    radioMode: true,
  },
  {
    label: 'Former Smoker (at least 1 year since last cigarette',
    name: 'former_smoker',
    radioMode: true,
  },
  {
    label: 'Current Smoker',
    name: 'current_smoker',
    radioMode: true,
    optionList: [
      {
        label: 'Occasional, or Irregular',
        name: 'occasional_or_irregular',
        radioMode: true,
      },
      {
        label: 'Regular, Light (less than 1 pack per week)',
        name: 'regular_light',
        radioMode: true,
      },
      {
        label: 'Regular, Medium (up to 1 pack per day)',
        name: 'regular_medium',
        radioMode: true,
      },
      {
        label: 'Regular, Heavy (over 1 pack per day)',
        name: 'regular_heavy',
        radioMode: true,
      },
    ],
  },
];

export const relatives = [
  {
    label: 'Father',
    name: 'father',
  },
  {
    label: 'Mother',
    name: 'mother',
  },
  {
    label: 'Sibling',
    name: 'sibling',
  },
  {
    label: 'Biological Child',
    name: 'biological_child',
  },
  {
    label: 'Niece',
    name: 'niece',
  },
  {
    label: 'Aunt',
    name: 'aunt',
  },
  {
    label: 'Uncle',
    name: 'uncle',
  },
  {
    label: 'Paternal Grandparent',
    name: 'paternal_grandparent',
  },
  {
    label: 'Maternal Grandparent',
    name: 'maternal_grandparent',
  },
  {
    label: 'Yes, in an unspecified or unknown relative',
    name: 'yes_in_an_unspecified_or_unknown_relative',
  },
  {
    label: 'None',
    name: 'none',
    radioMode: true,
    checkboxShape: 'square',
  },
];

export const warningSigns = [
  {
    label: 'Remain Still (activity arrest)',
    name: 'remain_still',
  },
  {
    label: 'Deja vu (familiar feeling)',
    name: 'deja_vu',
  },
  {
    label: 'Gastrointestinal Upset, or stomach feeling',
    name: 'gastrointestinal_upset_or_stomach_feeling',
  },
  {
    label: 'Heat or Cold Sense',
    name: 'heat_or_cold_sense',
  },
  {
    label: 'Goosebumps',
    name: 'goosebumps',
  },
  {
    label: 'Tingling of Face or Body Part',
    name: 'tingling_of_face_or_body_part',
  },
  {
    label: 'Twitching of Face or Body Part',
    name: 'twitching_of_face_or_body_part',
  },
  {
    label: 'Fear',
    name: 'fear',
  },
  {
    label: 'Abnormal Smell',
    name: 'abnormal_smell',
  },
  {
    label: 'Abnormal Taste',
    name: 'abnormal_taste',
  },
  {
    label: 'Abnormal Vision',
    name: 'abnormal_vision',
  },
  {
    label: 'Abnormal Sound',
    name: 'abnormal_sound',
  },
  {
    label: 'Dizziness',
    name: 'dizziness',
  },
  {
    label: 'Other',
    name: 'other',
    hasInput: true,
  },
  {
    label: 'None',
    name: 'none',
    radioMode: true,
    checkboxShape: 'square',
  },
];

export const seizureDuration2 = [
  {
    label: 'Less than 10 seconds',
    name: 'less_than_10_seconds',
    radioMode: true,
  },
  {
    label: '10 to 30 seconds',
    name: '10_to_30_seconds',
    radioMode: true,
  },
  {
    label: '30 seconds to five minutes',
    name: '30_seconds_to_five_minutes',
    radioMode: true,
  },
  {
    label: 'More than five minutes',
    name: 'more_than_five_minutes',
    radioMode: true,
  },
  {
    label: 'Not sure',
    name: 'not_sure',
    radioMode: true,
  },
];

export const seizureMovements = [
  {
    label: "Repetitive mouth or hand movements",
    name: "repetitive_mouth_or_hand_movements"
  },
  {
    label: "Stiffening of limbs",
    name: "stiffening_of_limbs",
    optionList: [
      {
        label: "One side at first, includes twisting",
        name: "one_side_at_first_includes_twisting"
      },
      {
        label: "Both sides at first",
        name: "both_sides_at_first"
      },
    ]
  },
  {
    label: "Rhythmic jerking of limbs",
    name: "rhythmic_jerking_of_limbs",
    optionList: [
      {
        label: "One side at first, includes twisting",
        name: "one_side_at_first_includes_twisting"
      },
      {
        label: "Both sides at first",
        name: "both_sides_at_first",
      },
    ]
  },
  {
    label: "Going limp",
    name: "going_limp",
    optionList: [
      {
        label: "One side at first, includes twisting",
        name: "one_side_at_first_includes_twisting"
      },
      {
        label: "Both sides at first",
        name: "both_sides_at_first"
      },
    ]
  },
  {
    label: "Agitated thrashing or “pedaling” or kicking of feet",
    name: "agitated_thrashing_or_“pedaling”_or_kicking_of_feet"
  },
  {
    label: "Other",
    name: "other",
    hasInput: true
  },
  {
    label: "None",
    name: "none",
    radioMode: true,
    checkboxShape: "square"
  },
]

export const seizureAwareness = [
  {
    label: "Aware",
    name: "aware",
    radioMode: true,
  },
  {
    label: "Unaware",
    name: "unaware",
    radioMode: true,
  },
  {
    label: "Awareness or memory are impaired",
    name: "awareness_or_memory_are_impaired",
    radioMode: true,
  },
  {
    label: "Frozen but aware",
    name: "frozen_but_aware",
    radioMode: true,
  },
  {
    label: "Other",
    name: "other",
    hasInput: true,
    radioMode: true,
  },
];

export const seizureAttributes = [
  {
    label: 'Emotions',
    name: 'emotions',
  },
  {
    label: 'Heart Racing',
    name: 'heart_racing',
  },
  {
    label: 'Flushing or Sweating',
    name: 'flushing_or_sweating',
  },
  {
    label: 'Throat tightness',
    name: 'throat_tightness',
  },
  {
    label: 'Freezing during seizure',
    name: 'freezing_during_seizure',
  },
  {
    label: 'Trouble speaking or understanding',
    name: 'trouble_speaking_or_understanding',
  },
  {
    label: 'Trouble thinking or confusion',
    name: 'trouble_thinking_or_confusion',
  },
  {
    label: 'Skin tingling to new sensations',
    name: 'skin_tingling_to_new_sensations',
  },
  {
    label: 'Abnormal Smell',
    name: 'abnormal_smell',
  },
  {
    label: 'Abnormal Taste',
    name: 'abnormal_taste',
  },
  {
    label: 'Abnormal Vision',
    name: 'abnormal_vision',
  },
  {
    label: 'Abnormal Sound',
    name: 'abnormal_sound',
  },
  {
    label: 'Headache',
    name: 'headache',
  },
  {
    label: 'Crying',
    name: 'crying',
  },
  {
    label: 'Running',
    name: 'running',
  },
  {
    label: 'Weakness',
    name: 'weakness',
  },
  {
    label: 'Presence of new visual features, like dots or flashes',
    name: 'presence_of_new_visual_features',
  },
  {
    label: 'Dizziness',
    name: 'dizziness',
  },
  {
    label: 'Other',
    name: 'other',
    hasInput: true,
  },
  {
    label: 'None',
    name: 'none',
    radioMode: true,
    checkboxShape: 'square',
  },
];

export const seizureIncontinence = [
  {
    label: "No",
    name: "no",
    radioMode: true
  },
  {
    label: "Urinary",
    name: "urinary",
    radioMode: true
  },
  {
    label: "Bowel",
    name: "bowel",
    radioMode: true
  },
  {
    label: "Both",
    name: "both",
    radioMode: true
  },
  {
    label: "Not sure",
    name: "not_sure",
    radioMode: true
  },
];

export const seizureTongueBiting = [
  {
    label: "Never",
    name: "never",
    radioMode: true,
  },
  {
    label: "Rarely",
    name: "rarely",
    radioMode: true,
  },
  {
    label: "Often",
    name: "often",
    radioMode: true,
  }
]

export const statusEpilepticus = [
  {
    name: 'yes',
    label: 'Yes',
    radioMode: true,
    optionList: [
      {
        name: 'oneProlongedSeizure',
        label: 'One seizure that lasts greater than 30 minutes',
        radioMode: true,
      },
      {
        name: 'repeatedShortSeizures',
        label:
          'Back-to-back seizures without a return to normal',
        radioMode: true,
      },
    ],
  },
  {
    name: 'no',
    label: 'No',
    radioMode: true,
  },
  {
    name: 'unsure',
    label: 'Unsure/Not Aware of Seizures',
    radioMode: true,
  },
];

export const seizureAftermath = [
  {
    label: "Unaware, no memory of events",
    name: "unaware_no_memory_of_events"
  },
  {
    label: "Immediate recovery",
    name: "immediate_recovery"
  },
  {
    label: "Brief confusion",
    name: "brief_confusion"
  },
  {
    label: "Prolonged confusion (lasts > 5 minutes longer than the episode itself)",
    name: "prolonged_confusion"
  },
  {
    label: "Inability to speak, but not confused",
    name: "inability_to_speak_but_not_confused"
  },
  {
    label: "Strong headache",
    name: "strong_headache"
  },
  {
    label: "Severe weakness (unable to use limb)",
    name: "severe_weakness"
  },
  {
    label: "Depression / sadness",
    name: "depression_/_sadness"
  },
  {
    label: "Other",
    name: "other",
    hasInput: true
  }
];

export const seizureTriggers = [
  {
    label: "No",
    name: "no",
    radioMode: true,
  },
  {
    label: "Yes",
    name: "yes",
    radioMode: true,
    optionList: [
      {
        label: "Alcohol",
        name: "alcohol",
      },
      {
        label: "Usually when I stop drinking",
        name: "usually_when_i_stop_drinking",
      },
      {
        label: "Flashing lights or patterns",
        name: "flashing_lights_or_patterns",
      },
      {
        label: "Drugs or medications",
        name: "drugs_or_medications",
      },
      {
        label: "Drug name(s)",
        name: "drug_name",
        hasInput: true,
      },
      {
        label: "Related to menstruation, or to hormone changes",
        name: "related_to_menstruation_or_to_hormone_changes",
      },
      {
        label: "Fever or other illnesses",
        name: "fever_or_other_illnesses",
      },
      {
        label: "Missing medicine",
        name: "missing_medicine",
      },
      {
        label: "Cold temperatures",
        name: "cold_temperatures",
      },
      {
        label: "Hot temperatures",
        name: "hot_temperatures",
      },
      {
        label: "Missing sleep",
        name: "missing_sleep",
      },
      {
        label: "Mood/stress-related",
        name: "mood/stressrelated",
      },
      {
        label: "Other specific trigger",
        name: "other_specific_trigger",
        hasInput: true,
      },
    ]
  },
];

export const seizureInjuries = [
  {
    label: "Falls",
    name: "falls"
  },
  {
    label: "Sprains",
    name: "sprains"
  },
  {
    label: "Back injury",
    name: "back_injury"
  },
  {
    label: "Broken Bones",
    name: "broken_bones"
  },
  {
    label: "Black Eye",
    name: "black_eye"
  },
  {
    label: "Dislocated shoulder",
    name: "dislocated_shoulder"
  },
  {
    label: "Chipped tooth",
    name: "chipped_tooth"
  },
  {
    label: "Bitten tongue or cheek",
    name: "bitten_tongue_or_cheek"
  },
  {
    label: "Bruises",
    name: "bruises"
  },
  {
    label: "Cuts",
    name: "cuts"
  },
  {
    label: "Burns",
    name: "burns"
  },
  {
    label: "Other",
    name: "other",
    hasInput: true
  },
  {
    label: "None",
    name: "none",
    radioMode: true,
    checkboxShape: "square"
  },
];