// @flow
import { cloneDeep } from 'lodash';

import {
  userHealthProblems,
  gender,
  dominantHand,
  surgeryList,
  riskFactors,
  medicalConditions,
  education,
  tobaccoUse,
  ethnicity,
  relatives,
  warningSigns,
  seizureDuration,
  seizureAttributes,
  seizureStrength,
  sideEffectStrength,
  sideEffects,
  seizureDuration2,
  livingSituation,
  alcoholChoices,
  seizureMovements,
  seizureAwareness,
  seizureIncontinence,
  seizureTongueBiting,
  statusEpilepticus,
  seizureAftermath,
  seizureTriggers,
  seizureInjuries,
} from './viewSchema_variables';

const details = {
  isCuratedDataTrial: true,
  pages: [
    {
      component: 'DataTrialWhy',
      props: {
        title: 'Why Contribute',
        styledCard: {
          title: '3,400,000',
          subtitle: 'people affected',
          description: 'Source: CDC',
        },
        subtitle: 'How epilepsy impacts my life',
        quote: {
          avatar: 'PROFILE_MICHELLE',
          name: 'Michelle',
          text: 'I was nineteen years old when I was diagnosed with epilepsy. I will never forget the way my heart sank when my neurologist informed that there was no cure for what I was facing, only a way to moderate my seizures. Now, more than ever, as patients we are at a turning point in healthcare that is shifting treatment from the hands of practitioners to patients. People with epilepsy are not just plagued by seizures, but by the side effects of their medications – fatigue, nausea, headaches. I am incredibly excited to be joined by you and other patients that can collaborate on participating in finding a way to better our lives and the lives of the other 65 million people with epilepsy in the world. Thank you for being a part of this.'
        },
        whyAboutTitle: 'All About Epilepsy',
        whyAboutText: [
          "A seizure is an electrochemical storm in the brain caused by excessive and overly synchronous discharges of brain cells.\n" +
          "\n" +
          "Depending on what parts of brain are involved and other factors, seizures can produce different effects.\n" +
          "\n" +
          "Small seizures - may produce sensations; larger - confusion, loss of awareness and memory; even larger - falling and shaking.\n" +
          "\n" +
          "Epilepsy is the disease of spontaneously recurring seizures\n" +
          "\n" +
          "Epilepsy affects about 1% of the world’s population: 65 million people, 3.4 million in US\n" +
          "\n" +
          "New cases in US are 150,000 each year. 1 in 26 will develop epilepsy in their lives.\n" +
          "\n" +
          "2/3rd of people with epilepsy get good control from medicines; 1/3rd do not\n" +
          "\n" +
          "Uncontrolled epilepsy severely lowers the quality of life and can be dangerous\n" +
          "\n" +
          "Treatments include medicines, occasionally brain surgery or neurostimulation\n" +
          "\n" +
          "Many treatments are available, more are needed and better ways to choose.",
        ].join(''),
      },
    },
    {
      component: 'DataTrialWhat',
      props: {
        fullScreenImage: true,
        whatImage: 'DTWHAT_OMIC_GROUP',
        whatImageOmics: [
          {
            name: 'Phenome',
            subText: 'Medical Selfie',
            desc:
              'Phenome characteristics such as age, sex, and BMI may play important roles in understanding IBD and supplements.',
            source: 'PILL_PHENOME',
            top: '3%',
            left: '9%',
          },
          {
            name: 'Exposome',
            subText: 'Environment',
            desc:
              'Different geographic locations and their associated environmental exposures may play a role in IBD.',
            source: 'PILL_EXPOSOME',
            top: '25%',
            left: '21%',
          },
          {
            name: 'Microbiome',
            subText: 'Bacteria',
            desc:
              'The gut microbiome is critical to understanding both IBD and supplements. ',
            source: 'PILL_MICROBIOME',
            top: '53%',
            left: '21%',
          },
          {
            name: 'Physiome',
            subText: 'Activities & Vitals',
            desc:
              'Different levels of physical activity may have associations with IBD symptoms.',
            source: 'PILL_PHYSIOME',
            bottom: '3%',
            left: '9%',
          },
        ],
        title: 'Can A.I. predict the optimal anti-epileptic drug?',
        introParagraph: `Using Artificial Intelligence to predict the most optimal medicine combination for patients with epilepsy based on their phenome, physiome, exposome, and microbiome.`,
        quote: {
          name: 'Dr. Robert Fisher MD PhD',
          profession: 'Stanford Medicine',
          avatar: 'PROFILE_ROBERT',
          text:
            "In the US, 27 medicines are available to treat epilepsy. Choosing the one to use for a particular patient often is a guessing game, resulting in failure to control seizures, side effects or both. This study will do the groundwork to train computers to more accurately use genetics and medical history to pick the best medicine. This will be a tremendous benefit for patients."
        },
        trialInfo: {
          introductionText:
            'Using artificial intelligence to choose the optimal anti-epileptic drug',
          protocol: 'DOC-002-2018',
          sponsor: 'doc.ai',
          address: '636 Waverley St, 200, Palo Alto, CA 94301',
          contactText:
            'If you have questions at any time before, during, or after the study, you can contact us with the information below.',
          investigator: 'Dr. Robert Fisher, MD, PhD',
          email: 'predictepilepsy@doc.ai\nrobert.fisher@stanford.edu',
          phone: '650-479-6074\n650-721-5552',
        },
      },
    },
    {
      component: 'DataTrialHowToParticipate',
      props: {
        steps: [
          {
            component: 'DataTrialConditionModalLink',
            props: {
              stepId: '1',
              title: 'See if you are eligible.',
              criterias: [
                'You must be at least 18 years old',
                'You must read, understand and be able to write English, so that you can read this consent form and also the questions asked in this study',
                'You must be currently living in the United States and must continue to live here for the duration of this study',
                'You must have a smart phone that will support the doc.ai app',
                'You must be diagnosed with epilepsy',
                'You must be taking at least one anti-epileptic medication to treat your epilepsy',
              ],
            },
          },
          {
            component: 'DataTrialConditionSimpleText',
            props: {
              stepId: '2',
              title: 'Review and sign the consent',
              text:
                'Acknowledge that you agree to participate.',
            },
          },
          {
            component: 'DataTrialConditionCollectOmics',
            props: {
              stepId: '3',
              title: 'Collect required data.',
              text:
                'These are the required omics you will need to join this data trial.',
              requiredOmics: ['physiome', 'phenome', 'exposome'],
            },
          },
          {
            component: 'DataTrialConditionSimpleText',
            props: {
              stepId: '4',
              title: 'Complete initial survey.',
              text:
                'Fill out a brief survey about your epilepsy and medications.',
            },
          },
          {
            component: 'DataTrialConditionSimpleText',
            props: {
              stepId: '5',
              title: 'Add photos of your seizure medications.',
            },
          },
          {
            component: 'DataTrialConditionSimpleText',
            props: {
              stepId: '6',
              title: 'Track your seizures and side effects.',
              text:
                'Enter your epilepsy symptoms and medication side effects on a simple tracker.',
            },
          },
          {
            component: 'DataTrialConditionCollectOmics',
            props: {
              stepId: '7a',
              title: 'Collect optional data:',
              text:
                'Additional omics',
              requiredOmics: ['proteome', 'clinome', 'pharmacome'],
            },
          },
          {
            component: 'DataTrialConditionSimpleText',
            props: {
              stepId: '7b',
              title: 'Optional surveys',
              text:
                '1. Additional seizure details \n2. Personal Impact of Epilepsy Scale (PIES) survey',
            },
          },
          {
            component: 'DataTrialConditionSimpleText',
            props: {
              stepId: '8',
              title: 'Perform genetic test.',
            },
          },
        ],
      },
    },
    {
      component: 'DataTrialWhatYouGet',
      props: {
        rewardsSchema: [
          {
            component: 'RewardCard',
            props: {
              title: 'Visualize',
              subtitle: 'your epilepsy symptoms',
              backgroundIcon: 'https://i.imgur.com/W4kA2aR.png',
              colors: ['rgb(106, 105, 251)', 'rgb(106, 105, 251)'],
              details: {
                // iconURL: 'https://www.fillmurray.com/200/200',
                title: 'Your Symptoms Visualized',
                description:
                  'The more you track, the more you can understand patterns in your epilepsy symptoms through graphs. ',
              },
            },
          },
          {
            component: 'RewardCard',
            props: {
              title: 'Earn',
              subtitle: 'up to 12,500 points by participating',
              backgroundIcon: 'https://i.imgur.com/L10CICO.png',
              colors: ['rgb(0, 194, 207)', 'rgb(0, 194, 207)'],
              details: {
                // iconURL: 'https://www.fillmurray.com/300/300',
                title: 'Earn points',
                description: [
                  'Here\'s how you can earn a total of 12,500 purple points from this digital health trial:',
                  '- 2,000 points for joining the trial',
                  '- 3,000 points for completing the initial history survey',
                  '- Up to 4,500 points (50 points/day) for tracking daily symptoms and side effects ',
                  '- 1,000 points for taking pictures of your medication(s)',
                  '- 500 points for completing the optional seizure details survey',
                  '- 500 points for completing the Personal Impact of Epilepsy Scale (PIES) survey',
                  '- 1,000 points for uploading your genome test',
                  'You\'ll be able to redeem these points for Amazon.com gift cards worth up to $125.00 in the doc.ai Marketplace. '
                ].join('\n'),
              },
            },
          },
          {
            component: 'RewardCard',
            props: {
              title: 'Learn',
              subtitle: 'from a free genetic test from Kailos',
              backgroundIcon: 'https://i.imgur.com/50a3tEY.png',
              colors: ['rgb(7, 175, 155)', 'rgb(7, 175, 155)'],
              details: {
                // iconURL: 'https://www.fillmurray.com/300/300',
                title: 'Free Kailos Genetic Test',
                description: [
                  'Receive a free pharmacogenomics test from Kailos. This will provide the researchers with a detailed picture of how your genes interact with specific epilepsy medications.'
                ].join(' '),
              },
            },
          },
        ],
      },
    },
  ],
};

const join = {
  nonWhiteList: {
    pages: [
      {
        component: 'DataTrialInterestedListV1',
        props: {
          formValidationRules: {
            '===': [true, true],
          },
          schema: [
            {
              component: 'ChecklistGroup',
              name: 'are_you_interested_for_you_or_someone_else',
              props: {
                question: [
                  'Select how you will be joining:'
                ].join('\n'),
                optionList: [
                  {
                    label: 'As myself',
                    description: 'joining as an epilepsy patient',
                    name: 'for_myself',
                    radioMode: true,
                  },
                  {
                    label: 'As a caregiver',
                    description: 'joining on behalf of an adult with epilepsy',
                    name: 'for_someone_else',
                    radioMode: true,
                  }
                ]
              },
            },
            {
              component: 'TextInput',
              name: 'why_are_you_interested',
              props: {
                placeholder: 'Please explain',
                question: [
                  'Why are you interested in joining this trial?'
                ].join('\n'),
              },
            }
          ],
        },
      }
    ],
  },
  regular: {
    awardModalProps: {
      successRedirectButtonText: 'Import Omics',
      successRedirectUrl: '/main/nav/dataTrials/ai.doc.data.trial.epilepsy/track',
    },
    pages: [
      {
        component: 'DataTrialCaregiverQuestionnaireV1',
        props: {
          text: 'If you are a caregiver helping an adult with epilepsy in this trial, make sure that this doc.ai account belongs to the person with epilepsy.',
        },
      },
      {
        skipWhen: { '===': [{ var: 'isParticipantAssistedByCaregiver' }, false] },
        component: 'DataTrialCaregiverNameV1',
        props: {
          text: 'Please provide the caregiver\'s name and email address. This information won\'t be shared outside this trial.'
        },
      },
      {
        component: 'DataTrialPrescreeningV1',
        props: {
          criterias: [
            {
              name: 'is18OrOlder',
              condition: { '==': ['Yes', { var: 'is18OrOlder' }] },
            },
            {
              name: 'isUSResident',
              condition: { '==': ['Yes', { var: 'isUSResident' }] },
            },
            {
              name: 'canReadAndWriteEnglish',
              condition: { '==': ['Yes', { var: 'canReadAndWriteEnglish' }] },
            },
            {
              name: 'haveBeenDiagnosedWithEpilepsy',
              condition: {
                '==': ['Yes', { var: 'haveBeenDiagnosedWithEpilepsy' }],
              },
            },
            {
              name: 'isTakingEpilepsyMedication',
              condition: { '==': ['Yes', { var: 'isTakingEpilepsyMedication' }] },
            },
            {
              name: 'haveBeenDiagnosedWithEpilepsy',
              condition: {
                '==': ['Yes', { var: 'haveBeenDiagnosedWithEpilepsy' }],
              },
            },
          ],
          requiredFields: {
            and: [
              { '!!': { var: 'is18OrOlder' } },
              { '!!': { var: 'isUSResident' } },
              { '!!': { var: 'canReadAndWriteEnglish' } },
              { '!!': { var: 'haveBeenDiagnosedWithEpilepsy' } },
              { '!!': { var: 'isTakingEpilepsyMedication' } },
            ],
          },
          questionsSchema: [
            {
              component: 'Closed',
              name: 'is18OrOlder',
              props: {
                label: 'Is the participant 18 years or older?',
                variants: ['Yes', 'No'],
              },
            },
            {
              component: 'Closed',
              name: 'isUSResident',
              props: {
                label: 'Does the participant live in the United States?',
                variants: ['Yes', 'No'],
              },
            },
            {
              component: 'Closed',
              name: 'canReadAndWriteEnglish',
              props: {
                label:
                  'Is the participant able to read and write in English on their iPhone?',
                variants: ['Yes', 'No'],
              },
            },
            {
              component: 'Closed',
              name: 'haveBeenDiagnosedWithEpilepsy',
              props: {
                label: 'Has the participant been diagnosed with epilepsy?',
                variants: ['Yes', 'No'],
              },
            },
            {
              component: 'Closed',
              name: 'isTakingEpilepsyMedication',
              props: {
                label:
                  'Is the participant taking at least one anti-epileptic drug?',
                variants: ['Yes', 'No'],
              },
            },
          ],
        },
      },
      {
        component: 'DataTrialConsentV1',
        skipWhen: { '===': [{ var: 'isParticipantAssistedByCaregiver' }, true] },
        props: {
          hasConsentModal: true,
          consentText:
            "STANFORD UNIVERSITY Research Consent Form\n" +
            "Protocol Director: Robert S. Fisher, MD, PhD\n" +
            "\n" +
            "Protocol Title: Using artificial intelligence to choose the optimal antiepileptic drug\n" +
            "FOR QUESTIONS ABOUT THE STUDY, CONTACT: Mr. Adam Fogarty, adam_fog_arty@yahoo.com 650-721-5280 or Robert S. Fisher, MD, PhD robert.fisher@stanford.edu 650-725-6648 x 4. \n" +
            "\n" +
            "DESCRIPTION: You are invited to participate in a research study on how to use artificial (computer) intelligence to predict the most effective antiepileptic medication for a specific person. Enrollees will download a phone app that will securely keep your study data and will provide temporary permission for researchers to access only the approved data from your phone. \n" +
            "\n" +
            "Anyone age 18-100 years-old, who understands English, lives in the US, who has epilepsy, is taking at least one antiepileptic medication and has a modern smartphone with the iOS Apple operating system is eligible.  Participants will also be required to take pictures of their medication packaging, which will be used to input data into the trial. Additionally, participants may connect data from their pharmacy using accounts from CVS, RiteAid, HumanAPI, or Apple Health Records. Recent and past medication data will be downloaded to your phone. Downloading your medical tests (for example with Apple Health Records) is optional. The lab tests DO NOT explicitly include screens for drugs of abuse, except for those such as phenobarbital or diazepam (Valium) that are being taken to prevent seizures. Participants who complete the forms will receive a test kit for saliva for gene testing, from the test company, Kailos; and a fecal swab from toilet paper test kit to analyze gut bacteria. Study testing will be at no cost to you or your insurance company. \n" +
            "\n" +
            "If you join the study, you will:\n" +
            "\n" +
            "•\tFill out information forms from the app related to your epilepsy and medication history, social history (job, education, marital status, etc., where relevant). \n" +
            "\n" +
            "•\tYou will submit a face picture to the app (which is not stored) to estimate age, height, weight. \n" +
            "\n" +
            "•\tFor 3 months, you will maintain a daily epilepsy diary about seizure frequency, medications and side effects via the phone app. The app will send you a message every day for 90 days asking whether you had a seizure that day and how severe your side effects are.  If you had a seizure, it will ask you what type (according to your seizure names) and how many. Completion of the diary will result in extra compensation (see below). \n" +
            "\n" +
            "•\tPeriodically, the app will check whether your medicines have changed. \n" +
            "\n" +
            "•\tIf you have successfully completed most of the required data, then you will receive the kits for saliva and stool testing to take or mail to labs at no cost to you.  Conversely, if you have not filled out your medical history forms, then you will not receive a lab test kit, because your lab data will not be useful for the study. You will still receive partial compensation for your participation (see below). \n" +
            "\n" +
            "•\tIf you enter the study, or have questions about entering the study, then you give permission to be contacted by phone, e-mail, physical mail or text message by study personnel to assist with eligibility determination or data entry for the study.\n" +
            "\n" +
            "•\tYour Diary may provide help-line information from the Epilepsy Foundation, but this will not be a substitute for clinical care.\n" +
            "\n" +
            "\n" +
            "GENETIC TESTING: As part of the analysis on your samples, the investigators may do genetic testing. Genetic research is research that studies genes, including gene characteristics and gene versions that are transmitted by parents to children. Genetic research may include looking at information, such as personal appearance and biochemistry, gene sequences, genetic landmarks (DNA markers at known locations in the genome), individual and family medical histories, reactions to medications and responses to treatment. Genetic research raises certain questions about informing you of any results. Possible risks of knowing results include: anxiety; other psychological distress; and the possibility of insurance and job discrimination. Sometimes patients have been required to furnish information from genetic testing for health insurance, life insurance, and/or a job. A Federal law, the Genetic Information Nondiscrimination Act of 2008 (GINA), generally makes it illegal for health insurance companies, group health plans, and employers with 15 or more employees to discriminate against you based on your genetic information. Please note that GINA does not apply to life insurance, long-term care, or disability insurance. This genetic information may therefore affect acquiring life insurance, long-term care, and/or disability insurance. \n" +
            "\n" +
            "A possible risk of not knowing your genetic information includes being unaware of the need for treatment. These risks can change depending on the results of the research and whether there is a treatment or cure for a particular disease. Investigators in this study may try to re-contact you in the future for additional information or specimens. If you are re-contacted, you are free to refuse to provide any additional information or specimens.\n" +
            "\n" +
            "\tPolicies of the gene testing company require sending the genetic test results to your physician, who may then choose to share the results with you. You will have to provide contact information for your doctor, in order for them to receive the results. If you do not provide this doctor contact information, you and your doctor will not receive the genetic test results. The testing does NOT include predispositions for diseases or ancestry information. The sponsor, doc.ai, does not share genetic information with any third parties.\n" +
            "\n" +
            "\n" +
            "RISKS AND BENEFITS: \n" +
            "\n" +
            "1. The prediction of the best epilepsy drug will not be shared with you because the prediction model will not be built until after the study results are analyzed and many more patients studied. Your medical therapy should continue in the usual way. The study is not designed to provide you with any type of clinical care. The study will not be reviewing or acting upon any abnormal results. You may or may not choose to share the study data with your medical team. Doing so is encouraged, but is not part of the study and the visits to share the study data will not be paid for by the study.\n" +
            "\n" +
            "2. You may experience distress from learning genetic information, for example, finding out that you have a gene that might predispose you to a certain disease or that your genes point to unexpected ancestry. This risk is similar to those that would have occurred if you had paid for commercial genetic testing. If you wish further information about your genetic test results, then you should confer with your physician or seek a referral for genetic counseling.\n" +
            "\n" +
            "3. Risk of information becoming public.  Extensive efforts will be made to keep your information private, with only the Stanford researchers and the sponsoring company, doc.ai (whose computers will be used for data analysis) knowing the identifying information of participants. All names, photos, and any other personal health information that could be used to identify you would be totally removed before any scientific meetings or shared study presentations. The sponsor, doc.ai, the study sponsor, does not share genetic information with any 3rd parties. Extensive security precautions will be used to guard your data. \n" +
            "\n" +
            "We use reasonable technical, physical, and administrative controls to protect all study test data from unauthorized access or disclosure, and to ensure the appropriate use of information. Data are stored in the United States. A high level of data protection via safeguards such as data backup, audit controls, access controls, and data encryption is maintained. However, no data transmission or storage system is guaranteed to be 100% secure, so your personal and medical information could become public in the unlikely event of a data breach. If this is not acceptable, you can choose not to enroll in the data trial.\n" +
            "\n" +
            "We cannot and do not guarantee or promise that you will receive any personal benefit from this study. Your decision whether or not to participate in this study will not affect your medical care.\n" +
            "TIME INVOLVEMENT: Once you have enrolled, your participation in this experiment will take approximately 12.5 hours total, divided as follows:\n" +
            "   1. Downloading apps and links to existing lab computers and pharmacies onto your phone: 1 hour.\n" +
            "   2. Answering questions on your phone app about your seizure history: 2 hours.\n" +
            "   3. Keeping a seizure diary: 5 minutes a day for 90 days: 7.5 hours total.\n" +
            "   4. Emails, messages, calls with study personnel to review unclear data: 1 hour, if needed.\n" +
            "   5. If you have been successful in gathering the clinical data and diary, you will receive a test kit to take once to a local lab for blood, kits for saliva (for gene testing from Kailos, gut bacteria from uBiome or another vendor fecal test swab kit (fecal swab sample to measure the types of bacteria in your gut). These tests can be done from home. These tests are being provided for free to the participants from the study sponsor. Estimated time is time 1 hour.\n" +
            "COSTS: If you participate in this study, the study will pay for those services, supplies, procedures, and care associated with the study that are not a part of your routine medical care.  There are no additional costs to you. \n" +
            "Not paid for by the study are the following items: \n" +
            "Interpretation of the test results. Interpreting your test data would involve the practice of medicine for your case. The study researchers cannot do that because they will not have examined you, are not part of your care team, and may not be licensed in your State.  You may optionally ask your personal physician for interpretation. Such a visit is not part of this study and will not be paid for by the study.\n" +
            "\n" +
            "PAYMENTS: \n" +
            "You will be compensated with points convertible to Amazon gift cards. Compensation will be step-wise, rewarded as you complete various phases of data entry. Maximum compensation for full completion of all study requirements will be approximately $125.\n" +
            "Maximum Amount: 12,500 Purple Points = $125\n" +
            "•\t2,000 Pts for Joining Data Trial\n" +
            "•\t3,000 Points for Initial History Surveys\n" +
            "•\t4,500 Points Max (50 pts/day) Daily Symptom and Side Effect Tracking\n" +
            "•\t1,000 points for taking pictures of Medication one time to help build AI Model\n" +
            "•\t500 points for Optional Seizure Details\n" +
            "•\t500 points for PIES Survey\n" +
            "•\t1,000 points for genome test upload \n" +
            "\n" +
            "Points can optionally be donated to the Epilepsy Foundation by checking the associated box in the application.\n" +
            "\n" +
            "PARTICIPANT’S RIGHTS: If you have read this form and have decided to participate in this project, please understand your participation is voluntary and you have the right to withdraw your consent or discontinue participation at any time without penalty or loss of benefits to which you are otherwise entitled. \n" +
            "\n" +
            "The results of this research study may be presented at scientific or professional meetings or published in scientific journals. Your identity and/or your personal health information will not be disclosed except as authorized by you or as required by law.  However, there is always some risk that even de-identified information might be re-identified. Patient information may be provided to Federal and other regulatory agencies as required.  The Food and Drug Administration (FDA), for example, may inspect research records and learn your identity if this study falls within its jurisdiction.  The purpose of this research study is to obtain data or information on the safety and effectiveness of artificial intelligence computer programs to select best medications; the results will be provided to the sponsor, the Food and Drug Administration and other federal and regulatory agencies as required.\n" +
            "\n" +
            "\n" +
            "Authorization To Use Your Health Information For Research Purposes \n" +
            "\n" +
            "Because information about you and your health is personal and private, it generally cannot be used in this research study without your written authorization. If you sign this form, it will provide that authorization. The form is intended to inform you about how your health information will be used or disclosed in the study. Your information will only be used in accordance with this authorization form and the informed consent form and as required or allowed by law. Please read it carefully before signing it. \n" +
            "\n" +
            "What is the purpose of this research study and how will my health information be utilized in the study?\n" +
            "\n" +
            "This study will investigate whether a computer can use a large amount of data about your seizures, medical condition, medication history and your laboratory test results to predict what the best antiepileptic drug is for you among the 26 current possible choices in the US. “Best” in this instance means most control of seizures with the fewest side effects. This is a preliminary study to develop the methodology for a future larger study. Results of this study may not be reliable for prediction. You will receive any results pertaining to you, but you should not trust them to guide your treatment, which should be determined by your regular medical team.\n" +
            "\n" +
            "Do I have to sign this authorization form?\n" +
            "You do not have to sign this authorization form. But if you do not, you will not be able to participate in this research study. Signing the form is not a condition for receiving any medical care outside the study.\n" +
            "\n" +
            "If I sign, can I revoke it or withdraw from the research later?\n" +
            "If you decide to participate, you are free to withdraw your authorization regarding the use and disclosure of your health information (and to discontinue any other participation in the study) at any time. After any revocation, your health information will no longer be used or disclosed in the study, except to the extent that the law allows us to continue using your information (e.g., necessary to maintain integrity of research). If you wish to revoke your authorization for the research use or disclosure of your health information in this study, you must write to: Robert S. Fisher, MD, PhD, robert.fisher@stanford.edu, 650-721-5552, Stanford Neuroscience Health Center, Room 4865, 213 Quarry Road, Palo Alto, CA 94304-5979. \n" +
            "\n" +
            "What Personal Information Will Be Obtained, Used or Disclosed?\n" +
            "Your health information related to this study, may be used or disclosed in connection with this research study, including, but not limited to, your epilepsy and medical history, some of your clinic or hospital medical records, any autism-related symptoms (autism and epilepsy sometimes are related), family history, social demographics (education, employment, marital status), lifestyle habits relative to health effects of weather or allergies, reactions to past seizure medicines, past possible toxic exposures in the environment or via cigarettes or alcohol, laboratory blood and urine results from the past, immune system antibodies in your system, results from brain imaging and EEG (electroencephalogram) studies, any tissue pathology reports, photos taken for the study including a face photo (but not any other photos on your phone that you do not enter into the study application), lists of your genes, small molecules such as vitamins in your blood, analysis of the bacteria colonizing your intestines (determined from a swab of your toilet paper), proteins in your blood, how your genes affect your response to drugs, physiological features such as height, weight, blood pressure. Other medical data also might be collected.\n" +
            "\n" +
            "Who May Use or Disclose the Information?\n" +
            "The following parties are authorized to use and/or disclose your health information in connection with this research study:\n" +
            "•\tThe Protocol Director, Robert S. Fisher, MD, PhD or co-Directors, Dennis Wall, PhD or Christopher Lee-Messer, MD, PhD\n" +
            "•\tThe Stanford University Administrative Panel on Human Subjects in Medical Research and any other unit of Stanford University as necessary\n" +
            "•\tResearch Staff\n" +
            "•\tThe company sponsoring this research, doc.ai in Palo Alto, California\n" +
            "\n" +
            "Who May Receive or Use the Information?\n" +
            "The parties listed in the preceding paragraph may disclose your health information to the following persons and organizations for their use in connection with this research study: \n" +
            "\n" +
            "•\tThe Office for Human Research Protections in the U.S. Department of Health and Human Services\n" +
            "•\tThe Food and Drug Administration\n" +
            "•\tResearch groups of the non-profit organizations, the American Epilepsy Society, the Epilepsy Foundation, or Citizens United for Research in Epilepsy (CURE), in order to further research and understanding to improve epilepsy care.\n" +
            "\n" +
            "Your information may be re-disclosed by the recipients described above, if they are not required by law to protect the privacy of the information.\n" +
            "\n" +
            "\n" +
            "When will my authorization expire?\n" +
            "Your authorization for the use and/or disclosure of your health information will end on Dec. 31, 2040 or when the research project ends, whichever is earlier. \n" +
            " \n"
        },
      },
      {
        component: 'DataTrialConsentV1',
        skipWhen: { '===': [{ var: 'isParticipantAssistedByCaregiver' }, false] },
        props: {
          consentModalText: 'Do you agree to participate in this trial on behalf of an adult with epilepsy? A copy of this form will be emailed to you.',
          hasConsentModal: true,
          consentText:
            "STANFORD UNIVERSITY Research Consent Form\n" +
            "Protocol Director: Robert S. Fisher, MD, PhD\n" +
            "\n" +
            "Protocol Title: Using artificial intelligence to choose the optimal antiepileptic drug\n" +
            "FOR QUESTIONS ABOUT THE STUDY, CONTACT: Mr. Adam Fogarty, adam_fog_arty@yahoo.com 650-721-5280 or Robert S. Fisher, MD, PhD robert.fisher@stanford.edu 650-725-6648 x 4. \n" +
            "\n" +
            "DESCRIPTION: You are invited to participate in a research study on how to use artificial (computer) intelligence to predict the most effective antiepileptic medication for a specific person. Enrollees will download a phone app that will securely keep your study data and will provide temporary permission for researchers to access only the approved data from your phone. \n" +
            "\n" +
            "Anyone age 18-100 years-old, who understands English, lives in the US, who has epilepsy, is taking at least one antiepileptic medication and has a modern smartphone with the iOS Apple operating system is eligible.  Participants will also be required to take pictures of their medication packaging, which will be used to input data into the trial. Additionally, participants may connect data from their pharmacy using accounts from CVS, RiteAid, HumanAPI, or Apple Health Records. Recent and past medication data will be downloaded to your phone. Downloading your medical tests (for example with Apple Health Records) is optional. The lab tests DO NOT explicitly include screens for drugs of abuse, except for those such as phenobarbital or diazepam (Valium) that are being taken to prevent seizures. Participants who complete the forms will receive a test kit for saliva for gene testing, from the test company, Kailos; and a fecal swab from toilet paper test kit to analyze gut bacteria. Study testing will be at no cost to you or your insurance company. \n" +
            "\n" +
            "If you join the study, you will:\n" +
            "\n" +
            "•\tFill out information forms from the app related to your epilepsy and medication history, social history (job, education, marital status, etc., where relevant). \n" +
            "\n" +
            "•\tYou will submit a face picture to the app (which is not stored) to estimate age, height, weight. \n" +
            "\n" +
            "•\tFor 3 months, you will maintain a daily epilepsy diary about seizure frequency, medications and side effects via the phone app. The app will send you a message every day for 90 days asking whether you had a seizure that day and how severe your side effects are.  If you had a seizure, it will ask you what type (according to your seizure names) and how many. Completion of the diary will result in extra compensation (see below). \n" +
            "\n" +
            "•\tPeriodically, the app will check whether your medicines have changed. \n" +
            "\n" +
            "•\tIf you have successfully completed most of the required data, then you will receive the kits for saliva and stool testing to take or mail to labs at no cost to you.  Conversely, if you have not filled out your medical history forms, then you will not receive a lab test kit, because your lab data will not be useful for the study. You will still receive partial compensation for your participation (see below). \n" +
            "\n" +
            "•\tIf you enter the study, or have questions about entering the study, then you give permission to be contacted by phone, e-mail, physical mail or text message by study personnel to assist with eligibility determination or data entry for the study.\n" +
            "\n" +
            "•\tYour Diary may provide help-line information from the Epilepsy Foundation, but this will not be a substitute for clinical care.\n" +
            "\n" +
            "\n" +
            "GENETIC TESTING: As part of the analysis on your samples, the investigators may do genetic testing. Genetic research is research that studies genes, including gene characteristics and gene versions that are transmitted by parents to children. Genetic research may include looking at information, such as personal appearance and biochemistry, gene sequences, genetic landmarks (DNA markers at known locations in the genome), individual and family medical histories, reactions to medications and responses to treatment. Genetic research raises certain questions about informing you of any results. Possible risks of knowing results include: anxiety; other psychological distress; and the possibility of insurance and job discrimination. Sometimes patients have been required to furnish information from genetic testing for health insurance, life insurance, and/or a job. A Federal law, the Genetic Information Nondiscrimination Act of 2008 (GINA), generally makes it illegal for health insurance companies, group health plans, and employers with 15 or more employees to discriminate against you based on your genetic information. Please note that GINA does not apply to life insurance, long-term care, or disability insurance. This genetic information may therefore affect acquiring life insurance, long-term care, and/or disability insurance. \n" +
            "\n" +
            "A possible risk of not knowing your genetic information includes being unaware of the need for treatment. These risks can change depending on the results of the research and whether there is a treatment or cure for a particular disease. Investigators in this study may try to re-contact you in the future for additional information or specimens. If you are re-contacted, you are free to refuse to provide any additional information or specimens.\n" +
            "\n" +
            "Policies of the gene testing company require sending the genetic test results to your physician, who may then choose to share the results with you. You will have to provide contact information for your doctor, in order for them to receive the results. If you do not provide this doctor contact information, you and your doctor will not receive the genetic test results. The testing does NOT include predispositions for diseases or ancestry information. The sponsor, doc.ai, does not share genetic information with any third parties.\n" +
            "\n" +
            "\n" +
            "RISKS AND BENEFITS: \n" +
            "\n" +
            "1. The prediction of the best epilepsy drug will not be shared with you because the prediction model will not be built until after the study results are analyzed and many more patients studied. Your medical therapy should continue in the usual way. The study is not designed to provide you with any type of clinical care. The study will not be reviewing or acting upon any abnormal results. You may or may not choose to share the study data with your medical team. Doing so is encouraged, but is not part of the study and the visits to share the study data will not be paid for by the study.\n" +
            "\n" +
            "2. You may experience distress from learning genetic information, for example, finding out that you have a gene that might predispose you to a certain disease or that your genes point to unexpected ancestry. This risk is similar to those that would have occurred if you had paid for commercial genetic testing. If you wish further information about your genetic test results, then you should confer with your physician or seek a referral for genetic counseling.\n" +
            "\n" +
            "3. Risk of information becoming public.  Extensive efforts will be made to keep your information private, with only the Stanford researchers and the sponsoring company, doc.ai (whose computers will be used for data analysis) knowing the identifying information of participants. All names, photos, and any other personal health information that could be used to identify you would be totally removed before any scientific meetings or shared study presentations. The sponsor, doc.ai, the study sponsor, does not share genetic information with any 3rd parties. Extensive security precautions will be used to guard your data. \n" +
            "\n" +
            "We use reasonable technical, physical, and administrative controls to protect all study test data from unauthorized access or disclosure, and to ensure the appropriate use of information. Data are stored in the United States. A high level of data protection via safeguards such as data backup, audit controls, access controls, and data encryption is maintained. However, no data transmission or storage system is guaranteed to be 100% secure, so your personal and medical information could become public in the unlikely event of a data breach. If this is not acceptable, you can choose not to enroll in the data trial.\n" +
            "\n" +
            "We cannot and do not guarantee or promise that you will receive any personal benefit from this study. Your decision whether or not to participate in this study will not affect your medical care.\n" +
            "TIME INVOLVEMENT: Once you have enrolled, your participation in this experiment will take approximately 12.5 hours total, divided as follows:\n" +
            "   1. Downloading apps and links to existing lab computers and pharmacies onto your phone: 1 hour.\n" +
            "   2. Answering questions on your phone app about your seizure history: 2 hours.\n" +
            "   3. Keeping a seizure diary: 5 minutes a day for 90 days: 7.5 hours total.\n" +
            "   4. Emails, messages, calls with study personnel to review unclear data: 1 hour, if needed.\n" +
            "   5. If you have been successful in gathering the clinical data and diary, you will receive a test kit to take once to a local lab for blood, kits for saliva (for gene testing from Kailos, gut bacteria from uBiome or another vendor fecal test swab kit (fecal swab sample to measure the types of bacteria in your gut). These tests can be done from home. These tests are being provided for free to the participants from the study sponsor. Estimated time is time 1 hour.\n" +
            "COSTS: If you participate in this study, the study will pay for those services, supplies, procedures, and care associated with the study that are not a part of your routine medical care.  There are no additional costs to you. \n" +
            "Not paid for by the study are the following items: \n" +
            "Interpretation of the test results. Interpreting your test data would involve the practice of medicine for your case. The study researchers cannot do that because they will not have examined you, are not part of your care team, and may not be licensed in your State.  You may optionally ask your personal physician for interpretation. Such a visit is not part of this study and will not be paid for by the study.\n" +
            "\n" +
            "PAYMENTS: \n" +
            "You will be compensated with points convertible to Amazon gift cards. Compensation will be step-wise, rewarded as you complete various phases of data entry. Maximum compensation for full completion of all study requirements will be approximately $125.\n" +
            "Maximum Amount: 12,500 Purple Points = $125\n" +
            "•\t2,000 Pts for Joining Data Trial\n" +
            "•\t3,000 Points for Initial History Surveys\n" +
            "•\t4,500 Points Max (50 pts/day) Daily Symptom and Side Effect Tracking\n" +
            "•\t1,000 points for taking pictures of Medication one time to help build AI Model\n" +
            "•\t500 points for Optional Seizure Details\n" +
            "•\t500 points for PIES Survey\n" +
            "•\t1,000 points for genome test upload \n" +
            "\n" +
            "Points can optionally be donated to the Epilepsy Foundation by checking the associated box in the application.\n" +
            "\n" +
            "PARTICIPANT’S RIGHTS: If you have read this form and have decided to participate in this project, please understand your participation is voluntary and you have the right to withdraw your consent or discontinue participation at any time without penalty or loss of benefits to which you are otherwise entitled. \n" +
            "\n" +
            "The results of this research study may be presented at scientific or professional meetings or published in scientific journals. Your identity and/or your personal health information will not be disclosed except as authorized by you or as required by law.  However, there is always some risk that even de-identified information might be re-identified. Patient information may be provided to Federal and other regulatory agencies as required.  The Food and Drug Administration (FDA), for example, may inspect research records and learn your identity if this study falls within its jurisdiction.  The purpose of this research study is to obtain data or information on the safety and effectiveness of artificial intelligence computer programs to select best medications; the results will be provided to the sponsor, the Food and Drug Administration and other federal and regulatory agencies as required.\n" +
            "\n" +
            "\n" +
            "Authorization To Use Your Health Information For Research Purposes \n" +
            "\n" +
            "Because information about you and your health is personal and private, it generally cannot be used in this research study without your written authorization. If you sign this form, it will provide that authorization. The form is intended to inform you about how your health information will be used or disclosed in the study. Your information will only be used in accordance with this authorization form and the informed consent form and as required or allowed by law. Please read it carefully before signing it. \n" +
            "\n" +
            "What is the purpose of this research study and how will my health information be utilized in the study?\n" +
            "\n" +
            "This study will investigate whether a computer can use a large amount of data about your seizures, medical condition, medication history and your laboratory test results to predict what the best antiepileptic drug is for you among the 26 current possible choices in the US. “Best” in this instance means most control of seizures with the fewest side effects. This is a preliminary study to develop the methodology for a future larger study. Results of this study may not be reliable for prediction. You will receive any results pertaining to you, but you should not trust them to guide your treatment, which should be determined by your regular medical team.\n" +
            "\n" +
            "Do I have to sign this authorization form?\n" +
            "You do not have to sign this authorization form. But if you do not, you will not be able to participate in this research study. Signing the form is not a condition for receiving any medical care outside the study.\n" +
            "\n" +
            "If I sign, can I revoke it or withdraw from the research later?\n" +
            "If you decide to participate, you are free to withdraw your authorization regarding the use and disclosure of your health information (and to discontinue any other participation in the study) at any time. After any revocation, your health information will no longer be used or disclosed in the study, except to the extent that the law allows us to continue using your information (e.g., necessary to maintain integrity of research). If you wish to revoke your authorization for the research use or disclosure of your health information in this study, you must write to: Robert S. Fisher, MD, PhD, robert.fisher@stanford.edu, 650-721-5552, Stanford Neuroscience Health Center, Room 4865, 213 Quarry Road, Palo Alto, CA 94304-5979. \n" +
            "\n" +
            "What Personal Information Will Be Obtained, Used or Disclosed?\n" +
            "Your health information related to this study, may be used or disclosed in connection with this research study, including, but not limited to, your epilepsy and medical history, some of your clinic or hospital medical records, any autism-related symptoms (autism and epilepsy sometimes are related), family history, social demographics (education, employment, marital status), lifestyle habits relative to health effects of weather or allergies, reactions to past seizure medicines, past possible toxic exposures in the environment or via cigarettes or alcohol, laboratory blood and urine results from the past, immune system antibodies in your system, results from brain imaging and EEG (electroencephalogram) studies, any tissue pathology reports, photos taken for the study including a face photo (but not any other photos on your phone that you do not enter into the study application), lists of your genes, small molecules such as vitamins in your blood, analysis of the bacteria colonizing your intestines (determined from a swab of your toilet paper), proteins in your blood, how your genes affect your response to drugs, physiological features such as height, weight, blood pressure. Other medical data also might be collected.\n" +
            "\n" +
            "Who May Use or Disclose the Information?\n" +
            "The following parties are authorized to use and/or disclose your health information in connection with this research study:\n" +
            "•\tThe Protocol Director, Robert S. Fisher, MD, PhD or co-Directors, Dennis Wall, PhD or Christopher Lee-Messer, MD, PhD\n" +
            "•\tThe Stanford University Administrative Panel on Human Subjects in Medical Research and any other unit of Stanford University as necessary\n" +
            "•\tResearch Staff\n" +
            "•\tThe company sponsoring this research, doc.ai in Palo Alto, California\n" +
            "\n" +
            "Who May Receive or Use the Information?\n" +
            "The parties listed in the preceding paragraph may disclose your health information to the following persons and organizations for their use in connection with this research study: \n" +
            "\n" +
            "•\tThe Office for Human Research Protections in the U.S. Department of Health and Human Services\n" +
            "•\tThe Food and Drug Administration\n" +
            "•\tResearch groups of the non-profit organizations, the American Epilepsy Society, the Epilepsy Foundation, or Citizens United for Research in Epilepsy (CURE), in order to further research and understanding to improve epilepsy care.\n" +
            "\n" +
            "Your information may be re-disclosed by the recipients described above, if they are not required by law to protect the privacy of the information.\n" +
            "\n" +
            "\n" +
            "When will my authorization expire?\n" +
            "Your authorization for the use and/or disclosure of your health information will end on Dec. 31, 2040 or when the research project ends, whichever is earlier. \n" +
            " \n" +
            "By typing your name in the box below and typing the date, you are enrolling in this study. \n",
        },
      },
      {
        component: 'DataTrialRBQuestionnaireV1',
        props: {
          question: 'Please answer a few questions to ensure that you understand the consent form.\n\nWhich one of the following statements is true?',
          answers: {
            1: 'This study will change your seizure medicines',
            2: 'This study will begin to see whether computer artificial intelligence can make accurate predictions about effects of seizure medicines',
          },
          correctAnswer: 2,
        },
      },
      {
        component: 'DataTrialRBQuestionnaireV1',
        props: {
          question:
            'As part of the study, you will be asked to keep a diary of  your seizures and side effects, with entries:',
          answers: {
            1: 'Daily',
            2: 'Monthly',
            3: 'Once at the end of the study',
          },
          correctAnswer: 1,
          hasConsentModal: false,
        },
      },
      {
        skipWhen: { '===': [{ var: 'isParticipantAssistedByCaregiver' }, true] },
        component: 'DataTrialSignatureV1',
      },
      {
        skipWhen: { '===': [{ var: 'isParticipantAssistedByCaregiver' }, false] },
        component: 'DataTrialSignatureV1',
        props: {
          title: 'Signature of caregiver'
        }
      },
      {
        skipWhen: { '===': [{ var: 'isParticipantAssistedByCaregiver' }, false] },
        component: 'DataTrialConsentV1',
        props: {
          consentModalText: 'Do you give your assent to participate in this trial. A copy of this form will be emailed to you.',
          hasConsentModal: true,
          consentModalTitle: "Assent",
          title: "Assent (Adult)",
          consentText:
            "Please pass the phone to the person with epilepsy so that they can review and give their assent to participate in this trial.\n \n" +
            "---\n" +
            "---\n" +

            "\n Approval Date: 08/20/2019\n" +
            "\n" +
            "Study Title: Using artificial intelligence to choose the optimal antiepileptic drug\n" +
            "Protocol #46059, IRB 5\n" +
            "\n" +
            "What will happen to me in this study? \n" +
            "Description of the study: You are invited to participate in a research study on how to use computers to choose the best medicine for your epilepsy. \n" +
            "\n" +
            "Why do this? This research study may help doctors to pick the medicine that will work the best, and have the fewest side effects for people with epilepsy.  However, your participation in the study will not pick your medicine, because we are just starting to learn how to do this.\n" +
            "  \n" +
            "What will you have to do? You and your family/caretaker will answer questions about your medical history.  You and your family or caretakers will keep a daily diary of seizures and side effects. You will have a swab taken of your cheek for gene testing and maybe a swab of a bowel movement – taken from toilet paper – to measure the bacteria in your intestines, since this can affect how medicines work. \n" +
            "\n" +
            "Can anything bad happen to me? \n" +
            "Risks or discomforts of participating: There are no needles, blood tests or painful tests. You might be bored by all the questions, or possibly upset when you are told test results.  You should tell your family or caregivers if you are upset as a result of being in the study.\n" +
            "\n" +
            "Can anything good happen to me? \n" +
            "You and your family/caregiver will get a lot of free medical information on your condition. You will help future people with epilepsy. You also will get Amazon gift cards worth up to $125. \n" +
            "\n" +
            "Do I have other choices? \n" +
            "You do not have to join this study. Your doctors will keep taking care of you in the same way whether you do or don’t join.\n" +
            "\n" +
            "Will anyone know I am in the study? \n" +
            "All attempts will be made to keep your name and information secret, but we cannot completely promise that because of computer hackers and leaks.\n" +
            "\n" +
            "What happens if I get hurt? \n" +
            "You or your family/caregivers will notify Dr. Robert Fisher (Robert S. Fisher, MD, PhD, robert.fisher@stanford.edu, 650-721-5552, Stanford Neuroscience Health Center, Room 4865, 213 Quarry Road, Palo Alto, CA 94304-5979) at Stanford or his assistant (currently Adam Fogarty, same address and phone number, AFogarty@stanfordhealthcare.org) and a plan to help you will be made. \n" +
            "\n" +
            "Who can I talk to about the study? \n" +
            "If you have any questions about the study or any problems to do with the study you can contact the Protocol Director Dr. Robert Fisher; you can call him/her at 650-721-5552. You can also call Mr. Adam Fogarty at 650-721-5552.\n" +
            "\n" +
            "If you have questions about the study but want to talk to someone else who is not a part of the study, you can call the Stanford Institutional Review Board (IRB) at (650)-723-5244 or toll free at 1-866-680-2906.\n" +
            "\n" +
            "What if I do not want to do this? \n" +
            "You can stop being in the study at any time without getting in trouble and your doctor will continue to treat you if treatment is necessary and available.  \n" +
            "If you don’t want to stay in the study please tell Robert S. Fisher, MD, PhD, robert.fisher@stanford.edu, 650-721-5552, Stanford Neuroscience Health Center, Room 4865, 213 Quarry Road, Palo Alto, CA 94304-5979.at any time.\n"

        },
      },
      {
        skipWhen: { '===': [{ var: 'isParticipantAssistedByCaregiver' }, false] },
        component: 'DataTrialSignatureV1',
        props: {
          title: 'Signature of participant'
        }
      },
    ],
  },
};

const insights = {
  pages: [
    {
      component: 'DataTrialCalendarTrackV2',
      props: {
        title: 'Seizure Log',
        editButtonText: 'Edit Log',
        trackButtonText: 'Track',
        calendarItems: ['Symptom'],
        calendarItemProps: {
          Symptom: {
            barSelectorItemColors: ['#9C2FF0', '#4D90FF'],
            hadDataColor: '#7144ff',
            noDataColor: 'rgba(113, 68, 255, 0.4)',
            selectedDayColor: '#1c2a46',
            hadDataLegend: 'Symptom',
            noDataLegend: 'No symptom',
          },
        },
      },
    },
    {
      component: 'DataTrialEpilepsyPointsSummaryV1',
    },
    {
      component: 'DataTrialEpilepsyTrackPatternsV1',
      props: {},
    },
  ],
};

const tracking = {
  syncOmics: {
    redirectURL: '/main/nav/dataTrials',
    alwaysShowRewardModal: true,
    rewardModalProps: {
      addTracking: {
        title: 'Omics Synced!',
        description: [
          "Good work! The next step is to complete the initial survey.",
        ].join(''),
      },
    },
    layoutProps: {
      noVerticalSpacing: true,
      noBottomBar: true,
      headerProps: {
        transparent: true,
      },
    },
    pages: [
      {
        component: 'DataTrialSyncOmicsV2',
        props: {
          requiredOmics: ['phenome', 'physiome', 'exposome'],
          requireAirQualityData: false,
          headerTitle: 'Import Omics',
          footnoteText: [
            'For the exposome, you need to include past location data.',
          ].join(''),
        },
      },
    ],
  },
  initialSurvey: {
    layoutProps: {
      noVerticalSpacing: true,
      noBottomBar: true,
      headerProps: {
        transparent: true,
      },
    },
    pages: [
      {
        component: 'DataTrialMultiSectionTrackerV1',
        props: {
          sectionTitle: 'Initial history questionnaire',
          flowNextButtonProps: {
            disabledColors: ["#B5B4FD", "#B5B4FD"],
            containerStyle: {
              marginRight: 21,
              width: 58,
              alignSelf: 'flex-end',
            },
          },
          sections: [
            {
              title: '1. Epilepsy history',
              items: [
                {
                  component: 'DataTrialSimpleQuestionnaireV1',
                  props: {
                    requiredFields: {
                      and: [{ 'someChecked': { var: 'gender' } }],
                    },
                    items: [
                      {
                        component: 'PageTitle',
                        props: {
                          title: "What's your gender?",
                        },
                      },
                      {
                        component: 'DataTrialChecklistGroupV2',
                        name: 'gender',
                        props: {
                          optionList: gender,
                        },
                      },
                    ],
                  },
                },
                {
                  component: 'DataTrialSimpleQuestionnaireV1',
                  props: {
                    requiredFields: {
                      and: [{ 'someChecked': { var: 'risk_factors' } }],
                    },
                    items: [
                      {
                        component: 'PageTitle',
                        props: {
                          title:
                            'Do any of these epilepsy risk factors apply to you? (select all that apply)',
                        },
                      },
                      {
                        component: 'DataTrialChecklistGroupV2',
                        name: 'risk_factors',
                        props: {
                          optionList: riskFactors,
                        },
                      },
                    ],
                  },
                },
                {
                  component: 'DataTrialSimpleQuestionnaireV1',
                  props: {
                    requiredFields: {
                      and: [{ 'someChecked': { var: 'surgery_list' } }],
                    },
                    items: [
                      {
                        component: 'PageTitle',
                        props: {
                          title: 'Have you had any of these surgeries for your seizures? (select all that apply)',
                        },
                      },
                      {
                        component: 'DataTrialChecklistGroupV2',
                        name: 'surgery_list',
                        props: {
                          optionList: surgeryList,
                        },
                      },
                    ],
                  },
                },
                {
                  component: 'DataTrialSimpleQuestionnaireV1',
                  props: {
                    items: [
                      {
                        component: 'PageTitle',
                        props: {
                          title: `What's your dominant hand? (optional)`,
                        },
                      },
                      {
                        component: 'DataTrialChecklistGroupV2',
                        name: 'dominant_hand',
                        props: {
                          optionList: dominantHand,
                        },
                      },
                    ],
                  },
                },
              ],
            },
            {
              title: '2. Seizure details',
              items: [
                {
                  component: 'DataTrialSimpleQuestionnaireV1',
                  props: {
                    requiredFields: {
                      and: [{ 'containsData': { var: 'user_seizures' } }]
                    },
                    items: [
                      {
                        component: 'PageTitle',
                        props: {
                          title: 'List up to 3 types of seizures you generally experience:',
                        },
                      },
                      {
                        component: 'SeizureElementMgr',
                        name: 'user_seizures',
                        props: {
                          archiveMode: false,
                          elementTitle: 'Seizure',
                          dataTrialId: 'ai.doc.data.trial.epilepsy',
                          requiredFields: {
                            and: [
                              { '!!': { var: 'elementName' } },
                              { '!!': { var: 'elementDescription' } },
                            ],
                          },
                          serviceSessionPath: 'profile/seizureProfile',
                          elementForm: [
                            {
                              component: 'DataTrialFieldLabelV1',
                              props: {
                                question: 'What name would you give this seizure?',
                              },
                            },
                            {
                              component: 'DataTrialTextInputV1',
                              name: 'elementName',
                              props: {
                                placeholder: 'Provide a short name for this seizure',
                              },
                            },
                            {
                              component: 'DataTrialFieldLabelV1',
                              props: {
                                question:
                                  'Describe what happens during the seizure, from start to finish.',
                              },
                            },
                            {
                              component: 'DataTrialTextInputV1',
                              name: 'elementDescription',
                              props: {
                                placeholder: 'Please describe',
                              },
                            },
                            {
                              component: 'AutoCompleteField',
                              name: 'seizureMedicalName',
                              props: {
                                placeholder: "Please share if you know",
                                labelText:
                                  'Do you know the medical name for this type of seizure? (Optional) ',
                                data: [
                                  'Focal aware seizure',
                                  'Simple partial seizure',
                                  'Focal impaired awareness seizure',
                                  'Complex partial seizure',
                                  'Psychomotor seizure',
                                  'Limbic seizure',
                                  'Focal to bilateral tonic-clonic seizure',
                                  'Secondarily generalized seizure',
                                  'Focal to grand mal seizure',
                                  'Partial to grand mal seizure',
                                  'Generalized tonic-clonic seizure',
                                  'Grand mal seizure',
                                  'Atonic seizure',
                                  'Focal motor seizure',
                                  'Partial motor seizure',
                                  'Focal sensory seizure',
                                  'Partial sensory seizure',
                                  'Myoclonic seizure',
                                  'Absence seizure',
                                  'Petit mal seizure',
                                  'Epileptic spasms',
                                  'Infantile spasms',
                                  'Other',
                                ],
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
            {
              title: '3. Seizure medications',
              items: [
                {
                  component: 'DataTrialSimpleQuestionnaireV1',
                  props: {
                    requiredFields: {
                      and: [{ 'hasLength': { var: 'user_medications' } }],
                    },
                    items: [
                      {
                        component: 'PageTitle',
                        props: {
                          title: 'List your current anti-epileptic medications, one at a time',
                        },
                      },
                      {
                        component: 'DataTrialElementMgrV3',
                        title: 'Medications',
                        name: 'user_medications',
                        props: {
                          archiveMode: false,
                          isInitialSurvey: true,
                          elementTitle: 'Medications',
                          dataTrialId: 'ai.doc.data.trial.epilepsy',
                          requiredFields: {
                            and: [
                              { '!!': { var: 'elementName' } },
                              { '!!': { var: 'elementDescription' } },
                            ],
                          },
                          serviceSessionPath: 'profile/medicationProfile',
                          elementForm: [],
                        },
                      },
                    ],
                  },
                },
                {
                  component: 'DataTrialSimpleQuestionnaireV1',
                  props: {
                    requiredFields: {
                      and: [{ 'someChecked': { var: 'current_medications_side_effects' } }],
                    },
                    items: [
                      {
                        component: 'PageTitle',
                        props: {
                          title: 'What side effects are you currently having as a result of these medications?',
                        },
                      },
                      {
                        component: 'DataTrialChecklistGroupV2',
                        name: 'current_medications_side_effects',
                        props: {
                          optionList: sideEffects,
                        },
                      },
                    ],
                  },
                },
                {
                  component: 'DataTrialSimpleQuestionnaireV1',
                  props: {
                    items: [
                      {
                        component: 'PageTitle',
                        props: {
                          title: "List anti-epileptic medications you took in the past, one at a time.",
                        },
                      },
                      {
                        component: 'PastMedicationsElementMgr',
                        title: 'Past Medications',
                        name: 'user_past_medications',
                        props: {
                          archiveMode: false,
                          isInitialSurvey: true,
                          elementTitle: 'Past Medications',
                          dataTrialId: 'ai.doc.data.trial.epilepsy',
                          requiredFields: {
                            and: [
                              { '!!': { var: 'elementName' } },
                              { '!!': { var: 'elementDescription' } },
                            ],
                          },
                          serviceSessionPath: 'profile/pastMedicationProfile',
                          elementForm: [],
                        },
                      },
                    ],
                  },
                },
                {
                  component: 'DataTrialSimpleQuestionnaireV1',
                  skipWhen: { '===': [{ var: 'user_past_medications' }, []] }, // not working
                  props: {
                    skipWhen: { '===': [{ var: 'user_past_medications' }, []] }, // not working
                    items: [
                      {
                        component: 'PageTitle',
                        props: {
                          title: 'What were the side effects from the anti-epileptic medications you took in the past (if any)?',
                        },
                      },
                      {
                        component: 'DataTrialChecklistGroupV2',
                        name: 'past_medications_side_effects',
                        props: {
                          optionList: sideEffects,
                        },
                      },
                    ],
                  },
                },
              ],
            },
            {
              title: '4. Medical history',
              items: [
                {
                  component: 'DataTrialSimpleQuestionnaireV1',
                  props: {
                    requiredFields: {
                      and: [{ 'someChecked': { var: 'medical_conditions' } }],
                    },
                    items: [
                      {
                        component: 'PageTitle',
                        props: {
                          title: 'Check if you have had any of the following medical conditions (select all that apply):',
                        },
                      },
                      {
                        component: 'DataTrialChecklistGroupV2',
                        name: 'medical_conditions',
                        props: {
                          optionList: medicalConditions,
                        },
                      },
                    ],
                  },
                },
              ],
            },
            {
              title: '5. Social history',
              items: [
                {
                  component: 'DataTrialSimpleQuestionnaireV1',
                  props: {
                    requiredFields: {
                      and: [{ 'someChecked': { var: 'ethnicity' } }],
                    },
                    items: [
                      {
                        component: 'PageTitle',
                        props: {
                          title: 'What’s your ethnicity?',
                        },
                      },
                      {
                        component: 'DataTrialChecklistGroupV2',
                        name: 'ethnicity',
                        props: {
                          optionList: ethnicity,
                        },
                      },
                    ],
                  },
                },
                {
                  component: 'DataTrialSimpleQuestionnaireV1',
                  props: {
                    requiredFields: {
                      and: [{ 'someChecked': { var: 'education' } }],
                    },
                    items: [
                      {
                        component: 'PageTitle',
                        props: {
                          title:
                            "What's your highest level of education?",
                        },
                      },
                      {
                        component: 'DataTrialChecklistGroupV2',
                        name: 'education',
                        props: {
                          optionList: education,
                        },
                      },
                    ],
                  },
                },
                {
                  component: 'DataTrialSimpleQuestionnaireV1',
                  props: {
                    requiredFields: {
                      and: [{ 'someChecked': { var: 'living_situation' } }],
                    },
                    items: [
                      {
                        component: 'PageTitle',
                        props: {
                          title:
                            "What is your current living situation?",
                        },
                      },
                      {
                        component: 'DataTrialChecklistGroupV2',
                        name: 'living_situation',
                        props: {
                          optionList: livingSituation,
                        },
                      },
                    ],
                  },
                },
                {
                  component: 'DataTrialSimpleQuestionnaireV1',
                  props: {
                    requiredFields: {
                      and: [{ 'someChecked': { var: 'alcohol' } }],
                    },
                    items: [
                      {
                        component: 'PageTitle',
                        props: {
                          title:
                            "Do you use alcohol?",
                        },
                      },
                      {
                        component: 'DataTrialChecklistGroupV2',
                        name: 'alcohol',
                        props: {
                          optionList: alcoholChoices,
                        },
                      },
                    ],
                  },
                },
                {
                  component: 'DataTrialSimpleQuestionnaireV1',
                  props: {
                    requiredFields: {
                      and: [{ 'someChecked': { var: 'tobaccoUse' } }],
                    },
                    items: [
                      {
                        component: 'PageTitle',
                        props: {
                          title: 'Do you use tobacco?',
                        },
                      },
                      {
                        component: 'DataTrialChecklistGroupV2',
                        name: 'tobaccoUse',
                        props: {
                          optionList: tobaccoUse,
                        },
                      },
                    ],
                  },
                },
              ],
            },
            {
              title: '6. Family history',
              items: [
                {
                  component: 'DataTrialSimpleQuestionnaireV1',
                  props: {
                    requiredFields: {
                      and: [{ 'someChecked': { var: 'family_epilepsy' } }],
                    },
                    items: [
                      {
                        component: 'PageTitle',
                        props: {
                          title: [
                            'Do you have relatives who have had at least two seizures that were unrelated to fever or medications?',
                          ].join(''),
                        },
                      },
                      {
                        component: 'DataTrialChecklistGroupV2',
                        name: 'family_epilepsy',
                        props: {
                          optionList: relatives,
                        },
                      },
                      {
                        component: 'DataTrialTextInputV1',
                        name: 'family_diseases',
                        props: {
                          placeholder: 'Other Family Diseases:',
                        },
                      },
                    ],
                  },
                },
              ],
            },
            {
              title: '7. Review of systems',
              items: [
                {
                  component: 'DataTrialSimpleQuestionnaireV1',
                  props: {
                    items: [
                      {
                        component: 'PageTitle',
                        props: {
                          title:
                            'Do you currently have problems in any of these areas?',
                        },
                      },
                      {
                        component: 'DataTrialChecklistGroupV2',
                        name: 'userHealthProblems',
                        props: {
                          optionList: userHealthProblems,
                        },
                      },
                    ],
                  },
                },
                {
                  component: 'DataTrialSimpleQuestionnaireV1',
                  props: {
                    requiredFields: {
                      and: [{ '!!': { var: 'userMoodAfterSurvey' } }],
                    },
                    items: [
                      {
                        component: 'PageTitle',
                        props: {
                          title: 'Rate your mood',
                        },
                      },
                      {
                        component: 'DataTrialMoodRating',
                        name: 'userMoodAfterSurvey',
                      },
                    ],
                  },
                },
              ],
            },
          ],
        },
      },
    ],
  },
  seizureImpactSurvey: {
    noRewardMessage: 'You have changed your survey response.',
    layoutProps: {
      noVerticalSpacing: true,
      noBottomBar: true,
      headerProps: {
        transparent: true,
      },
    },
    pages: [
      {
        component: 'DataTrialSimpleQuestionnaireV1',
        props: {
          requiredFields: {
            and: [{ '!!': { var: 'mostRecentSeizure' } }],
          },
          items: [
            {
              component: 'PageTitle',
              props: {
                title: 'How long ago was your last seizure of any kind?',
              },
            },
            {
              component: 'DataTrialScaleRatingBox',
              name: 'mostRecentSeizure',
              props: {
                isPIESScale: true,
                values: [
                  '>1 year',
                  '3-12 months',
                  '1-3 months',
                  '7-31 days',
                  '1-7 days',
                ],
              },
            },
          ],
        },
      },
      {
        component: 'DataTrialSimpleQuestionnaireV1',
        props: {
          requiredFields: {
            and: [{ '!!': { var: 'recentSevereSeizure' } }],
          },
          items: [
            {
              component: 'PageTitle',
              props: {
                title: 'How long ago was your last most severe type of seizure?',
              },
            },
            {
              component: 'DataTrialScaleRatingBox',
              name: 'recentSevereSeizure',
              props: {
                isPIESScale: true,
                values: [
                  '>1 year',
                  '3-12 months',
                  '1-3 months',
                  '7-31 days',
                  '1-7 days',
                ],
              },
            },
          ],
        },
      },
      {
        component: 'DataTrialSimpleQuestionnaireV1',
        props: {
          requiredFields: {
            and: [{ '!!': { var: 'overallSeverity' } }],
          },
          items: [
            {
              component: 'PageTitle',
              props: {
                title: [
                  'In the past 3 months, how severe (intense) have your seizures',
                  'been overall?',
                ].join(' '),
              },
            },
            {
              component: 'DataTrialScaleRatingBox',
              name: 'overallSeverity',
              props: {
                isPIESScale: true,
                values: ['Not at all', 'Moderate amount', 'Very much'],
              },
            },
          ],
        },
      },
      {
        component: 'DataTrialSimpleQuestionnaireV1',
        props: {
          requiredFields: {
            and: [{ '!!': { var: 'memoryLoss' } }],
          },
          items: [
            {
              component: 'PageTitle',
              props: {
                title: [
                  'In the past 3 months, how often did you have seizures with',
                  'loss of memory or awareness',
                ].join(' '),
              },
            },
            {
              component: 'DataTrialScaleRatingBox',
              name: 'memoryLoss',
              props: {
                isPIESScale: true,
                values: ['Never', 'Sometimes', 'Very often'],
              },
            },
          ],
        },
      },
      {
        component: 'DataTrialSimpleQuestionnaireV1',
        props: {
          requiredFields: {
            and: [{ '!!': { var: 'bothersomeSeizures' } }],
          },
          items: [
            {
              component: 'PageTitle',
              props: {
                title: [
                  'In the past 3 months, how bothersome were your seizures?',
                ].join(' '),
              },
            },
            {
              component: 'DataTrialScaleRatingBox',
              name: 'bothersomeSeizures',
              props: {
                isPIESScale: true,
                values: ['Not at all', 'Moderate amount', 'Very much'],
              },
            },
          ],
        },
      },
      {
        component: 'DataTrialSimpleQuestionnaireV1',
        props: {
          requiredFields: {
            and: [{ '!!': { var: 'usefulWarnings' } }],
          },
          items: [
            {
              component: 'PageTitle',
              props: {
                title: [
                  'In the past 3 months, how often did you have a useful warning',
                  'before your seizures?'
                ].join(' '),
              },
            },
            {
              component: 'DataTrialScaleRatingBox',
              name: 'usefulWarnings',
              props: {
                isPIESScale: true,
                values: ['Very often', 'Sometimes', 'Never'],
              },
            },
          ],
        },
      },
      {
        component: 'DataTrialSimpleQuestionnaireV1',
        props: {
          requiredFields: {
            and: [{ '!!': { var: 'bothersomeEffects' } }],
          },
          items: [
            {
              component: 'PageTitle',
              props: {
                title: [
                  'In the past 3 months, how bothersome were the effects after',
                  'your seizures?'
                ].join(' '),
              },
            },
            {
              component: 'DataTrialScaleRatingBox',
              name: 'bothersomeEffects',
              props: {
                isPIESScale: true,
                values: ['Not at all', 'Moderate amount', 'Very much'],
              },
            },
          ],
        },
      },
      {
        component: 'DataTrialSimpleQuestionnaireV1',
        props: {
          requiredFields: {
            and: [{ '!!': { var: 'seizureInjuries' } }],
          },
          items: [
            {
              component: 'PageTitle',
              props: {
                title: [
                  'In the past 3 months, how often did seizures cause injury',
                  '(such as head injury, broken bone, shoulder dislocation,',
                  'chipped tooth, tongue or cheek bites, bad cuts, bruises or burns)?'
                ].join(' '),
              },
            },
            {
              component: 'DataTrialScaleRatingBox',
              name: 'seizureInjuries',
              props: {
                isPIESScale: true,
                values: ['Never', 'Sometimes', 'Very often'],
              },
            },
          ],
        },
      },
      {
        component: 'DataTrialSimpleQuestionnaireV1',
        props: {
          requiredFields: {
            and: [{ '!!': { var: 'extendedSeizures' } }],
          },
          items: [
            {
              component: 'PageTitle',
              props: {
                title: [
                  'In the past 3 months, did you have a seizure lasting longer',
                  'than 30 minutes or one seizure going directly to another for',
                  'more than 30 minutes?'
                ].join(' '),
              },
            },
            {
              component: 'DataTrialScaleRatingBox',
              name: 'extendedSeizures',
              props: {
                isPIESScale: true,
                values: ['Never', 'Sometimes', 'Very often'],
              },
            },
          ],
        },
      },
      {
        component: 'DataTrialSimpleQuestionnaireV1',
        props: {
          requiredFields: {
            and: [{ '!!': { var: 'medicationsCount' } }],
          },
          items: [
            {
              component: 'PageTitle',
              props: {
                title: [
                  'How many different types of seizure-epilepsy medicines are',
                  'you currently taking NOW?',
                ].join(' '),
              },
            },
            {
              component: 'DataTrialTextInputV1',
              name: 'medicationsCount',
              props: {
                question: '',
                placeholder: 'Current medication count',
              },
            },
          ],
        },
      },
      {
        component: 'DataTrialSimpleQuestionnaireV1',
        props: {
          requiredFields: {
            and: [{ '!!': { var: 'angerOrAggression' } }],
          },
          items: [
            {
              component: 'PageTitle',
              props: {
                title: [
                  'In the past 3 months, how often did your seizure medicines',
                  'cause anger or aggression?',
                ].join(' '),
              },
            },
            {
              component: 'DataTrialScaleRatingBox',
              name: 'angerOrAggression',
              props: {
                isPIESScale: true,
                values: ['Never', 'Sometimes', 'Very often'],
              },
            },
          ],
        },
      },
      {
        component: 'DataTrialSimpleQuestionnaireV1',
        props: {
          requiredFields: {
            and: [{ '!!': { var: 'memoryProblems' } }],
          },
          items: [
            {
              component: 'PageTitle',
              props: {
                title: [
                  'In the past 3 months, how often did your seizure medicines',
                  'cause confusion or memory problems?',
                ].join(' '),
              },
            },
            {
              component: 'DataTrialScaleRatingBox',
              name: 'memoryProblems',
              props: {
                isPIESScale: true,
                values: ['Never', 'Sometimes', 'Very often'],
              },
            },
          ],
        },
      },
      {
        component: 'DataTrialSimpleQuestionnaireV1',
        props: {
          requiredFields: {
            and: [{ '!!': { var: 'physicalProblems' } }],
          },
          items: [
            {
              component: 'PageTitle',
              props: {
                title: [
                  'In the past 3 months, how often did your seizure medicines',
                  'cause physical problems (such as dizziness, double vision or',
                  'stomach upset)?',
                ].join(' '),
              },
            },
            {
              component: 'DataTrialScaleRatingBox',
              name: 'physicalProblems',
              props: {
                isPIESScale: true,
                values: ['Never', 'Sometimes', 'Very often'],
              },
            },
          ],
        },
      },
      {
        component: 'DataTrialSimpleQuestionnaireV1',
        props: {
          requiredFields: {
            and: [{ '!!': { var: 'tirednessProblems' } }],
          },
          items: [
            {
              component: 'PageTitle',
              props: {
                title: [
                  'In the past 3 months, how often did your seizure medicines',
                  'cause you to be tired or sleepy?',
                ].join(' '),
              },
            },
            {
              component: 'DataTrialScaleRatingBox',
              name: 'tirednessProblems',
              props: {
                isPIESScale: true,
                values: ['Never', 'Sometimes', 'Very often'],
              },
            },
          ],
        },
      },
      {
        component: 'DataTrialSimpleQuestionnaireV1',
        props: {
          requiredFields: {
            and: [{ '!!': { var: 'disturbedSleep' } }],
          },
          items: [
            {
              component: 'PageTitle',
              props: {
                title: [
                  'In the past 3 months, how often did your seizure medicines',
                  'cause disturbed sleep?',
                ].join(' '),
              },
            },
            {
              component: 'DataTrialScaleRatingBox',
              name: 'disturbedSleep',
              props: {
                isPIESScale: true,
                values: ['Never', 'Sometimes', 'Very often'],
              },
            },
          ],
        },
      },
      {
        component: 'DataTrialSimpleQuestionnaireV1',
        props: {
          requiredFields: {
            and: [{ '!!': { var: 'headaches' } }],
          },
          items: [
            {
              component: 'PageTitle',
              props: {
                title: [
                  'In the past 3 months, how often did your seizure medicines',
                  'cause headache?',
                ].join(' '),
              },
            },
            {
              component: 'DataTrialScaleRatingBox',
              name: 'headaches',
              props: {
                isPIESScale: true,
                values: ['Never', 'Sometimes', 'Very often'],
              },
            },
          ],
        },
      },
      {
        component: 'DataTrialSimpleQuestionnaireV1',
        props: {
          requiredFields: {
            and: [{ '!!': { var: 'depression' } }],
          },
          items: [
            {
              component: 'PageTitle',
              props: {
                title: [
                  'In the past 3 months, did you feel depressed?',
                ].join(' '),
              },
            },
            {
              component: 'DataTrialScaleRatingBox',
              name: 'depression',
              props: {
                isPIESScale: true,
                values: ['Not at all', 'Moderate amount', 'Very much'],
              },
            },
          ],
        },
      },
      {
        component: 'DataTrialSimpleQuestionnaireV1',
        props: {
          requiredFields: {
            and: [{ '!!': { var: 'anxiety' } }],
          },
          items: [
            {
              component: 'PageTitle',
              props: {
                title: [
                  'In the past 3 months, did you feel anxious?',
                ].join(' '),
              },
            },
            {
              component: 'DataTrialScaleRatingBox',
              name: 'anxiety',
              props: {
                isPIESScale: true,
                values: ['Not at all', 'Moderate amount', 'Very much'],
              },
            },
          ],
        },
      },
      {
        component: 'DataTrialSimpleQuestionnaireV1',
        props: {
          requiredFields: {
            and: [{ '!!': { var: 'thinkingOrMemory' } }],
          },
          items: [
            {
              component: 'PageTitle',
              props: {
                title: [
                  'In the past 3 months, did you have problems with thinking',
                  'or memory?'
                ].join(' '),
              },
            },
            {
              component: 'DataTrialScaleRatingBox',
              name: 'thinkingOrMemory',
              props: {
                isPIESScale: true,
                values: ['Not at all', 'Moderate amount', 'Very much'],
              },
            },
          ],
        },
      },
      {
        component: 'DataTrialSimpleQuestionnaireV1',
        props: {
          requiredFields: {
            and: [{ '!!': { var: 'workLimitations' } }],
          },
          items: [
            {
              component: 'PageTitle',
              props: {
                title: [
                  'In the past 3 months, were you bothered by epilepsy, seizures',
                  'or medication side effects causing limitations with work or school?',
                ].join(' '),
              },
            },
            {
              component: 'DataTrialScaleRatingBox',
              name: 'workLimitations',
              props: {
                isPIESScale: true,
                values: ['Not at all', 'Moderate amount', 'Very much'],
              },
            },
          ],
        },
      },
      {
        component: 'DataTrialSimpleQuestionnaireV1',
        props: {
          requiredFields: {
            and: [{ '!!': { var: 'activityLimitations' } }],
          },
          items: [
            {
              component: 'PageTitle',
              props: {
                title: [
                  'In the past 3 months, have you been bothered by epilepsy, seizures',
                  'or medication side effects causing limitations on exercise,',
                  'leisure activities or social activities with friends, family',
                  'or others?'
                ].join(' '),
              },
            },
            {
              component: 'DataTrialScaleRatingBox',
              name: 'activityLimitations',
              props: {
                isPIESScale: true,
                values: ['Not at all', 'Moderate amount', 'Very much'],
              },
            },
          ],
        },
      },
      {
        component: 'DataTrialSimpleQuestionnaireV1',
        props: {
          requiredFields: {
            and: [{ '!!': { var: 'transportationProblems' } }],
          },
          items: [
            {
              component: 'PageTitle',
              props: {
                title: [
                  'In the past 3 months, have you been bothered by epilepsy, seizures',
                  'or medication side effects causing problems with transportation?',
                ].join(' '),
              },
            },
            {
              component: 'DataTrialScaleRatingBox',
              name: 'transportationProblems',
              props: {
                isPIESScale: true,
                values: ['Not at all', 'Moderate amount', 'Very much'],
              },
            },
          ],
        },
      },
      {
        component: 'DataTrialSimpleQuestionnaireV1',
        props: {
          requiredFields: {
            and: [{ '!!': { var: 'fearOfSeizures' } }],
          },
          items: [
            {
              component: 'PageTitle',
              props: {
                title: [
                  'In the past 3 months, have you been afraid of having a seizure?',
                ].join(' '),
              },
            },
            {
              component: 'DataTrialScaleRatingBox',
              name: 'fearOfSeizures',
              props: {
                isPIESScale: true,
                values: ['Not at all', 'Moderate amount', 'Very much'],
              },
            },
          ],
        },
      },
      {
        component: 'DataTrialSimpleQuestionnaireV1',
        props: {
          requiredFields: {
            and: [{ '!!': { var: 'unusualExpenses' } }],
          },
          items: [
            {
              component: 'PageTitle',
              props: {
                title: [
                  'In the past 3 months, did you spend more than the usual',
                  'amounts of money on medications or medical care?',
                ].join(' '),
              },
            },
            {
              component: 'DataTrialScaleRatingBox',
              name: 'unusualExpenses',
              props: {
                isPIESScale: true,
                values: ['Not at all', 'Moderate amount', 'Very much'],
              },
            },
          ],
        },
      },
      {
        component: 'DataTrialSimpleQuestionnaireV1',
        props: {
          requiredFields: {
            and: [{ '!!': { var: 'qualityOfLife' } }],
          },
          items: [
            {
              component: 'PageTitle',
              props: {
                title: [
                  'Overall, how would you rate your quality of life during the',
                  'past 3 months?'
                ].join(' '),
              },
            },
            {
              component: 'DataTrialScaleRatingBox',
              name: 'qualityOfLife',
              props: {
                isPIESScale: true,
                values: ['Excellent', 'OK', 'Very bad'],
              },
            },
          ],
        },
      },
    ],
  },
  seizureDetailSurvey: {
    noRewardMessage: 'You have changed your survey response.',
    layoutProps: {
      noVerticalSpacing: true,
      noBottomBar: true,
      headerProps: {
        transparent: true,
      },
    },
    pagesA: [
      {
        component: 'DataTrialSimpleQuestionnaireV1',
        props: {
          requiredFields: {
            and: [{ 'someChecked': { var: 'A_warningSigns' } }],
          },
          items: [
            {
              component: 'PageTitle',
              props: {
                title: '',
              },
            },
            {
              component: 'Markdown',
              props: {
                children: [
                  'Before this type of seizure starts, do you ever get one or',
                  'more of these warnings?',
                ].join(' '),
              },
            },
            {
              component: 'DataTrialChecklistGroupV2',
              name: 'A_warningSigns',
              props: {
                optionList: warningSigns,
              },
            },
          ],
        },
      },
      {
        component: 'DataTrialSimpleQuestionnaireV1',
        props: {
          requiredFields: {
            and: [{ 'someChecked': { var: 'A_seizureDuration' } }],
          },
          items: [
            {
              component: 'PageTitle',
              props: {
                title: '',
              },
            },
            {
              component: 'Markdown',
              props: {
                children: [
                  'How long does this type of seizure typically last?',
                ].join(''),
              },
            },
            {
              component: 'DataTrialChecklistGroupV2',
              name: 'A_seizureDuration',
              props: {
                optionList: seizureDuration2,
              },
            },
          ],
        },
      },
      {
        component: 'DataTrialSimpleQuestionnaireV1',
        props: {
          requiredFields: {
            and: [{ 'someChecked': { var: 'A_seizureMovements' } }],
          },
          items: [
            {
              component: 'PageTitle',
              props: {
                title: '',
              },
            },
            {
              component: 'Markdown',
              props: {
                children: [
                  'What type of movements do you experience during this seizure?',
                ].join(' '),
              },
            },
            {
              component: 'DataTrialChecklistGroupV2',
              name: 'A_seizureMovements',
              props: {
                optionList: seizureMovements,
              },
            },
          ],
        },
      },
      {
        component: 'DataTrialSimpleQuestionnaireV1',
        props: {
          requiredFields: {
            and: [{ 'someChecked': { var: 'A_seizureAwareness' } }],
          },
          items: [
            {
              component: 'PageTitle',
              props: {
                title: '',
              },
            },
            {
              component: 'Markdown',
              props: {
                children: [
                  'During the middle of this type of seizure, what is your',
                  'level of awareness?'
                ].join(' '),
              },
            },
            {
              component: 'DataTrialChecklistGroupV2',
              name: 'A_seizureAwareness',
              props: {
                optionList: seizureAwareness,
              },
            },
          ],
        },
      },
      {
        component: 'DataTrialSimpleQuestionnaireV1',
        props: {
          requiredFields: {
            and: [{ 'someChecked': { var: 'A_seizureAttributes' } }],
          },
          items: [
            {
              component: 'PageTitle',
              props: {
                title: '',
              },
            },
            {
              component: 'Markdown',
              props: {
                children: [
                  'What, if any, physical or mental attributes are you ',
                  'aware of while experiencing this type of seizure?',
                ].join(''),
              },
            },
            {
              component: 'DataTrialChecklistGroupV2',
              name: 'A_seizureAttributes',
              props: {
                optionList: seizureAttributes,
              },
            },
          ],
        },
      },
      {
        component: 'DataTrialSimpleQuestionnaireV1',
        props: {
          requiredFields: {
            and: [{ 'someChecked': { var: 'A_seizureIncontinence' } }],
          },
          items: [
            {
              component: 'PageTitle',
              props: {
                title: '',
              },
            },
            {
              component: 'Markdown',
              props: {
                children: [
                  'Do you ever have incontinence with the seizures?',
                ].join(' '),
              },
            },
            {
              component: 'DataTrialChecklistGroupV2',
              name: 'A_seizureIncontinence',
              props: {
                optionList: seizureIncontinence,
              },
            },
          ],
        },
      },
      {
        component: 'DataTrialSimpleQuestionnaireV1',
        props: {
          requiredFields: {
            and: [{ 'someChecked': { var: 'A_statusEpilepticus' } }],
          },
          items: [
            {
              component: 'PageTitle',
              props: {
                title: 'Have you had status epilepticus?',
              },
            },
            {
              component: 'Markdown',
              props: {
                children: [
                  'Do you ever have a Status Epilepticus (a seizure that has',
                  'lasted greater than 30 minutes, or repeated short seizures',
                  'within one hour without a return to full consciousness)?',
                ].join(' '),
              },
            },
            {
              component: 'DataTrialChecklistGroupV2',
              name: 'A_statusEpilepticus',
              props: {
                optionList: statusEpilepticus,
              },
            },
          ],
        },
      },
      {
        component: 'DataTrialSimpleQuestionnaireV1',
        props: {
          requiredFields: {
            and: [{ 'someChecked': { var: 'A_seizureAftermath' } }],
          },
          items: [
            {
              component: 'PageTitle',
              props: {
                title: '',
              },
            },
            {
              component: 'Markdown',
              props: {
                children: [
                  'Aftermath (post-ictal)',
                ].join(' '),
              },
            },
            {
              component: 'DataTrialChecklistGroupV2',
              name: 'A_seizureAftermath',
              props: {
                optionList: seizureAftermath,
              },
            },
          ],
        },
      },
      {
        component: 'DataTrialSimpleQuestionnaireV1',
        props: {
          requiredFields: {
            and: [{ '!!': { var: 'A_seizureFrequency' } }],
          },
          items: [
            {
              component: 'PageTitle',
              props: {
                title: '',
              },
            },
            {
              component: 'Markdown',
              props: {
                children: [
                  'Approximately how frequently does this type of seizure occur?',
                ].join(' '),
              },
            },
            {
              component: 'DataTrialTextInputV1',
              name: 'A_seizureFrequency',
              props: {
                placeholder: 'number per day, week, month, year or lifetime.',
              },
            },
          ],
        },
      },
      {
        component: 'DataTrialSimpleQuestionnaireV1',
        props: {
          requiredFields: {
            and: [{ 'someChecked': { var: 'A_seizureTriggers' } }],
          },
          items: [
            {
              component: 'PageTitle',
              props: {
                title: '',
              },
            },
            {
              component: 'Markdown',
              props: {
                children: [
                  'Have you identified any seizure triggers?',
                ].join(' '),
              },
            },
            {
              component: 'DataTrialChecklistGroupV2',
              name: 'A_seizureTriggers',
              props: {
                optionList: seizureTriggers,
              },
            },
          ],
        },
      },
      {
        component: 'DataTrialSimpleQuestionnaireV1',
        props: {
          requiredFields: {
            and: [{ 'someChecked': { var: 'A_seizureInjuries' } }],
          },
          items: [
            {
              component: 'PageTitle',
              props: {
                title: '',
              },
            },
            {
              component: 'Markdown',
              props: {
                children: [
                  'Have you suffered any injuries from this seizure?',
                ].join(' '),
              },
            },
            {
              component: 'DataTrialChecklistGroupV2',
              name: 'A_seizureInjuries',
              props: {
                optionList: seizureInjuries,
              },
            },
          ],
        },
      },
    ],
    pagesB: [
      {
        component: 'DataTrialSimpleQuestionnaireV1',
        props: {
          requiredFields: {
            and: [{ 'someChecked': { var: 'B_warningSigns' } }],
          },
          items: [
            {
              component: 'PageTitle',
              props: {
                title: '',
              },
            },
            {
              component: 'Markdown',
              props: {
                children: [
                  'Before this type of seizure starts, do you ever get one or',
                  'more of these warnings?',
                ].join(' '),
              },
            },
            {
              component: 'DataTrialChecklistGroupV2',
              name: 'B_warningSigns',
              props: {
                optionList: warningSigns,
              },
            },
          ],
        },
      },
      {
        component: 'DataTrialSimpleQuestionnaireV1',
        props: {
          requiredFields: {
            and: [{ 'someChecked': { var: 'B_seizureDuration' } }],
          },
          items: [
            {
              component: 'PageTitle',
              props: {
                title: '',
              },
            },
            {
              component: 'Markdown',
              props: {
                children: [
                  'How long does this type of seizure typically last?',
                ].join(''),
              },
            },
            {
              component: 'DataTrialChecklistGroupV2',
              name: 'B_seizureDuration',
              props: {
                optionList: seizureDuration2,
              },
            },
          ],
        },
      },
      {
        component: 'DataTrialSimpleQuestionnaireV1',
        props: {
          requiredFields: {
            and: [{ 'someChecked': { var: 'B_seizureMovements' } }],
          },
          items: [
            {
              component: 'PageTitle',
              props: {
                title: '',
              },
            },
            {
              component: 'Markdown',
              props: {
                children: [
                  'What type of movements do you experience during this seizure?',
                ].join(' '),
              },
            },
            {
              component: 'DataTrialChecklistGroupV2',
              name: 'B_seizureMovements',
              props: {
                optionList: seizureMovements,
              },
            },
          ],
        },
      },
      {
        component: 'DataTrialSimpleQuestionnaireV1',
        props: {
          requiredFields: {
            and: [{ 'someChecked': { var: 'B_seizureAwareness' } }],
          },
          items: [
            {
              component: 'PageTitle',
              props: {
                title: '',
              },
            },
            {
              component: 'Markdown',
              props: {
                children: [
                  'During the strongest part of this type of seizure, what is your',
                  'level of awareness?'
                ].join(' '),
              },
            },
            {
              component: 'DataTrialChecklistGroupV2',
              name: 'B_seizureAwareness',
              props: {
                optionList: seizureAwareness,
              },
            },
          ],
        },
      },
      {
        component: 'DataTrialSimpleQuestionnaireV1',
        props: {
          requiredFields: {
            and: [{ 'someChecked': { var: 'B_seizureAttributes' } }],
          },
          items: [
            {
              component: 'PageTitle',
              props: {
                title: '',
              },
            },
            {
              component: 'Markdown',
              props: {
                children: [
                  'What, if any, physical or mental attributes are you ',
                  'aware of while experiencing this type of seizure?',
                ].join(''),
              },
            },
            {
              component: 'DataTrialChecklistGroupV2',
              name: 'B_seizureAttributes',
              props: {
                optionList: seizureAttributes,
              },
            },
          ],
        },
      },
      {
        component: 'DataTrialSimpleQuestionnaireV1',
        props: {
          requiredFields: {
            and: [{ 'someChecked': { var: 'B_seizureIncontinence' } }],
          },
          items: [
            {
              component: 'PageTitle',
              props: {
                title: '',
              },
            },
            {
              component: 'Markdown',
              props: {
                children: [
                  'Do you ever have incontinence with the seizures?',
                ].join(' '),
              },
            },
            {
              component: 'DataTrialChecklistGroupV2',
              name: 'B_seizureIncontinence',
              props: {
                optionList: seizureIncontinence,
              },
            },
          ],
        },
      },
      {
        component: 'DataTrialSimpleQuestionnaireV1',
        props: {
          requiredFields: {
            and: [{ 'someChecked': { var: 'B_statusEpilepticus' } }],
          },
          items: [
            {
              component: 'PageTitle',
              props: {
                title: 'Have you had status epilepticus?',
              },
            },
            {
              component: 'Markdown',
              props: {
                children: [
                  'Do you ever have a Status Epilepticus (a seizure that has',
                  'lasted greater than 30 minutes, or repeated short seizures',
                  'within one hour without a return to full consciousness)?',
                ].join(' '),
              },
            },
            {
              component: 'DataTrialChecklistGroupV2',
              name: 'B_statusEpilepticus',
              props: {
                optionList: statusEpilepticus,
              },
            },
          ],
        },
      },
      {
        component: 'DataTrialSimpleQuestionnaireV1',
        props: {
          requiredFields: {
            and: [{ 'someChecked': { var: 'B_seizureAftermath' } }],
          },
          items: [
            {
              component: 'PageTitle',
              props: {
                title: '',
              },
            },
            {
              component: 'Markdown',
              props: {
                children: [
                  'Aftermath (post-ictal)',
                ].join(' '),
              },
            },
            {
              component: 'DataTrialChecklistGroupV2',
              name: 'B_seizureAftermath',
              props: {
                optionList: seizureAftermath,
              },
            },
          ],
        },
      },
      {
        component: 'DataTrialSimpleQuestionnaireV1',
        props: {
          requiredFields: {
            and: [{ '!!': { var: 'B_seizureFrequency' } }],
          },
          items: [
            {
              component: 'PageTitle',
              props: {
                title: '',
              },
            },
            {
              component: 'Markdown',
              props: {
                children: [
                  'Approximately how frequently does this type of seizure occur?',
                ].join(' '),
              },
            },
            {
              component: 'DataTrialTextInputV1',
              name: 'B_seizureFrequency',
              props: {
                placeholder: 'number per day, week, month, year or lifetime.',
              },
            },
          ],
        },
      },
      {
        component: 'DataTrialSimpleQuestionnaireV1',
        props: {
          requiredFields: {
            and: [{ 'someChecked': { var: 'B_seizureTriggers' } }],
          },
          items: [
            {
              component: 'PageTitle',
              props: {
                title: '',
              },
            },
            {
              component: 'Markdown',
              props: {
                children: [
                  'Have you identified any seizure triggers?',
                ].join(' '),
              },
            },
            {
              component: 'DataTrialChecklistGroupV2',
              name: 'B_seizureTriggers',
              props: {
                optionList: seizureTriggers,
              },
            },
          ],
        },
      },
      {
        component: 'DataTrialSimpleQuestionnaireV1',
        props: {
          requiredFields: {
            and: [{ 'someChecked': { var: 'B_seizureInjuries' } }],
          },
          items: [
            {
              component: 'PageTitle',
              props: {
                title: '',
              },
            },
            {
              component: 'Markdown',
              props: {
                children: [
                  'Have you suffered any injuries from this seizure?',
                ].join(' '),
              },
            },
            {
              component: 'DataTrialChecklistGroupV2',
              name: 'B_seizureInjuries',
              props: {
                optionList: seizureInjuries,
              },
            },
          ],
        },
      },
    ],
    pagesC: [
      {
        component: 'DataTrialSimpleQuestionnaireV1',
        props: {
          requiredFields: {
            and: [{ 'someChecked': { var: 'C_warningSigns' } }],
          },
          items: [
            {
              component: 'PageTitle',
              props: {
                title: '',
              },
            },
            {
              component: 'Markdown',
              props: {
                children: [
                  'Before this type of seizure starts, do you ever get one or',
                  'more of these warnings?',
                ].join(' '),
              },
            },
            {
              component: 'DataTrialChecklistGroupV2',
              name: 'C_warningSigns',
              props: {
                optionList: warningSigns,
              },
            },
          ],
        },
      },
      {
        component: 'DataTrialSimpleQuestionnaireV1',
        props: {
          requiredFields: {
            and: [{ 'someChecked': { var: 'C_seizureDuration' } }],
          },
          items: [
            {
              component: 'PageTitle',
              props: {
                title: '',
              },
            },
            {
              component: 'Markdown',
              props: {
                children: [
                  'How long does this type of seizure typically last?',
                ].join(''),
              },
            },
            {
              component: 'DataTrialChecklistGroupV2',
              name: 'C_seizureDuration',
              props: {
                optionList: seizureDuration2,
              },
            },
          ],
        },
      },
      {
        component: 'DataTrialSimpleQuestionnaireV1',
        props: {
          requiredFields: {
            and: [{ 'someChecked': { var: 'C_seizureMovements' } }],
          },
          items: [
            {
              component: 'PageTitle',
              props: {
                title: '',
              },
            },
            {
              component: 'Markdown',
              props: {
                children: [
                  'What type of movements do you experience during this seizure?',
                ].join(' '),
              },
            },
            {
              component: 'DataTrialChecklistGroupV2',
              name: 'C_seizureMovements',
              props: {
                optionList: seizureMovements,
              },
            },
          ],
        },
      },
      {
        component: 'DataTrialSimpleQuestionnaireV1',
        props: {
          requiredFields: {
            and: [{ 'someChecked': { var: 'C_seizureAwareness' } }],
          },
          items: [
            {
              component: 'PageTitle',
              props: {
                title: '',
              },
            },
            {
              component: 'Markdown',
              props: {
                children: [
                  'During the middle of this type of seizure, what is your',
                  'level of awareness?'
                ].join(' '),
              },
            },
            {
              component: 'DataTrialChecklistGroupV2',
              name: 'C_seizureAwareness',
              props: {
                optionList: seizureAwareness,
              },
            },
          ],
        },
      },
      {
        component: 'DataTrialSimpleQuestionnaireV1',
        props: {
          requiredFields: {
            and: [{ 'someChecked': { var: 'C_seizureAttributes' } }],
          },
          items: [
            {
              component: 'PageTitle',
              props: {
                title: '',
              },
            },
            {
              component: 'Markdown',
              props: {
                children: [
                  'What, if any, physical or mental attributes are you ',
                  'aware of while experiencing this type of seizure?',
                ].join(''),
              },
            },
            {
              component: 'DataTrialChecklistGroupV2',
              name: 'C_seizureAttributes',
              props: {
                optionList: seizureAttributes,
              },
            },
          ],
        },
      },
      {
        component: 'DataTrialSimpleQuestionnaireV1',
        props: {
          requiredFields: {
            and: [{ 'someChecked': { var: 'C_seizureIncontinence' } }],
          },
          items: [
            {
              component: 'PageTitle',
              props: {
                title: '',
              },
            },
            {
              component: 'Markdown',
              props: {
                children: [
                  'Do you ever have incontinence with the seizures?',
                ].join(' '),
              },
            },
            {
              component: 'DataTrialChecklistGroupV2',
              name: 'C_seizureIncontinence',
              props: {
                optionList: seizureIncontinence,
              },
            },
          ],
        },
      },
      {
        component: 'DataTrialSimpleQuestionnaireV1',
        props: {
          requiredFields: {
            and: [{ 'someChecked': { var: 'C_statusEpilepticus' } }],
          },
          items: [
            {
              component: 'PageTitle',
              props: {
                title: 'Have you had status epilepticus?',
              },
            },
            {
              component: 'Markdown',
              props: {
                children: [
                  'Do you ever have a Status Epilepticus (a seizure that has',
                  'lasted greater than 30 minutes, or repeated short seizures',
                  'within one hour without a return to full consciousness)?',
                ].join(' '),
              },
            },
            {
              component: 'DataTrialChecklistGroupV2',
              name: 'C_statusEpilepticus',
              props: {
                optionList: statusEpilepticus,
              },
            },
          ],
        },
      },
      {
        component: 'DataTrialSimpleQuestionnaireV1',
        props: {
          requiredFields: {
            and: [{ 'someChecked': { var: 'C_seizureAftermath' } }],
          },
          items: [
            {
              component: 'PageTitle',
              props: {
                title: '',
              },
            },
            {
              component: 'Markdown',
              props: {
                children: [
                  'Aftermath (post-ictal)',
                ].join(' '),
              },
            },
            {
              component: 'DataTrialChecklistGroupV2',
              name: 'C_seizureAftermath',
              props: {
                optionList: seizureAftermath,
              },
            },
          ],
        },
      },
      {
        component: 'DataTrialSimpleQuestionnaireV1',
        props: {
          requiredFields: {
            and: [{ '!!': { var: 'C_seizureFrequency' } }],
          },
          items: [
            {
              component: 'PageTitle',
              props: {
                title: '',
              },
            },
            {
              component: 'Markdown',
              props: {
                children: [
                  'Approximately how frequently does this type of seizure occur?',
                ].join(' '),
              },
            },
            {
              component: 'DataTrialTextInputV1',
              name: 'C_seizureFrequency',
              props: {
                placeholder: 'number per day, week, month, year or lifetime.',
              },
            },
          ],
        },
      },
      {
        component: 'DataTrialSimpleQuestionnaireV1',
        props: {
          requiredFields: {
            and: [{ 'someChecked': { var: 'C_seizureTriggers' } }],
          },
          items: [
            {
              component: 'PageTitle',
              props: {
                title: '',
              },
            },
            {
              component: 'Markdown',
              props: {
                children: [
                  'Have you identified any seizure triggers?',
                ].join(' '),
              },
            },
            {
              component: 'DataTrialChecklistGroupV2',
              name: 'C_seizureTriggers',
              props: {
                optionList: seizureTriggers,
              },
            },
          ],
        },
      },
      {
        component: 'DataTrialSimpleQuestionnaireV1',
        props: {
          requiredFields: {
            and: [{ 'someChecked': { var: 'C_seizureInjuries' } }],
          },
          items: [
            {
              component: 'PageTitle',
              props: {
                title: '',
              },
            },
            {
              component: 'Markdown',
              props: {
                children: [
                  'Have you suffered any injuries from this seizure?',
                ].join(' '),
              },
            },
            {
              component: 'DataTrialChecklistGroupV2',
              name: 'C_seizureInjuries',
              props: {
                optionList: seizureInjuries,
              },
            },
          ],
        },
      },
    ],
  },
  manageDNATestShipping: {
    rewardModalProps: {
      noRewardTracking: {
        title: 'Your kit has been ordered!',
        description: '',
      },
    },
    redirectURL: '/main/nav/dataTrials',
    finalStepButtonText: 'Done',
    layoutProps: {
      noVerticalSpacing: true,
      noBottomBar: true,
      headerProps: {
        withProgressBar: false,
        transparent: true,
        rightText: null,
        onPress: null,
      },
    },
    pages: [
      // the code for modifying the page schema in the spec file is VERY fragile.
      // rearranging of the order of these components will result in broken
      // DataTrialShippingStatus flow experience. Handle with care.
      {
        component: 'DataTrialSimpleQuestionnaireV1',
        props: {
          items: [
            {
              component: 'DataTrialImage',
              props: {
                source: "ICON_KAILOS",
                style: {
                  marginLeft: 24,
                  marginTop: 12,
                },
              },
            },
            {
              component: 'PageTitle',
              props: {
                title: 'Kailos genetic test',
              },
            },
            {
              component: 'Markdown',
              props: {
                children: [
                  'Genetic factors are critical to understanding which medications work best for different individuals.',
                  'Kailos specializes in this type of analysis and will provide a saliva-based DNA test for this study, at no cost to you.',
                  '\n\n',
                  'Note that this genetic test is for this study alone.',
                  'Though the genetic results can’t be shared with you due to recent regulation, we will provide you with a report of the data you tracked over the course of the Epilepsy Digital Health Trial.',
                  '\n\n',
                  'Questions? Email <predictepilepsy@doc.ai>.',
                ].join(' '),
              },
            },
          ],
        },
      },
      {
        component: 'DataTrialSimpleQuestionnaireV1',
        _noticeMeSenpai: 'dobSkip',
        props: {
          requiredFields: {
            and: [
              { '!!': { var: 'first_name' } },
              { '!!': { var: 'last_name' } },
              { '!!': { var: 'gender' } },
              { '!!': { var: 'dob' } },
            ],
          },
          items: [
            {
              component: 'PageTitle',
              props: {
                title: 'Participant information',
              },
            },
            {
              component: 'DataTrialTextInputV1',
              name: 'first_name',
              props: {
                question: 'Name (required)',
                placeholder: 'First name',
                textContentType: 'name',
                autoComplete: true,
              },
            },
            {
              component: 'DataTrialTextInputV1',
              name: 'last_name',
              props: {
                placeholder: 'Last name',
                textContentType: 'name',
                autoComplete: true,
              },
            },
            {
              component: 'DataTrialGenderInputV1',
              name: 'gender',
              props: {
                question: 'Gender (required)',
                placeholder: 'Your gender',
                textContentType: 'text',
              },
            },
            {
              component: 'DataTrialDateInputV1',
              name: 'dob',
              props: {
                question: 'Date of birth (required)',
                placeholder: '1980-01-29',
              },
            },
          ],
        },
      },
      {
        component: 'DataTrialSimpleQuestionnaireV1',
        _noticeMeSenpai: 'addressSkip',
        props: {
          requiredFields: {
            and: [
              { '!!': { var: 'street_1' } },
              { '!!': { var: 'city' } },
              { '!!': { var: 'state' } },
              { '!!': { var: 'zip' } },
            ],
          },
          items: [
            {
              component: 'PageTitle',
              props: {
                title: 'Delivery information',
              },
            },
            {
              component: 'DataTrialTextInputV1',
              name: 'street_1',
              props: {
                question: 'Please enter your address below (required)',
                placeholder: 'Your delivery address',
                textContentType: 'address-line1',
                autoComplete: true,
              },
            },
            {
              component: 'DataTrialTextInputV1',
              name: 'city',
              props: {
                placeholder: 'City',
                textContentType: 'address-level2',
                autoComplete: true,
              },
            },
            {
              component: 'DataTrialTextInputV1',
              name: 'state',
              props: {
                placeholder: 'State',
                textContentType: 'address-level1',
                autoComplete: true,
              },
            },
            {
              component: 'DataTrialTextInputV1',
              name: 'zip',
              props: {
                placeholder: 'Zip Code',
                textContentType: 'postal-code',
                autoComplete: true,
              },
            },
            {
              component: 'DataTrialPhoneNumberInput',
              name: 'phoneNumber',
              props: {
                question: 'Mobile number (optional)',
                placeholder: 'Your phone number',
              },
            },
            {
              component: 'DataTrialTextInputV1',
              name: 'note',
              props: {
                question: 'Instructions for delivery (optional)',
                placeholder: 'For example, leave at front door',
              },
            },
          ],
        },
      },
      {
        component: 'DataTrialSimpleQuestionnaireV1',
        _noticeMeSenpai: 'orderStatusSkip',
        props: {
          items: [
            {
              component: 'PageTitle',
              props: {
                title: '',
              },
            },
            {
              component: 'DataTrialShippingStatus',
              props: {
                currentStatusId: 'order-placed',
                currentStatusDescription: '',
                shippingStatus: [
                  {
                    id: 'order-placed',
                    incompleteIcon: 'GENE_ORDER_1_PURPLE',
                    completeIcon: 'GENE_ORDER_1_PURPLE',
                  },
                  {
                    id: 'kit-shipped',
                    incompleteIcon: 'GENE_ORDER_2_GREY',
                    completeIcon: 'GENE_ORDER_2_PURPLE',
                  },
                  {
                    id: 'processing',
                    incompleteIcon: 'GENE_ORDER_3_GREY',
                    completeIcon: 'GENE_ORDER_3_PURPLE',
                  },
                  {
                    id: 'complete',
                    incompleteIcon: 'GENE_ORDER_4_GREY',
                    completeIcon: 'GENE_ORDER_4_PURPLE',
                  },
                ]
              },
            },
            {
              component: 'DataTrialTitledCard',
              _noticeMeSenpai: 'shippingInfoSkip',
              props: {
                title: 'Your free genetic test will arrive at:',
                schema: [
                  {
                    component: 'Markdown',
                    props: {
                      children: '',
                    },
                  },
                ],
              }
            },
            {
              component: 'DataTrialTitledCard',
              props: {
                title: 'Questions?',
                schema: [
                  {
                    component: 'Markdown',
                    props: {
                      children: [
                        'Call the helpline at [1-866-833-6865](tel:18668336865) or visit [kailos.com/helpline](https://www.kailos.com/helpline)',
                      ].join(' '),
                    },
                  },
                ],
              }
            },
          ],
        },
      },
    ],
  },
  default: {
    noRewardMessage: 'You\'ve updated your tracker (you\'ve earned your maximum points on this day). ',
    layoutProps: {
      noVerticalSpacing: true,
      noBottomBar: true,
      headerProps: {
        transparent: true,
      },
    },
    pages: [
      {
        component: 'DataTrialSimpleQuestionnaireV1',
        props: {
          footerType: "EpilepsyFoundationPopup",
          requiredFields: {
            '!!': { var: 'hadSeizures' },
          },
          items: [
            {
              component: 'PageTitle',
              props: {
                title: 'Daily seizure tracker',
              },
            },
            {
              component: 'DatePicker',
            },
            {
              component: 'DataTrialPillboxV1',
              name: 'hadSeizures',
              props: {
                question: 'Did you have seizure(s) on this day?',
                variants: ['Yes', 'No'],
              },
            },
            {
              component: 'DataTrialTextInputV1',
              name: 'seizureComments',
              props: {
                displayWhenCondition: {
                  "hadSeizures": "No"
                },
                question: 'Any comments on your seizures?',
                placeholder: 'leave your comments here',
              },
            },
          ],
        },
      },
      {
        component: 'DataTrialSimpleQuestionnaireV1',
        skipWhen: { '===': ['No', { var: 'hadSeizures' }] },
        props: {
          footerType: "CircleButton",
          items: [
            {
              component: 'PageTitle',
              props: {
                title: 'How many times did you have these seizures this day?',
              },
            },
          ],
        },
        _noticeMeSenpai: 'addSeizureCount', // this section gets modified in the spec.js file (see getModifiedViewSchema function)
      },
      {
        component: 'DataTrialSimpleQuestionnaireV1',
        skipWhen: { '===': ['No', { var: 'hadSeizures' }] },
        props: {
          requiredFields: {
            'and': [
              { 'someChecked': { var: 'seizureStrength' } },
              { 'someChecked': { var: 'seizureDuration' } },
            ],
          },
          footerType: "CircleButton",
          items: [
            {
              component: 'PageTitle',
              props: {
                title: 'What was the overall strength and duration of your seizure(s)?',
              },
            },
            {
              component: 'DataTrialChecklistGroupV2',
              name: 'seizureStrength',
              props: {
                radioMode: true,
                question: 'Overall strength of seizure(s) on this day',
                optionList: seizureStrength,
              },
            },
            {
              component: 'DataTrialChecklistGroupV2',
              name: 'seizureDuration',
              props: {
                radioMode: true,
                question: 'Overall duration of seizure(s) on this day',
                optionList: seizureDuration,
              },
            },
            {
              component: 'DataTrialTextInputV1',
              name: 'seizureComments',
              props: {
                question: 'Any comments on your seizures?',
                placeholder: 'Write your comments here',
              },
            },
          ],
        },
      },
      {
        component: 'DataTrialSimpleQuestionnaireV1',
        props: {
          footerType: "CircleButton",
          requiredFields: {
            '!!': { var: 'sideEffectStrength' },
          },
          items: [
            {
              component: 'PageTitle',
              props: {
                title: 'What was the overall severity of your side effect(s) from your medications this day?',
              },
            },
            {
              component: 'DataTrialChecklistGroupV2',
              name: 'sideEffectStrength',
              props: {
                radioMode: true,
                optionList: sideEffectStrength,
              },
            },
            {
              component: 'DataTrialTextInputV1',
              name: 'sideEffectComments',
              props: {
                question: 'Any comments on the side effects?',
                placeholder: 'Write your comments here',
              },
            },
          ],
        },
      },
    ],
  },
};

const trialSpecific = {
  treatmentProfile: {
    title: 'Profile',
    useV2Layout: true,
    viewSchema: [
      {
        component: 'DataTrialElementMgrV3',
        title: 'Medications',
        name: 'user_medications',
        props: {
          archiveMode: false,
          elementTitle: 'Medications',
          dataTrialId: 'ai.doc.data.trial.epilepsy',
          requiredFields: {
            and: [
              { '!!': { var: 'elementName' } },
              { '!!': { var: 'elementDescription' } },
            ],
          },
          serviceSessionPath: 'profile/medicationProfile',
          elementForm: [],
        },
      },
      {
        component: 'SeizureElementMgr',
        title: 'Seizures',
        name: 'user_seizures',
        props: {
          archiveMode: false,
          elementTitle: 'Seizure',
          dataTrialId: 'ai.doc.data.trial.epilepsy',
          requiredFields: {
            and: [
              { '!!': { var: 'elementName' } },
              { '!!': { var: 'elementDescription' } },
            ],
          },
          serviceSessionPath: 'profile/seizureProfile',
          elementForm: [
            {
              component: 'DataTrialFieldLabelV1',
              props: {
                question: 'What name would you give this seizure?',
              },
            },
            {
              component: 'DataTrialTextInputV1',
              name: 'elementName',
              props: {
                placeholder: 'Please describe',
              },
            },
            {
              component: 'DataTrialFieldLabelV1',
              props: {
                question:
                  'Describe what happens during the seizure, from start to finish.',
              },
            },
            {
              component: 'DataTrialTextInputV1',
              name: 'elementDescription',
              props: {
                placeholder: 'Please describe',
              },
            },
            {
              component: 'DataTrialFieldLabelV1',
              props: {
                question:
                  'Do you know the medical name for this type of seizure? (Optional)',
              },
            },
            {
              component: 'DataTrialTextInputV1',
              name: 'seizureMedicalName',
              props: {
                placeholder: 'Please share if you know',
              },
            },
          ],
        },
      },
    ],
  },
  optionalContent: {
    title: 'Optional',
    layoutProps: {
      noHorizontalSpacing: true,
      narrowHorizontalSpacing: false,
    },
    viewSchema: [
      {
        component: 'DataTrialOptionalContentV1',
        props: {
          label: 'Optional',
          requiredOmics: [
            {
              name: 'proteome',
              condition: { '!!': {var: '0'}},
            },
            {
              name: 'clinome',
              condition: { '!!': {var: 'immunizations'}},
            },
            {
              name: 'pharmacome',
              condition: { '!!': {var: 'medications'}},
            },
          ],
          surveys: [
            {
              title: 'Seizure Detail',
              pointReward: 500,
              sessionPath:
                "dataTrials.sessionState['ai.doc.data.trial.epilepsy'].state.weeklyTrackFlow/tracker.seizureDetailSurvey",
              redirectURL:
                '/main/nav/dataTrials/ai.doc.data.trial.epilepsy/track/seizureDetailSurvey',
            },
            {
              title: 'Personal Impact of Epilepsy Scale',
              footer: '© 2014 Fisher, Nune, Cramer',
              pointReward: 500,
              sessionPath:
                "dataTrials.sessionState['ai.doc.data.trial.epilepsy'].state.weeklyTrackFlow/tracker.seizureImpactSurvey",
              redirectURL:
                '/main/nav/dataTrials/ai.doc.data.trial.epilepsy/track/seizureImpactSurvey',
            },
          ],
        },
      },
    ],
  },
  newsfeed: {
    useFullPage: true,
    viewSchema: {
      component: 'DataTrialNewsfeedPage',
      props: {
        serviceId: 'ai.doc.data.trial.epilepsy',
        newsfeedSourceIconName: 'EPILEPSY_FOUNDATION_ICON',
        newsfeedSourceInformation: {
          title: 'Epilepsy Foundation',
          text: 'With a network of nearly 50 partners throughout the United States, the Epilepsy Foundation connects people to treatment, support and resources; leads advocacy efforts; funds innovative research and the training of specialists; and educates the public about epilepsy and seizure first aid. For more than five decades, the Epilepsy Foundation has shone a light on epilepsy to promote awareness and understanding, and to advocate for laws that matter to people with epilepsy, while also funding $65 million for epilepsy research and supporting 3,076 epilepsy investigators and specialists in their early careers. Over the past 17 years, in partnership with the CDC, the Epilepsy Foundation has helped to improve access to care for people with epilepsy, expanded its digital reach and online resources in homes across the country, and trained more than 500,000 school and community personnel in how to recognize seizures and administer Seizure First Aid. The Foundation has also assisted more than 108,000 people through its 24/7 Helpline in the past five years, and continues to focus on innovation, new therapies, community services, advocacy and education as key priorities. To learn more visit epilepsy.com or call 1.800.332.1000. Follow us on Facebook and Twitter.',
          iconName: 'EPILEPSY_FOUNDATION_ICON_LARGE',
        }
      }
    }
  },
};

export default () =>
  cloneDeep({
    details,
    join,
    insights,
    tracking,
    trialSpecific,
  });
