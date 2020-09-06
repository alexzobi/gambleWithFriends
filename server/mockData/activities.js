const Color = require('./Color');

const mgSignup = JSON.stringify({
  story: {
    signup: [
      {
        component: 'Signup'
      },
    ],
  },
});

const mgTrackConsent = JSON.stringify({
  story: {
    signup: [
      {
        component: 'TrackConsent'
      },
    ],
  },
});
const mgExplore = JSON.stringify({
  story: {
    explore: [
      {
        component: 'TrackExplore',
        props: {
          joinPath: 'mgSignup',
          exploreSchema: [
            {
              component: 'RTExploreImage',
              props: { source: 'MG_BACKDROP' },
            },
            {
              component: 'PageBreak',
              props: {
                fullWidth: true,
                borderColor: Color.RESEARCH.default,
                borderSize: 2,
                style: { marginBottom: 18 },
              },
            },
            {
              component: 'RTTitle',
              props: {
                mh: 16,
                children: 'Contribute to an A.I. model to manage Myasthenia Gravis',
                mb: 25,
              },
            },
            {
              component: 'JoinButton',
              props: {
                mh: 16,
                label: 'Join Trial',
                size: 'small',
                mb: 14,
                ph: 15,
                alignSelf: 'flex-start',
              },
            },
            {
              component: 'RTExploreTrackStats',
              props: {
                mh: 16,
                mb: 25,
                title: 'At a glance',
                items: [
                  {
                    iconProps: {
                      name: 'LIKE',
                    },
                    label: 'Value',
                    text: '25,000 points\nPersonalized report',
                  },
                  {
                    iconProps: {
                      name: 'PRIVACY',
                    },
                    label: 'Privacy',
                    text: 'cover up',
                  },
                  {
                    iconProps: {
                      name: 'DURATION',
                    },
                    label: 'Duration',
                    text: '3 months',
                  },
                  {
                    iconProps: {
                      name: 'COMMITMENT',
                    },
                    label: 'Commitment',
                    text: '~5-10 mins\nevery few days',
                  },
                ],
              },
            },

            {
              component: 'Text',
              props: {
                mh: 16,
                children: 'During this study, you will:',
                mb: 16,
                type: 'headline1',
              },
            },
            {
              component: 'List',
              props: {
                mh: 16,
                mb: 16,
                format: 'embed',
                component: 'OrderedListItem',
                transparent: true,
                withBreak: false,
                items: [
                  {
                    component: 'OrderedImportList',
                    indicatorLabel: 1,
                    text: 'Connect relevant data (optional)',
                    importList: [
                      {
                        iconName: 'ENVIRONMENT',
                        label: 'Location',
                      },
                      {
                        iconName: 'PHYSIOME',
                        label: 'Activities',
                      },
                      {
                        iconName: 'CLINOME',
                        label: 'Medical',
                      },
                      {
                        iconName: 'MEDICATION',
                        label: 'Pharmacy',
                      },
                    ],
                  },
                  {
                    indicatorLabel: 2,
                    text: 'Answer survey questions.',
                    subtext: '1x daily',
                  },
                  {
                    indicatorLabel: 3,
                    text: 'Record video and audio exercises.',
                    subtext: '2x weekly',
                  },
                  {
                    indicatorLabel: 4,
                    text: 'Record video and audio journals.',
                    subtext: '1x weekly',
                  },
                ],
              },
            },
            {
              component: 'Text',
              props: {
                children: 'Why do we need you for this study?',
                type: 'headline1',
                mb: 10,
                mh: 16,
              },
            },
            {
              component: 'Text',
              props: {
                mh: 16,
                children: [
                  'In order to explore the feasibility of developing an A.I. model to ',
                  'detect and/or predict symptom flare-ups generally for any Myasthenia Gravis sufferer.',
                ].join(''),
                mb: 25,
              },
            },
            {
              component: 'RTExploreMenu',
              name: 'RTExploreMenu',
              props: {
                mh: 16,
                mb: 12,
                trackItems: [
                  {
                    label: 'About the study',
                    name: 'aboutTrackSchema',
                    leftIcon: {
                      name: 'RESEARCH',
                      color: Color.PRIMARY.default,
                      circled: true,
                      backgroundColor: Color.NEUTRAL.default,
                    },
                  },
                  {
                    leftIcon: {
                      name: 'COMMITMENT',
                      color: Color.PRIMARY.default,
                      circled: true,
                      backgroundColor: Color.NEUTRAL.default,
                    },
                    label: 'How to Participate',
                    name: 'howToParticipateSchema',
                  },
                  {
                    leftIcon: {
                      name: 'PROFILE',
                      color: Color.PRIMARY.default,
                      circled: true,
                      backgroundColor: Color.NEUTRAL.default,
                    },
                    label: 'Eligibility',
                    name: 'eligibilitySchema',
                  },
                  {
                    leftIcon: {
                      name: 'GIFT',
                      color: Color.PRIMARY.default,
                      circled: true,
                      backgroundColor: Color.NEUTRAL.default,
                    },
                    label: 'What you\'ll receive',
                    name: 'whatYouReceiveSchema',
                  },
                ],
              },
            },
            {
              component: 'RTTitledCard',
              props: {
                mh: 16,
                title: 'Built around privacy',
                mb: 50,
                markdown: 'Our A.I. technologies serve our core values of privacy, ownership... [Our Privacy Policy](https://doc.ai/privacy)',
                iconProps: {
                  name: 'SECURITY',
                },
              },
            },
            {
              component: 'JoinButton',
              props: {
                mh: 16,
                label: 'Join trial',
                alignSelf: 'center',
                ph: 20,
                pv: 10,
                mb: 40,
              },
            },
          ],
          whatYouReceiveSchema: [
            {
              component: 'Text',
              props: {
                type: 'headline1',
                mb: 57,
                textAlign: 'center',
                children: 'What you\'ll receive',
              },
            },
            {
              component: 'Text',
              props: {
                mh: 16,
                mb: 20,
                children: 'You can earn up to 25,000 points for participating in this digital health trial. Points are redeemable for up to $250 in Amazon.com Gift Cards at the doc.ai Marketplace.\n\nAll points will be awarded after you\'ve:',
              },
            },
            {
              component: 'List',
              props: {
                mh: 30,
                format: 'embeded',
                withBreak: false,
                component: 'IconTextItem',
                items: [
                  {
                    iconProps: {
                      name: 'MESSAGE_BOX',
                      color: Color.PRIMARY.default,
                    },
                    text: 'Satisfied the weekly reporting requirements without missing more than five check-ins per month (30 days).',
                  },
                  {
                    iconProps: {
                      name: 'EDIT',
                      color: Color.PRIMARY.default,
                    },
                    text: 'Completed the final survey',
                  },
                ],
              },
            },
            {
              component: 'Markdown',
              props: {
                mh: 16,
                children: 'Note that terms and conditions apply. Read our [Terms of service](https://doc.ai/tos) and [Privacy Policy](https://doc.ai/privacy)',
              },
            },
          ],
          howToParticipateSchema: [
            {
              component: 'Text',
              props: {
                type: 'headline1',
                mb: 57,
                textAlign: 'center',
                children: 'How to participate',
              },
            },
            {
              component: 'RTProcessSummary',
              props: {
                mh: 16,
                steps: [
                  {
                    title: 'Complete web pre-screener to see if you are eligible.',
                  },
                  {
                    title: 'Sign the consent',
                    description: 'Review the details of the study and acknowledge that you agree to participate.',
                  },
                  {
                    title: 'Register with the doc.ai study app',
                    description: 'You will participate in the study solely through the use of this smartphone app.',
                  },
                  {
                    title: 'Connect your data sources',
                    description: [
                      'Optionally sync your activity, sleep, location, & health records to be ',
                      'used to look for patterns associated with symptom flare-ups.',
                    ].join(''),
                  },
                  {
                    title: 'Baseline your symptoms & review regular check-in procedures',
                    description: [
                      'The final step is receiving your 25,000 reward points and a detailed ',
                      'report of your study experience and the symptoms you experienced along ',
                      'with any other data you collected.',
                    ].join(''),
                  },
                  {
                    title: 'Check in regularly per your preferred schedule',
                    description: [
                      'For the 3-6 months you participate in the study, perform your regular ',
                      'check-ins (includes single question check-ins, light surveys, and video ',
                      'exercises & diaries). Check-ins will change depending on whether you’re ',
                      'experiencing symptom flare-ups or not.',
                    ].join(''),
                  },
                  {
                    title: 'Complete the final survey',
                    description: [
                      'Answer questions about your study experience and your health as it ',
                      'relates to your MG symptoms.',
                    ].join(''),
                  },
                  {
                    title: 'Receive your rewards and final report',
                    description: [
                      'Indicate the ranges of symptoms you personally experience and perform ',
                      'initial check-ins to familiarize yourself with the protocol.',
                    ].join(''),
                  },
                ],
              },
            },
          ],
          aboutTrackSchema: [
            {
              component: 'Text',
              props: {
                type: 'headline1',
                mb: 57,
                textAlign: 'center',
                children: 'About the study',
              },
            },
            {
              component: 'RTTabView',
              props: {
                paneSchema: [
                  {
                    label: 'About',
                    schema: [
                      {
                        component: 'Markdown',
                        props: {
                          mh: 25,
                          children: [
                            'Can we develop an A.I. model whereby people living with Myasthenia ',
                            'Gravis may contribute relevant information through their smartphone ',
                            'to detect and/or predict symptom flare-ups and patterns?',
                          ].join(''),
                        },
                      },
                    ],
                  },
                  {
                    label: 'Sponsor',
                    schema: [
                      {
                        component: 'IconText',
                        props: {
                          alignSelf: 'center',
                          iconProps: {
                            name: 'DOC_LOGO',
                            height: 62,
                          },
                          text: 'doc.ai',
                          isTitle: true,
                          mb: 36,
                        },
                      },
                      {
                        component: 'RTDescriptiveItem',
                        props: {
                          mb: 24,
                          layout: 'vertical',
                          title: 'Sponsored by',
                          content: 'doc.ai',
                        },
                      },
                      {
                        component: 'RTDescriptiveItem',
                        props: {
                          mb: 24,
                          layout: 'vertical',
                          title: 'Address',
                          content: '213 Quarry Road\nPalo Alto, CA 94304',
                        },
                      },
                      {
                        component: 'RTDescriptiveItem',
                        props: {
                          layout: 'vertical',
                          title: 'Protocol',
                          content: 'UCB-000-0000',
                        },
                      },
                    ],
                  },
                  {
                    label: 'Contact',
                    schema: [
                      {
                        component: 'Markdown',
                        props: {
                          mh: 25,
                          mb: 56,
                          children: [
                            'If you have questions at any time before, during, or after the ',
                            'study, you can contact us with the information below.',
                          ].join(''),
                        },
                      },
                      {
                        component: 'RTDescriptiveItem',
                        props: {
                          mb: 24,
                          leftImageProps: { source: 'SANDRA' },
                          layout: 'vertical',
                          title: 'Principle Investigator',
                          content: 'Sandra Steyaert, PhD',
                        },
                      },
                      {
                        component: 'RTDescriptiveItem',
                        props: {
                          mb: 24,
                          layout: 'vertical',
                          title: 'Medical Expert',
                          content: 'Yuen So, MD, PhD',
                        },
                      },
                      {
                        component: 'RTDescriptiveItem',
                        props: {
                          mb: 24,
                          layout: 'vertical',
                          title: 'Speech and Language Pathologist',
                          content: 'Sarah Stranberg',
                        },
                      },
                      {
                        component: 'RTDescriptiveItem',
                        props: {
                          mb: 24,
                          layout: 'vertical',
                          title: 'Contact Email',
                          content: 'datatrial@doc.ai',
                        },
                      },
                      {
                        component: 'RTDescriptiveItem',
                        props: {
                          layout: 'vertical',
                          title: 'Contact phone',
                          content: '949-750-5049',
                          mb: 30,
                        },
                      },
                    ],
                  },
                ],
              },
            },
          ],
          eligibilitySchema: [
            {
              component: 'Text',
              props: {
                type: 'headline1',
                mb: 57,
                textAlign: 'center',
                children: 'Eligibility',
              },
            },
            {
              component: 'RTTabView',
              props: {
                paneSchema: [
                  {
                    label: 'Inclusion',
                    schema: [
                      {
                        component: 'Text',
                        props: {
                          mb: 30,
                          ml: 16,
                          type: 'headline1',
                          children: 'You\'re eligibile to participate if:',
                        },
                      },
                      {
                        component: 'List',
                        props: {
                          mh: 30,
                          format: 'embeded',
                          withBreak: false,
                          component: 'IconTextItem',
                          items: [
                            {
                              iconProps: {
                                name: 'CHECK',
                                color: Color.PRIMARY.default,
                              },
                              text: 'You\'re at least 18 years old',
                            },
                            {
                              iconProps: {
                                name: 'CHECK',
                                color: Color.PRIMARY.default,
                              },
                              text: 'You\'re able to read, understand and write english',
                            },
                            {
                              iconProps: {
                                name: 'CHECK',
                                color: Color.PRIMARY.default,
                              },
                              text: 'You\'re currently living in the United States and will continue to live here for the duration of the study',
                            },
                            {
                              iconProps: {
                                name: 'CHECK',
                                color: Color.PRIMARY.default,
                              },
                              text: 'You have a smartphone to support the doc.ai app (iOS or Android)',
                            },
                            {
                              iconProps: {
                                name: 'CHECK',
                                color: Color.PRIMARY.default,
                              },
                              text: 'You have a documented diagnosis of generalized Myasthenia Gravis',
                            },
                            {
                              iconProps: {
                                name: 'CHECK',
                                color: Color.PRIMARY.default,
                              },
                              text: 'You have ocular (eye drooping) and/or bulbar (speech/swallowing) symptoms',
                            },
                            {
                              iconProps: {
                                name: 'CHECK',
                                color: Color.PRIMARY.default,
                              },
                              text: 'You are experiencing more than just ocular symptoms or it\'s been at least two years since your diagnosis',
                            },
                          ],
                        },
                      },
                    ],
                  },
                  {
                    label: 'Exclusion',
                    schema: [
                      {
                        component: 'Text',
                        props: {
                          mb: 30,
                          ml: 16,
                          type: 'headline1',
                          children: 'You\'ll need an exclusion waiver to participate if:',
                        },
                      },
                      {
                        component: 'List',
                        props: {
                          mh: 30,
                          format: 'embeded',
                          withBreak: false,
                          component: 'IconTextItem',
                          items: [
                            {
                              iconProps: {
                                name: 'EXIT',
                                color: Color.PRIMARY.default,
                              },
                              text: 'You\'re unable to use a smartphone to enter your symptom information',
                            },
                          ],
                        },
                      },
                      {
                        component: 'Text',
                        props: {
                          ml: 70,
                          mr: 30,
                          children: 'In this case you can request an exclusion waiver from the Principal Investigator\'s office.\n\nNote that the waivers are granted on a case-by-case basis',
                        },
                      },
                    ],
                  },
                ],
              },
            },
          ],
        }
      },
    ],
  },
});

module.exports = {
  mgSignup,
  mgTrackConsent,
  mgExplore,
};
