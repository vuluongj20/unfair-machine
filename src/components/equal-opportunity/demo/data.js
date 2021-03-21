export const scrollContent = [
	{
	  id: 'topic',
	  text: 'Wichita State University assigns each of its potential college applicants a score for how likely they are to enroll if given admission, based on attributes like sex, race, test scores, high school grades, and more. This score informs decisions on targeted advertising, admissions, and financial aid.',
	  width: 6,
	  mobileWidth: 10,
	  align: 'center'
	},
	{
	  id: 'range',
	  text: 'The score ranges from 0 to 100. The higher the score, the more likely it is that the student will enroll. Here is what the score distribution of 200 students would look like.',
	  width: 4,
	  mobileWidth: 10,
	  align: 'left'
	},
	{
	  id: 'high-scores',
	  text: 'The prediction is not perfect. Some students with high scores may still end up dropping out of college.',
	  width: 4,
	  mobileWidth: 10,
	  align: 'left'
	},
	{
	  id: 'low-scores',
	  text: 'And some students with low scores may still finish their degree if given admission.',
	  width: 4,
	  mobileWidth: 10,
	  align: 'left'
	},
	{
	  id: 'threshold',
	  text: 'To identify applicants who are likely to enroll, administrators use a threshold. Students who score above this threshold are classified as \'likely to enroll\'.',
	  width: 4,
	  mobileWidth: 10,
	  align: 'left'
	},
  {
    id: 'true-positive',
    text: 'An important thing to consider when setting the threshold is the true positive rate - the number of students who are classified as \'likely to enroll\' out of all those who would actually enroll.',
    width: 4,
    mobileWidth: 10,
    align: 'left'
  },
  {
    id: 'lower-threshold',
    text: 'Lowering the threshold would result in a higher true positive rate, since we\'re marking more students as \'likely to enroll\'.',
    width: 4,
    mobileWidth: 10,
    align: 'left'
  },
  {
    id: 'tradeoff',
    text: 'However, doing so would also increase the false positive rate, meaning more students who would not actually enroll will be falsely classified as \'likely to enroll\'. This is costly to the college and should be avoided.',
    width: 4,
    mobileWidth: 10,
    align: 'left'
  },
  {
    id: 'disparity',
    text: 'Another major point of concern is the discrepancy between different demographic groups. In general, the software assigns more favorable scores to Caucasian students than African-American students.',
    width: 4,
    mobileWidth: 10,
    align: 'left'
  },
  {
    id: 'justification',
    text: 'Such disparate predictions are potentially justified, as African-American students are historically 60% more likely to drop out of college than Caucasian students.',
    width: 4,
    mobileWidth: 10,
    align: 'left'
  },
  {
    id: 'prompt',
    text: null,
    width: 4,
    mobileWidth: 10,
    align: 'left'
  }
]

export const dataPoints = [
    {
        "x": 0.29810207384294407,
        "y": 0.0583355926546647,
        "positive": true,
        "group": "caucasian"
    },
    {
        "x": 0.46953613500327407,
        "y": 0.353287839127026,
        "positive": true,
        "group": "caucasian"
    },
    {
        "x": 0.4801716098620237,
        "y": 0.43752240630443184,
        "positive": true,
        "group": "caucasian"
    },
    {
        "x": 0.5114820470008827,
        "y": 0.5013903122836099,
        "positive": true,
        "group": "caucasian"
    },
    {
        "x": 0.5194212514437642,
        "y": 0.17384781424329798,
        "positive": true,
        "group": "caucasian"
    },
    {
        "x": 0.5278915436494627,
        "y": 0.6541572711535208,
        "positive": true,
        "group": "caucasian"
    },
    {
        "x": 0.5521362558397742,
        "y": 0.03577361999660167,
        "positive": true,
        "group": "caucasian"
    },
    {
        "x": 0.5562413372887016,
        "y": 0.5198894717056803,
        "positive": true,
        "group": "caucasian"
    },
    {
        "x": 0.5819314420344581,
        "y": 0.16515555377379054,
        "positive": true,
        "group": "caucasian"
    },
    {
        "x": 0.5914136557128875,
        "y": 0.35957441787237165,
        "positive": true,
        "group": "caucasian"
    },
    {
        "x": 0.6049955076121845,
        "y": 0.6212670564147595,
        "positive": true,
        "group": "caucasian"
    },
    {
        "x": 0.6059867337165354,
        "y": 0.25695849517815517,
        "positive": true,
        "group": "caucasian"
    },
    {
        "x": 0.6113037429810197,
        "y": 0.3560824682057877,
        "positive": true,
        "group": "caucasian"
    },
    {
        "x": 0.6114040941452619,
        "y": 0.046895798709176484,
        "positive": true,
        "group": "caucasian"
    },
    {
        "x": 0.6148418817187324,
        "y": 0.2667705329979335,
        "positive": true,
        "group": "caucasian"
    },
    {
        "x": 0.6214630945402673,
        "y": 0.07324024116402295,
        "positive": true,
        "group": "caucasian"
    },
    {
        "x": 0.6335432106263725,
        "y": 0.409675215272125,
        "positive": true,
        "group": "caucasian"
    },
    {
        "x": 0.6436150369415685,
        "y": 0.5795140168034556,
        "positive": true,
        "group": "caucasian"
    },
    {
        "x": 0.643846121819639,
        "y": 0.04449638310572257,
        "positive": true,
        "group": "caucasian"
    },
    {
        "x": 0.6438731767966286,
        "y": 0.9219819508907885,
        "positive": true,
        "group": "caucasian"
    },
    {
        "x": 0.6498651071222834,
        "y": 0.457586359353761,
        "positive": true,
        "group": "caucasian"
    },
    {
        "x": 0.6575270435107137,
        "y": 0.9186362658563738,
        "positive": true,
        "group": "caucasian"
    },
    {
        "x": 0.6620821392651515,
        "y": 0.5448294776390841,
        "positive": true,
        "group": "caucasian"
    },
    {
        "x": 0.6678328833177201,
        "y": 0.6145587113621376,
        "positive": true,
        "group": "caucasian"
    },
    {
        "x": 0.6688286618683867,
        "y": 0.41397613058053606,
        "positive": true,
        "group": "caucasian"
    },
    {
        "x": 0.6692225533518399,
        "y": 0.15155429175563828,
        "positive": true,
        "group": "caucasian"
    },
    {
        "x": 0.6769384916402519,
        "y": 0.43887880400198065,
        "positive": true,
        "group": "caucasian"
    },
    {
        "x": 0.6785931329307959,
        "y": 0.2729543834103556,
        "positive": true,
        "group": "caucasian"
    },
    {
        "x": 0.6803658701149795,
        "y": 0.2388452764247062,
        "positive": true,
        "group": "caucasian"
    },
    {
        "x": 0.6985678023819835,
        "y": 0.31949228792645723,
        "positive": true,
        "group": "caucasian"
    },
    {
        "x": 0.7155906668316221,
        "y": 0.6907780369986725,
        "positive": true,
        "group": "caucasian"
    },
    {
        "x": 0.716300083990153,
        "y": 0.4806476874574326,
        "positive": true,
        "group": "caucasian"
    },
    {
        "x": 0.7239893902893768,
        "y": 0.6458369140048472,
        "positive": true,
        "group": "caucasian"
    },
    {
        "x": 0.724947062140499,
        "y": 0.5568405548462982,
        "positive": true,
        "group": "caucasian"
    },
    {
        "x": 0.725248935955118,
        "y": 0.41840492751156044,
        "positive": true,
        "group": "caucasian"
    },
    {
        "x": 0.7273968660789061,
        "y": 0.7763607055259509,
        "positive": true,
        "group": "caucasian"
    },
    {
        "x": 0.7302547808778961,
        "y": 0.7117385081089906,
        "positive": true,
        "group": "caucasian"
    },
    {
        "x": 0.7319043139935417,
        "y": 0.7098711437853416,
        "positive": true,
        "group": "caucasian"
    },
    {
        "x": 0.7436608955620152,
        "y": 0.310843299581514,
        "positive": true,
        "group": "caucasian"
    },
    {
        "x": 0.7458192902308203,
        "y": 0.042327231082473604,
        "positive": true,
        "group": "caucasian"
    },
    {
        "x": 0.753419334142807,
        "y": 0.43368545204682296,
        "positive": true,
        "group": "caucasian"
    },
    {
        "x": 0.7578709508681383,
        "y": 0.5023489990312269,
        "positive": true,
        "group": "caucasian"
    },
    {
        "x": 0.770941251049996,
        "y": 0.8925297391361526,
        "positive": true,
        "group": "caucasian"
    },
    {
        "x": 0.7723132888088569,
        "y": 0.43023113301707094,
        "positive": true,
        "group": "caucasian"
    },
    {
        "x": 0.7726674358831247,
        "y": 0.12904093919267767,
        "positive": true,
        "group": "caucasian"
    },
    {
        "x": 0.7736423166440622,
        "y": 0.39155866719325205,
        "positive": true,
        "group": "caucasian"
    },
    {
        "x": 0.7736455637647617,
        "y": 0.09689670695889041,
        "positive": true,
        "group": "caucasian"
    },
    {
        "x": 0.7757519565482207,
        "y": 0.7992889591969796,
        "positive": true,
        "group": "caucasian"
    },
    {
        "x": 0.7898648607602197,
        "y": 0.139086216363981,
        "positive": true,
        "group": "caucasian"
    },
    {
        "x": 0.7992364618011831,
        "y": 0.8568189265037034,
        "positive": true,
        "group": "caucasian"
    },
    {
        "x": 0.7995486960970908,
        "y": 0.5241240868797457,
        "positive": true,
        "group": "caucasian"
    },
    {
        "x": 0.8030035171273422,
        "y": 0.8798871750338639,
        "positive": true,
        "group": "caucasian"
    },
    {
        "x": 0.8109164080042326,
        "y": 0.09523410466638227,
        "positive": true,
        "group": "caucasian"
    },
    {
        "x": 0.8115517904933727,
        "y": 0.7403952545550685,
        "positive": true,
        "group": "caucasian"
    },
    {
        "x": 0.8117645447256598,
        "y": 0.8825110873728561,
        "positive": true,
        "group": "caucasian"
    },
    {
        "x": 0.8148072560488673,
        "y": 0.737365543093063,
        "positive": true,
        "group": "caucasian"
    },
    {
        "x": 0.8154524095908731,
        "y": 0.6772645535850457,
        "positive": true,
        "group": "caucasian"
    },
    {
        "x": 0.8162296487932272,
        "y": 0.6338868614960309,
        "positive": true,
        "group": "caucasian"
    },
    {
        "x": 0.8174251263020749,
        "y": 0.9275938180393952,
        "positive": true,
        "group": "caucasian"
    },
    {
        "x": 0.8361748732620204,
        "y": 0.4299154466728978,
        "positive": true,
        "group": "caucasian"
    },
    {
        "x": 0.8374324919199709,
        "y": 0.7398275693154623,
        "positive": true,
        "group": "caucasian"
    },
    {
        "x": 0.8447956092405984,
        "y": 0.5032425556795113,
        "positive": true,
        "group": "caucasian"
    },
    {
        "x": 0.8508955366321544,
        "y": 0.6297034673564454,
        "positive": true,
        "group": "caucasian"
    },
    {
        "x": 0.8616662305362124,
        "y": 0.5841126161848307,
        "positive": true,
        "group": "caucasian"
    },
    {
        "x": 0.8631597468876178,
        "y": 0.005682008365512026,
        "positive": true,
        "group": "caucasian"
    },
    {
        "x": 0.8729266886967935,
        "y": 0.44486700816468705,
        "positive": true,
        "group": "caucasian"
    },
    {
        "x": 0.8809720976325421,
        "y": 0.4774150755983335,
        "positive": true,
        "group": "caucasian"
    },
    {
        "x": 0.8811544343772035,
        "y": 0.5714890500151377,
        "positive": true,
        "group": "caucasian"
    },
    {
        "x": 0.8927103296092578,
        "y": 0.5667143075230308,
        "positive": true,
        "group": "caucasian"
    },
    {
        "x": 0.8933814533113578,
        "y": 0.3929021001395998,
        "positive": true,
        "group": "caucasian"
    },
    {
        "x": 0.8975288309204363,
        "y": 0.7250837287527427,
        "positive": true,
        "group": "caucasian"
    },
    {
        "x": 0.8977664294624468,
        "y": 0.6914782619597957,
        "positive": true,
        "group": "caucasian"
    },
    {
        "x": 0.9053624876823025,
        "y": 0.5359779557204607,
        "positive": true,
        "group": "caucasian"
    },
    {
        "x": 0.9155794889549771,
        "y": 0.061580939736580076,
        "positive": true,
        "group": "caucasian"
    },
    {
        "x": 0.9241077250325729,
        "y": 0.384630446785162,
        "positive": true,
        "group": "caucasian"
    },
    {
        "x": 0.9346694131251969,
        "y": 0.4802068277319993,
        "positive": true,
        "group": "caucasian"
    },
    {
        "x": 0.9398322913494093,
        "y": 0.47273493464454086,
        "positive": true,
        "group": "caucasian"
    },
    {
        "x": 0.9587532107911845,
        "y": 0.07926538165840591,
        "positive": true,
        "group": "caucasian"
    },
    {
        "x": 0.9717801935382591,
        "y": 0.22303617369458006,
        "positive": true,
        "group": "caucasian"
    },
    {
        "x": 0.2521422035997618,
        "y": 0.06881575087643377,
        "positive": false,
        "group": "caucasian"
    },
    {
        "x": 0.34519406225053295,
        "y": 0.00007349819558433168,
        "positive": false,
        "group": "caucasian"
    },
    {
        "x": 0.35978384894910387,
        "y": 0.25019602790779194,
        "positive": false,
        "group": "caucasian"
    },
    {
        "x": 0.3601090064484025,
        "y": 0.12341269248490838,
        "positive": false,
        "group": "caucasian"
    },
    {
        "x": 0.36335872989718276,
        "y": 0.1831805491029861,
        "positive": false,
        "group": "caucasian"
    },
    {
        "x": 0.40748589544023694,
        "y": 0.17316618559139285,
        "positive": false,
        "group": "caucasian"
    },
    {
        "x": 0.4194296155685153,
        "y": 0.07468060595949666,
        "positive": false,
        "group": "caucasian"
    },
    {
        "x": 0.42322381517484353,
        "y": 0.36226626691153063,
        "positive": false,
        "group": "caucasian"
    },
    {
        "x": 0.4526993535278774,
        "y": 0.13649643613600904,
        "positive": false,
        "group": "caucasian"
    },
    {
        "x": 0.4671781713640124,
        "y": 0.02018807600499417,
        "positive": false,
        "group": "caucasian"
    },
    {
        "x": 0.48432442533300346,
        "y": 0.5765400161685021,
        "positive": false,
        "group": "caucasian"
    },
    {
        "x": 0.4993781712465133,
        "y": 0.25012848760382544,
        "positive": false,
        "group": "caucasian"
    },
    {
        "x": 0.5016671042650325,
        "y": 0.442539787195501,
        "positive": false,
        "group": "caucasian"
    },
    {
        "x": 0.5195959399955683,
        "y": 0.087560462857315,
        "positive": false,
        "group": "caucasian"
    },
    {
        "x": 0.5330385584603252,
        "y": 0.021267000298133,
        "positive": false,
        "group": "caucasian"
    },
    {
        "x": 0.5478312222394022,
        "y": 0.2083455675954613,
        "positive": false,
        "group": "caucasian"
    },
    {
        "x": 0.580544568335261,
        "y": 0.2167504334120398,
        "positive": false,
        "group": "caucasian"
    },
    {
        "x": 0.5895022873277345,
        "y": 0.626063243353872,
        "positive": false,
        "group": "caucasian"
    },
    {
        "x": 0.8085033655026566,
        "y": 0.7274077351107588,
        "positive": false,
        "group": "caucasian"
    },
    {
        "x": 0.8224753476336601,
        "y": 0.577091467912672,
        "positive": false,
        "group": "caucasian"
    },
    {
        "x": 0.8685456175686248,
        "y": 0.419059132913723,
        "positive": false,
        "group": "caucasian"
    },
    {
        "x": 0.28288343371987024,
        "y": 0.3540765360453131,
        "positive": true,
        "group": "african-american"
    },
    {
        "x": 0.3890980478040751,
        "y": 0.5842696793057172,
        "positive": true,
        "group": "african-american"
    },
    {
        "x": 0.4161499904920878,
        "y": 0.5185625241160032,
        "positive": true,
        "group": "african-american"
    },
    {
        "x": 0.4396576122784688,
        "y": 0.3108473379764236,
        "positive": true,
        "group": "african-american"
    },
    {
        "x": 0.44654391471140165,
        "y": 0.15178106243242984,
        "positive": true,
        "group": "african-american"
    },
    {
        "x": 0.46076989394751755,
        "y": 0.33003147452821535,
        "positive": true,
        "group": "african-american"
    },
    {
        "x": 0.4637549659650848,
        "y": 0.45915495173135557,
        "positive": true,
        "group": "african-american"
    },
    {
        "x": 0.4795568670596495,
        "y": 0.34882683442948914,
        "positive": true,
        "group": "african-american"
    },
    {
        "x": 0.4805212515012218,
        "y": 0.019683553395176467,
        "positive": true,
        "group": "african-american"
    },
    {
        "x": 0.5081544529212161,
        "y": 0.07798336267432027,
        "positive": true,
        "group": "african-american"
    },
    {
        "x": 0.5506141232483706,
        "y": 0.09961820890312745,
        "positive": true,
        "group": "african-american"
    },
    {
        "x": 0.5512349592159089,
        "y": 0.5862095293711906,
        "positive": true,
        "group": "african-american"
    },
    {
        "x": 0.5863145744082114,
        "y": 0.1882195920561296,
        "positive": true,
        "group": "african-american"
    },
    {
        "x": 0.5970095621384293,
        "y": 0.6357637687572548,
        "positive": true,
        "group": "african-american"
    },
    {
        "x": 0.6115345182242098,
        "y": 0.15418045402039393,
        "positive": true,
        "group": "african-american"
    },
    {
        "x": 0.6117046229734198,
        "y": 0.20083395046265684,
        "positive": true,
        "group": "african-american"
    },
    {
        "x": 0.6145755391522303,
        "y": 0.43416659319974227,
        "positive": true,
        "group": "african-american"
    },
    {
        "x": 0.6227422030392318,
        "y": 0.3612401437099886,
        "positive": true,
        "group": "african-american"
    },
    {
        "x": 0.6355704477075492,
        "y": 0.0024760082241643833,
        "positive": true,
        "group": "african-american"
    },
    {
        "x": 0.6365694405349573,
        "y": 0.21728880966659325,
        "positive": true,
        "group": "african-american"
    },
    {
        "x": 0.6391738855879436,
        "y": 0.35361717771510626,
        "positive": true,
        "group": "african-american"
    },
    {
        "x": 0.6397176035580476,
        "y": 0.060581895472149316,
        "positive": true,
        "group": "african-american"
    },
    {
        "x": 0.66006957603075,
        "y": 0.517970841416185,
        "positive": true,
        "group": "african-american"
    },
    {
        "x": 0.6635577034992695,
        "y": 0.17143813240982242,
        "positive": true,
        "group": "african-american"
    },
    {
        "x": 0.6827432351783926,
        "y": 0.3621736743767423,
        "positive": true,
        "group": "african-american"
    },
    {
        "x": 0.6875790797073462,
        "y": 0.3173160401690076,
        "positive": true,
        "group": "african-american"
    },
    {
        "x": 0.6896081530907023,
        "y": 0.07267516955629727,
        "positive": true,
        "group": "african-american"
    },
    {
        "x": 0.6945447577166082,
        "y": 0.282034398297659,
        "positive": true,
        "group": "african-american"
    },
    {
        "x": 0.7088697829470318,
        "y": 0.4958105942404518,
        "positive": true,
        "group": "african-american"
    },
    {
        "x": 0.7200554974102604,
        "y": 0.5000611314217258,
        "positive": true,
        "group": "african-american"
    },
    {
        "x": 0.7332462517983582,
        "y": 0.6094233749774225,
        "positive": true,
        "group": "african-american"
    },
    {
        "x": 0.7368509694540397,
        "y": 0.5723261823580064,
        "positive": true,
        "group": "african-american"
    },
    {
        "x": 0.7382769702586718,
        "y": 0.219615320058564,
        "positive": true,
        "group": "african-american"
    },
    {
        "x": 0.7385456911369677,
        "y": 0.47514992840304093,
        "positive": true,
        "group": "african-american"
    },
    {
        "x": 0.7566181800078993,
        "y": 0.07300510517010195,
        "positive": true,
        "group": "african-american"
    },
    {
        "x": 0.7568341288321769,
        "y": 0.4381941666349234,
        "positive": true,
        "group": "african-american"
    },
    {
        "x": 0.7651873702355421,
        "y": 0.6417289899678056,
        "positive": true,
        "group": "african-american"
    },
    {
        "x": 0.7723261376895985,
        "y": 0.6919732816922337,
        "positive": true,
        "group": "african-american"
    },
    {
        "x": 0.78018525333524,
        "y": 0.47573531242491884,
        "positive": true,
        "group": "african-american"
    },
    {
        "x": 0.7901882655428483,
        "y": 0.0906778604516405,
        "positive": true,
        "group": "african-american"
    },
    {
        "x": 0.7935664377696676,
        "y": 0.13797438646455373,
        "positive": true,
        "group": "african-american"
    },
    {
        "x": 0.7971564753844484,
        "y": 0.20421523588050894,
        "positive": true,
        "group": "african-american"
    },
    {
        "x": 0.8031628475740169,
        "y": 0.04092325493685234,
        "positive": true,
        "group": "african-american"
    },
    {
        "x": 0.8045671297803374,
        "y": 0.2128970812655575,
        "positive": true,
        "group": "african-american"
    },
    {
        "x": 0.8100136641483777,
        "y": 0.6708604463527399,
        "positive": true,
        "group": "african-american"
    },
    {
        "x": 0.8212382033755297,
        "y": 0.11874740950196272,
        "positive": true,
        "group": "african-american"
    },
    {
        "x": 0.823969882785633,
        "y": 0.6386408301076467,
        "positive": true,
        "group": "african-american"
    },
    {
        "x": 0.8437565880552607,
        "y": 0.6255492985176234,
        "positive": true,
        "group": "african-american"
    },
    {
        "x": 0.8479711680222688,
        "y": 0.005217637774287187,
        "positive": true,
        "group": "african-american"
    },
    {
        "x": 0.854959810516192,
        "y": 0.06870694871192629,
        "positive": true,
        "group": "african-american"
    },
    {
        "x": 0.8565486732132803,
        "y": 0.334717101183285,
        "positive": true,
        "group": "african-american"
    },
    {
        "x": 0.85657146424328,
        "y": 0.2644091126148742,
        "positive": true,
        "group": "african-american"
    },
    {
        "x": 0.8680475307594666,
        "y": 0.10675055243798881,
        "positive": true,
        "group": "african-american"
    },
    {
        "x": 0.87140366282792,
        "y": 0.48288209673372773,
        "positive": true,
        "group": "african-american"
    },
    {
        "x": 0.8744418461618102,
        "y": 0.3018822038452593,
        "positive": true,
        "group": "african-american"
    },
    {
        "x": 0.8797804818825525,
        "y": 0.2342140758742226,
        "positive": true,
        "group": "african-american"
    },
    {
        "x": 0.8806164488788721,
        "y": 0.0744496211168999,
        "positive": true,
        "group": "african-american"
    },
    {
        "x": 0.8890502475708142,
        "y": 0.42739513080873315,
        "positive": true,
        "group": "african-american"
    },
    {
        "x": 0.9246990298182938,
        "y": 0.24059328501164434,
        "positive": true,
        "group": "african-american"
    },
    {
        "x": 0.9303187784120255,
        "y": 0.10608084934378947,
        "positive": true,
        "group": "african-american"
    },
    {
        "x": 0.9399093910876675,
        "y": 0.025299091611072466,
        "positive": true,
        "group": "african-american"
    },
    {
        "x": 0.9443032098110411,
        "y": 0.2209840491654309,
        "positive": true,
        "group": "african-american"
    },
    {
        "x": 0.9598128285050964,
        "y": 0.0999263136522921,
        "positive": true,
        "group": "african-american"
    },
    {
        "x": 0.960360493276813,
        "y": 0.06864042656915381,
        "positive": true,
        "group": "african-american"
    },
    {
        "x": 0.9814777551762393,
        "y": 0.07982088225915418,
        "positive": true,
        "group": "african-american"
    },
    {
        "x": 0.9821287906110334,
        "y": 0.058614425709871076,
        "positive": true,
        "group": "african-american"
    },
    {
        "x": 0.08005278686844464,
        "y": 0.005747988485118816,
        "positive": false,
        "group": "african-american"
    },
    {
        "x": 0.16687191929902667,
        "y": 0.036740341207869065,
        "positive": false,
        "group": "african-american"
    },
    {
        "x": 0.18161090715468853,
        "y": 0.08245130271379586,
        "positive": false,
        "group": "african-american"
    },
    {
        "x": 0.20026526192242766,
        "y": 0.02103934691987397,
        "positive": false,
        "group": "african-american"
    },
    {
        "x": 0.21191521152978687,
        "y": 0.02092582315628455,
        "positive": false,
        "group": "african-american"
    },
    {
        "x": 0.25206904382379336,
        "y": 0.09972158007741716,
        "positive": false,
        "group": "african-american"
    },
    {
        "x": 0.25896828403348304,
        "y": 0.047854495184064705,
        "positive": false,
        "group": "african-american"
    },
    {
        "x": 0.2853459855442517,
        "y": 0.1189025839883211,
        "positive": false,
        "group": "african-american"
    },
    {
        "x": 0.28662279603861407,
        "y": 0.1122413445087449,
        "positive": false,
        "group": "african-american"
    },
    {
        "x": 0.3267908156679391,
        "y": 0.11732624864822094,
        "positive": false,
        "group": "african-american"
    },
    {
        "x": 0.33509120016407956,
        "y": 0.35823605086417865,
        "positive": false,
        "group": "african-american"
    },
    {
        "x": 0.34762614937225633,
        "y": 0.3627230455637911,
        "positive": false,
        "group": "african-american"
    },
    {
        "x": 0.34853231585113376,
        "y": 0.21158321943704794,
        "positive": false,
        "group": "african-american"
    },
    {
        "x": 0.3487284989002817,
        "y": 0.08821239531158698,
        "positive": false,
        "group": "african-american"
    },
    {
        "x": 0.3603239606520079,
        "y": 0.5132137625528743,
        "positive": false,
        "group": "african-american"
    },
    {
        "x": 0.381704457313363,
        "y": 0.313997541094184,
        "positive": false,
        "group": "african-american"
    },
    {
        "x": 0.38618246641338283,
        "y": 0.3136242537092584,
        "positive": false,
        "group": "african-american"
    },
    {
        "x": 0.4278914086062373,
        "y": 0.3159507308623688,
        "positive": false,
        "group": "african-american"
    },
    {
        "x": 0.4331177745012349,
        "y": 0.5629585132383859,
        "positive": false,
        "group": "african-american"
    },
    {
        "x": 0.4351662290907483,
        "y": 0.06316394979688389,
        "positive": false,
        "group": "african-american"
    },
    {
        "x": 0.45702768582076114,
        "y": 0.36900481133766494,
        "positive": false,
        "group": "african-american"
    },
    {
        "x": 0.4570833749752501,
        "y": 0.07179159553212333,
        "positive": false,
        "group": "african-american"
    },
    {
        "x": 0.4825193284762743,
        "y": 0.12533673282121094,
        "positive": false,
        "group": "african-american"
    },
    {
        "x": 0.501224061472427,
        "y": 0.13091951259979417,
        "positive": false,
        "group": "african-american"
    },
    {
        "x": 0.5045240032742953,
        "y": 0.2659263178390321,
        "positive": false,
        "group": "african-american"
    },
    {
        "x": 0.5141060175689771,
        "y": 0.35141321554100124,
        "positive": false,
        "group": "african-american"
    },
    {
        "x": 0.5191153527667607,
        "y": 0.6826027649064033,
        "positive": false,
        "group": "african-american"
    },
    {
        "x": 0.5369373740991812,
        "y": 0.25782586823152065,
        "positive": false,
        "group": "african-american"
    },
    {
        "x": 0.5891558290340206,
        "y": 0.3169731598418697,
        "positive": false,
        "group": "african-american"
    },
    {
        "x": 0.5898361749129728,
        "y": 0.3101229419472147,
        "positive": false,
        "group": "african-american"
    },
    {
        "x": 0.5931110179180932,
        "y": 0.17410778167970764,
        "positive": false,
        "group": "african-american"
    },
    {
        "x": 0.8527524115795386,
        "y": 0.4427865733074521,
        "positive": false,
        "group": "african-american"
    },
    {
        "x": 0.9314058075811726,
        "y": 0.1108468926674755,
        "positive": false,
        "group": "african-american"
    },
    {
        "x": 0.9871262652309549,
        "y": 0.08430154584080118,
        "positive": false,
        "group": "african-american"
    }
]

export const generalOptions = { 
	showDummyPoints: true,
	showLegend: true,
	showThreshold: true
}

export const generalAnimations = [
  {
    id: 'range',
    animations: [
      {
        target: '',
        from: { pointerEvents: 'none' },
        to: { pointerEvents: 'none' },
        location: 'start'
      },
      {
        target: '.eov-points-wrap',
        from: { opacity: 0 },
        to: { opacity: 1 },
        location: 'start'
      },
      {
        target: '.eov-x-axis > .eov-x-axis-line',
        from: { scaleX: 0 },
        to: { scaleX: 1 },
        location: 'start'
      },
      {
        target: '.eov-x-axis > .eov-x-axis-tick',
        from: { opacity: 0 },
        to: { opacity: 1 },
        location: 'start',
        stagger: true
      }
    ]
  },
  {
  	id: 'high-scores',
  	animations: [
	  	{
	  	  target: '.eov-legend .eov-legend-el',
	  	  from: { opacity: 0 },
	  	  to: { opacity: 1 },
	  	  location: 'start',
	  	  stagger: true
	  	},
	  	{
	  	  target: '.eov-points-wrap > .eov-point',
	  	  from: { opacity: 1 },
	  	  to: { opacity: 0.1 },
	  	  location: 'start'
	  	},
  		{
  		  target: '.eov-points-wrap > .eov-cross-wrap > .eov-cross-line',
  		  from: { opacity: 0, scale: 0.6 },
  		  to: { opacity: 1, scale: 1 },
  		  location: 'start'
  		},
  		{
  		  target: '.eov-points-wrap > .eov-cross-wrap > .eov-point.dummy',
  		  from: { opacity: 1, scale: 1 },
  		  to: { opacity: 0, scale: 0.6 },
  		  location: 'start'
  		}
  	]
  },
  {
  	id: 'low-scores',
  	animations: [
	  	{
	  	  target: '.eov-points-wrap > .eov-point',
	  	  from: { opacity: 0.1 },
	  	  to: { opacity: 1 },
	  	  location: 'start'
	  	},
  		{
  		  target: '.eov-points-wrap > .eov-cross-wrap',
  		  from: { opacity: 1 },
  		  to: { opacity: 0.1 },
  		  location: 'start'
  		},
  	]
  },
  {
  	id: 'threshold',
  	animations: [
	  	{
	  	  target: '.eov-threshold-line',
	  	  from: { scaleY: 0 },
	  	  to: { scaleY: 1 },
	  	  location: 'start'
	  	},
	  	{
	  	  target: '.eov-threshold-hover-line',
	  	  from: { scaleY: 0 },
	  	  to: { scaleY: 1 },
	  	  location: 'start'
	  	},
  		{
  		  target: '.eov-threshold-label',
  		  from: { opacity: 0 },
  		  to: { opacity: 1 },
  		  location: 'start'
  		},
  		{
  		  target: '.eov-threshold-hover-label',
  		  from: { opacity: 0 },
  		  to: { opacity: 1 },
  		  location: 'start'
  		},
  		{
  		  target: '.eov-points-wrap > .eov-point:not(.above-50)',
  		  from: { opacity: 1 },
  		  to: { opacity: 0.1 },
  		  location: 'start'
  		}
  	]
  },
  {
    id: 'true-positive',
    animations: [
      {
        target: '.eov-rates > .eov-rates-text.true-positive',
        from: { opacity: 0 },
        to: { opacity: 1 },
        location: 'start'
      }
    ]
  },
  {
    id: 'lower-threshold',
    animations: [
      {
        target: '.eov-points-wrap > .eov-point:not(.above-50)',
        from: { opacity: 0.2 },
        to: { opacity: 1 },
        location: 'start'
      }
    ],
    onUpdate: ({ self: { progress }, vizRef }) => {
      vizRef.props.setThreshold(Math.max((0.5 - progress * 0.8) * 100, 20))
    }
  },
  {
    id: 'tradeoff',
    animations: [
      {
        target: '.eov-points-wrap > .eov-point.above-20',
        from: { opacity: 1 },
        to: { opacity: 0.1 },
        location: 'start'
      },
      {
        target: '.eov-points-wrap > .eov-cross-wrap.above-20',
        from: { opacity: 0.1 },
        to: { opacity: 1 },
        location: 'start'
      },
      {
        target: '.eov-rates > .eov-rates-text.true-positive',
        from: { x: `+=70%`, opacity: 0 },
        to: { x: 0, opacity: 0.4 },
        location: 'start'
      },
      {
        target: '.eov-rates > .eov-rates-text.false-negative',
        from: { opacity: 0 },
        to: { opacity: 1 },
        delay: 0.1,
        location: 'start'
      },
      {
        target: '',
        from: { opacity: 1 },
        to: { opacity: 0 },
        location: 'end'
      }
    ]
  }
]

export const caucasianOptions = { 
  showDummyPoints: false,
  showLegend: false,
  showThreshold: true
}

export const africanAmericanOptions = { 
  showDummyPoints: false,
  showLegend: false,
  showThreshold: true
}

export const disparityAnimations = [
  {
    id: 'disparity',
    animations: [
      {
        target: '.eo-viz-label',
        from: { opacity: 0 },
        to: { opacity: 1 },
        location: 'start'
      },
      {
        target: '.eov-points-wrap',
        from: { opacity: 0 },
        to: { opacity: 1 },
        location: 'start'
      },
      {
        target: '.eov-x-axis > .eov-x-axis-line',
        from: { scaleX: 0 },
        to: { scaleX: 1 },
        location: 'start'
      },
      {
        target: '.eov-x-axis > .eov-x-axis-tick',
        from: { opacity: 0 },
        to: { opacity: 1 },
        location: 'start',
        stagger: true
      }
    ]
  },
  {
    id: 'justification',
    animations: [
      {
        target: '.eov-points-wrap > .eov-point',
        from: { opacity: 1 },
        to: { opacity: 0.1 },
        location: 'start'
      }
    ]
  },
  {
    id: 'prompt',
    animations: [
      {
        target: '',
        from: { pointerEvents: 'none' },
        to: { pointerEvents: 'initial' },
        location: 'start'
      },
      {
        target: '.eov-points-wrap > .eov-point.above-50',
        to: { opacity: 1, clearProps: 'opacity' },
        duration: 0.2,
        location: 'start'
      },
      {
        target: '.eov-points-wrap > .eov-cross-wrap:not(.above-50)',
        from: { opacity: 1 },
        to: { opacity: 0.1, clearProps: 'opacity' },
        duration: 0.2,
        location: 'start'
      },
      {
        target: '.eov-points-wrap > .eov-point:not(.above-50)',
        to: { clearProps: 'opacity' },
        duration: 0.2,
        location: 'start'
      },
      {
        target: '.eov-points-wrap > .eov-cross-wrap.above-50',
        to: { clearProps: 'opacity' },
        duration: 0.2,
        location: 'start'
      },
      {
        target: '.eod-interactive-prompt-wrap',
        from: { opacity: 0, scale: 0.8 },
        to: { opacity: 1, scale: 1 },
        location: 'start',
        targetOutside: true
      },
      {
        target: '.eov-threshold-line',
        from: { scaleY: 0 },
        to: { scaleY: 1 },
        location: 'start'
      },
      {
        target: '.eov-threshold-hover-line',
        from: { scaleY: 0 },
        to: { scaleY: 1 },
        location: 'start'
      },
      {
        target: '.eov-threshold-label',
        from: { opacity: 0 },
        to: { opacity: 1 },
        location: 'start'
      },
      {
        target: '.eov-threshold-hover-label',
        from: { opacity: 0 },
        to: { opacity: 1 },
        location: 'start'
      },
      {
        target: '.eov-rates > .eov-rates-text',
        from: { opacity: 0 },
        to: { opacity: 1 },
        stagger: true,
        location: 'start'
      }
    ],
    onLeaveBack: ({ vizRef }) => {
      setTimeout(() => {
        vizRef.props.setThreshold(50)
      }, 500)
    }
  }
]

export const interactiveContent = {
  prompt: 'How would you set the thresholds?',
  hints: ['Hover over the distributions and click anywhere to set the threshold.', 'Consider both the racial disparity and the tradeoff between true and false positive rates.']
}
