import { PRODUCT } from "@/models/products";
import CategoriesIcons from "../../src/app/[locale]/(homepage)/_components/CategoriesIcons";
export type Category = {
  name: string;
  icon: () => React.ReactNode | JSX.Element;
  path: string;
};

export const categories: Category[] = [
  {
    name: "إلكترونيات",
    icon: CategoriesIcons.Electronics,
    path: "/electronics",
  },
  { name: "طعام", icon: CategoriesIcons.Food, path: "/food" },
  { name: "المشروبات", icon: CategoriesIcons.Beverages, path: "/beverages" },
  {
    name: "الصحة والعناية الشخصية",
    icon: CategoriesIcons.HealthAndPersonalCare,
    path: "/health&personalCare",
  },
  {
    name: "رعاية المنزل والحيوانات الأليفة",
    icon: CategoriesIcons.HomeAndPetCare,
    path: "/home&petCare",
  },
  {
    name: "الطفل",
    icon: CategoriesIcons.BabyAndToddler,
    path: "/baby&toddler",
  },
];
// https://media.istockphoto.com/id/157292245/photo/camera-slr.webp?s=2048x2048&w=is&k=20&c=at1-YD0Etz8Ddj9efHj90nVhJZSF42za9ggdmivKfKI=
export const products: PRODUCT[] = [
  // first home & pet care
  {
    id: "z6kdm55p02",
    data: {
      discount: 2,
      name: "منتج 786",
      model: "موديل 20",
      stock: 164,
      subCategory: "فئة فرعية 5",
      category: "رعاية المنزل والحيوانات الأليفة",
      rating: 2,
      ratings: [
        {
          unb5zfxehhd: 3,
        },
        {
          nocwc9sima: 5,
        },
        {
          mp43ddb6u8m: 4,
        },
        {
          o96iarchfec: 5,
        },
        {
          qwka5rldqlk: 1,
        },
        {
          knbfcpf0asq: 2,
        },
        {
          sirj4ok9of: 3,
        },
        {
          wvb9c93e1s9: 2,
        },
        {
          "2lzaaycvom6": 3,
        },
        {
          "7aalqg434mk": 3,
        },
      ],
      brand: "علامة تجارية 43",
      images: [
        "https://media.istockphoto.com/id/157292245/photo/camera-slr.webp?s=2048x2048&w=is&k=20&c=at1-YD0Etz8Ddj9efHj90nVhJZSF42za9ggdmivKfKI=",
        "https://example.com/image32.jpg",
        "https://example.com/image389.jpg",
        "https://example.com/image860.jpg",
        "https://example.com/image873.jpg",
      ],
      price: 7144,
      reviews: [
        {
          rating: 2,
          review: "مراجعة 593",
          user: "مستخدم 575",
        },
        {
          rating: 2,
          review: "مراجعة 623",
          user: "مستخدم 699",
        },
        {
          rating: 5,
          review: "مراجعة 733",
          user: "مستخدم 543",
        },
        {
          rating: 4,
          review: "مراجعة 318",
          user: "مستخدم 482",
        },
        {
          rating: 1,
          review: "مراجعة 727",
          user: "مستخدم 27",
        },
      ],
      overview: {
        highlights: "ميزات 293",
        overview:
          "لوريم إيبسوم هو ببساطة نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى) ويُستخدم في صناعات المطابع ودور النشر. كان لوريم إيبسوم ولايزال المعيار للنص الشكلي منذ القرن الخامس عشر عندما قامت مطبعة مجهولة برص مجموعة من الأحرف بشكل عشوائي أخذتها من نص، لتكوّن كتيّب بمثابة دليل أو مرجع شكلي لهذه الأحرف. خمسة قرون من الزمن لم تقضي على هذا النص، بل انه حتى صار مستخدماً وبشكله الأصلي في الطباعة والتنضيد الإلكتروني. انتشر بشكل كبير في ستينيّات هذا القرن مع إصدار رقائق ليتراسيت (Letraset) البلاستيكية تحوي مقاطع من هذا النص، وعاد لينتشر مرة أخرى مؤخراَ مع ظهور برامج النشر الإلكتروني مثل ألدوس بايج مايكر (Aldus PageMaker) والتي حوت أيضاً على نسخ من نص لوريم إيبسوم.",
        specifications: [
          {
            "مواصفة 13": "قيمة 523",
          },
          {
            "مواصفة 62": "قيمة 172",
          },
          {
            "مواصفة 96": "قيمة 201",
          },
          {
            "مواصفة 39": "قيمة 46",
          },
          {
            "مواصفة 17": "قيمة 574",
          },
        ],
      },
    },
  },

  // first baby
  {
    id: "6dkzwftcc3l",
    data: {
      discount: 22,
      name: "منتج 581",
      model: "موديل 74",
      stock: 841,
      subCategory: "فئة فرعية 7",
      category: "الطفل",
      rating: 1,
      ratings: [
        {
          "1x3ld0s2gc4": 2,
        },
        {
          uds4bogiw4q: 4,
        },
        {
          yrh2fkedpwg: 1,
        },
        {
          h5eslotq5tj: 5,
        },
        {
          ej72bzgc4a: 1,
        },
        {
          el7t5w2zsqh: 1,
        },
        {
          "1bkumwmghna": 1,
        },
        {
          jzib9cpkiy: 5,
        },
        {
          c63gelqr6s: 1,
        },
        {
          cqv25b8071: 1,
        },
      ],
      brand: "علامة تجارية 11",
      images: [
        "https://media.istockphoto.com/id/157292245/photo/camera-slr.webp?s=2048x2048&w=is&k=20&c=at1-YD0Etz8Ddj9efHj90nVhJZSF42za9ggdmivKfKI=",
        "https://example.com/image510.jpg",
        "https://example.com/image211.jpg",
        "https://example.com/image675.jpg",
        "https://example.com/image833.jpg",
      ],
      price: 4385,
      reviews: [
        {
          rating: 5,
          review: "مراجعة 822",
          user: "مستخدم 716",
        },
        {
          rating: 5,
          review: "مراجعة 220",
          user: "مستخدم 164",
        },
        {
          rating: 4,
          review: "مراجعة 953",
          user: "مستخدم 597",
        },
        {
          rating: 5,
          review: "مراجعة 424",
          user: "مستخدم 299",
        },
        {
          rating: 3,
          review: "مراجعة 856",
          user: "مستخدم 770",
        },
      ],
      overview: {
        highlights: "ميزات 121",
        overview: "نظرة عامة 341",
        specifications: [
          {
            "مواصفة 70": "قيمة 238",
          },
          {
            "مواصفة 2": "قيمة 327",
          },
          {
            "مواصفة 30": "قيمة 577",
          },
          {
            "مواصفة 74": "قيمة 64",
          },
          {
            "مواصفة 95": "قيمة 426",
          },
        ],
      },
    },
  },

  // first electronic
  {
    id: "10vr2mk8kasl",
    data: {
      discount: 12,
      name: "منتج 323",
      model: "موديل 21",
      stock: 616,
      subCategory: "فئة فرعية 2",
      category: "إلكترونيات",
      rating: 2,
      ratings: [
        {
          "8t0h9lywrap": 5,
        },
        {
          "7enmjiq7qyb": 2,
        },
        {
          pzaea1r634i: 5,
        },
        {
          unsdca5yezo: 4,
        },
        {
          ka2i9iuwh7: 3,
        },
        {
          mw0cy09jqr: 4,
        },
        {
          "6x8hishoa8": 3,
        },
        {
          "50r1pjt4o8w": 1,
        },
        {
          ujkwgzoake: 5,
        },
        {
          "1nghcq4bq81": 3,
        },
      ],
      brand: "علامة تجارية 80",
      images: [
        "https://media.istockphoto.com/id/157292245/photo/camera-slr.webp?s=2048x2048&w=is&k=20&c=at1-YD0Etz8Ddj9efHj90nVhJZSF42za9ggdmivKfKI=",
        "https://example.com/image549.jpg",
        "https://example.com/image44.jpg",
        "https://example.com/image773.jpg",
        "https://example.com/image491.jpg",
      ],
      price: 2837,
      reviews: [
        {
          rating: 3,
          review: "مراجعة 567",
          user: "مستخدم 692",
        },
        {
          rating: 5,
          review: "مراجعة 9",
          user: "مستخدم 921",
        },
        {
          rating: 3,
          review: "مراجعة 480",
          user: "مستخدم 330",
        },
        {
          rating: 5,
          review: "مراجعة 154",
          user: "مستخدم 351",
        },
        {
          rating: 1,
          review: "مراجعة 746",
          user: "مستخدم 860",
        },
      ],
      overview: {
        highlights: "ميزات 348",
        overview:
          "لوريم إيبسوم هو ببساطة نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى) ويُستخدم في صناعات المطابع ودور النشر. كان لوريم إيبسوم ولايزال المعيار للنص الشكلي منذ القرن الخامس عشر عندما قامت مطبعة مجهولة برص مجموعة من الأحرف بشكل عشوائي أخذتها من نص، لتكوّن كتيّب بمثابة دليل أو مرجع شكلي لهذه الأحرف. خمسة قرون من الزمن لم تقضي على هذا النص، بل انه حتى صار مستخدماً وبشكله الأصلي في الطباعة والتنضيد الإلكتروني. انتشر بشكل كبير في ستينيّات هذا القرن مع إصدار رقائق ليتراسيت (Letraset) البلاستيكية تحوي مقاطع من هذا النص، وعاد لينتشر مرة أخرى مؤخراَ مع ظهور برامج النشر الإلكتروني مثل ألدوس بايج مايكر (Aldus PageMaker) والتي حوت أيضاً على نسخ من نص لوريم إيبسوم.",
        specifications: [
          {
            "مواصفة 91": "قيمة 961",
          },
          {
            "مواصفة 11": "قيمة 705",
          },
          {
            "مواصفة 6": "قيمة 954",
          },
          {
            "مواصفة 99": "قيمة 422",
          },
          {
            "مواصفة 93": "قيمة 534",
          },
        ],
      },
    },
  },

  // first beverages
  {
    id: "nxa7iu8mdh8",
    data: {
      discount: 29,
      name: "منتج 932",
      model: "موديل 38",
      stock: 305,
      subCategory: "فئة فرعية 2",
      category: "المشروبات",
      rating: 1,
      ratings: [
        {
          lrrif22y0d: 5,
        },
        {
          "1sbaowcjutxj": 1,
        },
        {
          b5ricqogilm: 5,
        },
        {
          tr4hzlzmvj: 5,
        },
        {
          "70lqvq82fn": 4,
        },
        {
          wcwr2bxpmlm: 3,
        },
        {
          "1r5o1kf483g": 5,
        },
        {
          x0q302o565r: 1,
        },
        {
          ucfco2cjjwq: 5,
        },
        {
          j9q3qnlyzdm: 2,
        },
      ],
      brand: "علامة تجارية 55",
      images: [
        "https://media.istockphoto.com/id/157292245/photo/camera-slr.webp?s=2048x2048&w=is&k=20&c=at1-YD0Etz8Ddj9efHj90nVhJZSF42za9ggdmivKfKI=",
        "https://example.com/image652.jpg",
        "https://example.com/image45.jpg",
        "https://example.com/image520.jpg",
        "https://example.com/image522.jpg",
      ],
      price: 6915,
      reviews: [
        {
          rating: 4,
          review: "مراجعة 51",
          user: "مستخدم 5",
        },
        {
          rating: 2,
          review: "مراجعة 821",
          user: "مستخدم 157",
        },
        {
          rating: 3,
          review: "مراجعة 30",
          user: "مستخدم 729",
        },
        {
          rating: 4,
          review: "مراجعة 384",
          user: "مستخدم 682",
        },
        {
          rating: 4,
          review: "مراجعة 952",
          user: "مستخدم 717",
        },
      ],
      overview: {
        highlights: "ميزات 48",
        overview: "نظرة عامة 648",
        specifications: [
          {
            "مواصفة 65": "قيمة 818",
          },
          {
            "مواصفة 15": "قيمة 623",
          },
          {
            "مواصفة 41": "قيمة 414",
          },
          {
            "مواصفة 60": "قيمة 62",
          },
          {
            "مواصفة 26": "قيمة 60",
          },
        ],
      },
    },
  },
  {
    id: "i8cfyj9yd5",
    data: {
      discount: 43,
      name: "منتج 995",
      model: "موديل 21",
      stock: 603,
      subCategory: "فئة فرعية 1",
      category: "رعاية المنزل والحيوانات الأليفة",
      rating: 2,
      ratings: [
        {
          aem84lmrxf5: 5,
        },
        {
          p4d6y1hs2mg: 2,
        },
        {
          nkqv2n79kzd: 3,
        },
        {
          zmlbrx0wy1l: 2,
        },
        {
          "87w81h2a066": 1,
        },
        {
          r3nmq0t264: 3,
        },
        {
          jx5g979s2d: 2,
        },
        {
          essnjkugbdn: 4,
        },
        {
          o6ncqu2qdm: 2,
        },
        {
          lwqesnrs1lm: 2,
        },
      ],
      brand: "علامة تجارية 72",
      images: [
        "https://example.com/image420.jpg",
        "https://example.com/image507.jpg",
        "https://example.com/image914.jpg",
        "https://example.com/image703.jpg",
        "https://example.com/image30.jpg",
      ],
      price: 6221,
      reviews: [
        {
          rating: 5,
          review: "مراجعة 240",
          user: "مستخدم 372",
        },
        {
          rating: 1,
          review: "مراجعة 368",
          user: "مستخدم 937",
        },
        {
          rating: 2,
          review: "مراجعة 510",
          user: "مستخدم 594",
        },
        {
          rating: 4,
          review: "مراجعة 754",
          user: "مستخدم 575",
        },
        {
          rating: 3,
          review: "مراجعة 688",
          user: "مستخدم 919",
        },
      ],
      overview: {
        highlights: "ميزات 599",
        overview: "نظرة عامة 110",
        specifications: [
          {
            "مواصفة 97": "قيمة 597",
          },
          {
            "مواصفة 97": "قيمة 236",
          },
          {
            "مواصفة 10": "قيمة 134",
          },
          {
            "مواصفة 49": "قيمة 852",
          },
          {
            "مواصفة 13": "قيمة 22",
          },
        ],
      },
    },
  },
  {
    id: "8nzyh999oo",
    data: {
      discount: 5,
      name: "منتج 481",
      model: "موديل 28",
      stock: 873,
      subCategory: "فئة فرعية 7",
      category: "المشروبات",
      rating: 2,
      ratings: [
        {
          venp2gb2sq: 3,
        },
        {
          mu322fbqjx: 5,
        },
        {
          x2d2wqclq7: 1,
        },
        {
          "434j8f68zc": 2,
        },
        {
          rny76yz5iro: 5,
        },
        {
          puqasbvad9: 5,
        },
        {
          bbjfitbtvti: 2,
        },
        {
          lltqd2609t: 1,
        },
        {
          "51c0e8bmma8": 3,
        },
        {
          "5dkmgt1dabt": 2,
        },
      ],
      brand: "علامة تجارية 18",
      images: [
        "https://example.com/image879.jpg",
        "https://example.com/image522.jpg",
        "https://example.com/image621.jpg",
        "https://example.com/image902.jpg",
        "https://example.com/image29.jpg",
      ],
      price: 3829,
      reviews: [
        {
          rating: 4,
          review: "مراجعة 407",
          user: "مستخدم 32",
        },
        {
          rating: 1,
          review: "مراجعة 524",
          user: "مستخدم 945",
        },
        {
          rating: 4,
          review: "مراجعة 745",
          user: "مستخدم 655",
        },
        {
          rating: 1,
          review: "مراجعة 298",
          user: "مستخدم 202",
        },
        {
          rating: 4,
          review: "مراجعة 936",
          user: "مستخدم 95",
        },
      ],
      overview: {
        highlights: "ميزات 289",
        overview: "نظرة عامة 887",
        specifications: [
          {
            "مواصفة 99": "قيمة 862",
          },
          {
            "مواصفة 10": "قيمة 551",
          },
          {
            "مواصفة 21": "قيمة 986",
          },
          {
            "مواصفة 71": "قيمة 574",
          },
          {
            "مواصفة 0": "قيمة 849",
          },
        ],
      },
    },
  },
  {
    id: "su43987rwe",
    data: {
      discount: 2,
      name: "منتج 538",
      model: "موديل 26",
      stock: 280,
      subCategory: "فئة فرعية 1",
      category: "الطفل",
      rating: 4,
      ratings: [
        {
          hjs4tck0luh: 2,
        },
        {
          swqzhizx35: 1,
        },
        {
          akgrvo62awh: 3,
        },
        {
          "9l18gbybvev": 3,
        },
        {
          hohu1i0funh: 3,
        },
        {
          "0icd7tbojyh": 3,
        },
        {
          "9yi7ecbtk1j": 1,
        },
        {
          g3kz8qcg1h4: 4,
        },
        {
          lmkmcnapuun: 1,
        },
        {
          r7nqhi3eex: 3,
        },
      ],
      brand: "علامة تجارية 61",
      images: [
        "https://example.com/image539.jpg",
        "https://example.com/image681.jpg",
        "https://example.com/image426.jpg",
        "https://example.com/image718.jpg",
        "https://example.com/image854.jpg",
      ],
      price: 94,
      reviews: [
        {
          rating: 5,
          review: "مراجعة 159",
          user: "مستخدم 429",
        },
        {
          rating: 2,
          review: "مراجعة 692",
          user: "مستخدم 814",
        },
        {
          rating: 5,
          review: "مراجعة 958",
          user: "مستخدم 890",
        },
        {
          rating: 1,
          review: "مراجعة 897",
          user: "مستخدم 45",
        },
        {
          rating: 1,
          review: "مراجعة 866",
          user: "مستخدم 104",
        },
      ],
      overview: {
        highlights: "ميزات 692",
        overview: "نظرة عامة 946",
        specifications: [
          {
            "مواصفة 11": "قيمة 415",
          },
          {
            "مواصفة 79": "قيمة 806",
          },
          {
            "مواصفة 43": "قيمة 187",
          },
          {
            "مواصفة 26": "قيمة 821",
          },
          {
            "مواصفة 8": "قيمة 183",
          },
        ],
      },
    },
  },

  // first food
  {
    id: "nbs69bl2vs",
    data: {
      discount: 25,
      name: "منتج 601",
      model: "موديل 76",
      stock: 644,
      subCategory: "فئة فرعية 5",
      category: "طعام",
      rating: 2,
      ratings: [
        {
          "6jinwgwqwy": 2,
        },
        {
          "6jq2l8418e": 3,
        },
        {
          g0sm30mtqy: 1,
        },
        {
          bqxh7uqvfmo: 5,
        },
        {
          ohlqhggw8pc: 4,
        },
        {
          wv27az1qf5: 4,
        },
        {
          omhqlhx9xxr: 4,
        },
        {
          "2sjmshky5ar": 3,
        },
        {
          qlysioxb9y: 1,
        },
        {
          "19grryp8nr4": 4,
        },
      ],
      brand: "علامة تجارية 81",
      images: [
        "https://media.istockphoto.com/id/157292245/photo/camera-slr.webp?s=2048x2048&w=is&k=20&c=at1-YD0Etz8Ddj9efHj90nVhJZSF42za9ggdmivKfKI=",
        "https://example.com/image74.jpg",
        "https://example.com/image711.jpg",
        "https://example.com/image743.jpg",
        "https://example.com/image581.jpg",
      ],
      price: 554,
      reviews: [
        {
          rating: 2,
          review: "مراجعة 811",
          user: "مستخدم 404",
        },
        {
          rating: 3,
          review: "مراجعة 184",
          user: "مستخدم 519",
        },
        {
          rating: 4,
          review: "مراجعة 189",
          user: "مستخدم 157",
        },
        {
          rating: 2,
          review: "مراجعة 586",
          user: "مستخدم 83",
        },
        {
          rating: 4,
          review: "مراجعة 129",
          user: "مستخدم 420",
        },
      ],
      overview: {
        highlights: "ميزات 946",
        overview: "نظرة عامة 922",
        specifications: [
          {
            "مواصفة 30": "قيمة 260",
          },
          {
            "مواصفة 17": "قيمة 606",
          },
          {
            "مواصفة 25": "قيمة 359",
          },
          {
            "مواصفة 94": "قيمة 840",
          },
          {
            "مواصفة 76": "قيمة 251",
          },
        ],
      },
    },
  },
  {
    id: "s1pps4f2xiq",
    data: {
      discount: 45,
      name: "منتج 639",
      model: "موديل 36",
      stock: 540,
      subCategory: "فئة فرعية 6",
      category: "إلكترونيات",
      rating: 2,
      ratings: [
        {
          "08fe6cwprlll": 4,
        },
        {
          "8ayeaxqyiw8": 5,
        },
        {
          v57fqpxc98p: 5,
        },
        {
          z85dofsgsd: 5,
        },
        {
          "63oiqwo4ljx": 5,
        },
        {
          "7wieu1s1zad": 1,
        },
        {
          "0hi27kdbsv0u": 2,
        },
        {
          "3rxnqah0592": 1,
        },
        {
          m9xxc340g1: 2,
        },
        {
          xbdvm3x42mi: 1,
        },
      ],
      brand: "علامة تجارية 73",
      images: [
        "https://example.com/image523.jpg",
        "https://example.com/image362.jpg",
        "https://example.com/image706.jpg",
        "https://example.com/image999.jpg",
        "https://example.com/image378.jpg",
      ],
      price: 6255,
      reviews: [
        {
          rating: 3,
          review: "مراجعة 681",
          user: "مستخدم 846",
        },
        {
          rating: 5,
          review: "مراجعة 238",
          user: "مستخدم 905",
        },
        {
          rating: 2,
          review: "مراجعة 895",
          user: "مستخدم 184",
        },
        {
          rating: 1,
          review: "مراجعة 838",
          user: "مستخدم 116",
        },
        {
          rating: 5,
          review: "مراجعة 99",
          user: "مستخدم 175",
        },
      ],
      overview: {
        highlights: "ميزات 159",
        overview: "نظرة عامة 648",
        specifications: [
          {
            "مواصفة 6": "قيمة 398",
          },
          {
            "مواصفة 88": "قيمة 436",
          },
          {
            "مواصفة 23": "قيمة 187",
          },
          {
            "مواصفة 5": "قيمة 426",
          },
          {
            "مواصفة 44": "قيمة 936",
          },
        ],
      },
    },
  },
  {
    id: "3okavj7l3iw",
    data: {
      discount: 12,
      name: "منتج 892",
      model: "موديل 63",
      stock: 679,
      subCategory: "فئة فرعية 4",
      category: "إلكترونيات",
      rating: 3,
      ratings: [
        {
          "536l17opqzg": 3,
        },
        {
          ous4co65o8: 1,
        },
        {
          "6m3zkok5x4": 1,
        },
        {
          tr4osbih11a: 2,
        },
        {
          "3wsd4lqm5td": 5,
        },
        {
          "5bg8u8xlux7": 4,
        },
        {
          "1878x0ysafe": 4,
        },
        {
          vbmqs4wp0id: 1,
        },
        {
          h2m2p9evh69: 4,
        },
        {
          s7p3dbk8b9r: 4,
        },
      ],
      brand: "علامة تجارية 12",
      images: [
        "https://example.com/image325.jpg",
        "https://example.com/image617.jpg",
        "https://example.com/image53.jpg",
        "https://example.com/image466.jpg",
        "https://example.com/image730.jpg",
      ],
      price: 7569,
      reviews: [
        {
          rating: 3,
          review: "مراجعة 830",
          user: "مستخدم 449",
        },
        {
          rating: 4,
          review: "مراجعة 126",
          user: "مستخدم 227",
        },
        {
          rating: 2,
          review: "مراجعة 757",
          user: "مستخدم 612",
        },
        {
          rating: 5,
          review: "مراجعة 249",
          user: "مستخدم 803",
        },
        {
          rating: 2,
          review: "مراجعة 330",
          user: "مستخدم 814",
        },
      ],
      overview: {
        highlights: "ميزات 61",
        overview: "نظرة عامة 308",
        specifications: [
          {
            "مواصفة 69": "قيمة 636",
          },
          {
            "مواصفة 12": "قيمة 398",
          },
          {
            "مواصفة 50": "قيمة 149",
          },
          {
            "مواصفة 35": "قيمة 930",
          },
          {
            "مواصفة 60": "قيمة 376",
          },
        ],
      },
    },
  },
  {
    id: "g9qx40fft7i",
    data: {
      discount: 25,
      name: "منتج 317",
      model: "موديل 58",
      stock: 192,
      subCategory: "فئة فرعية 3",
      category: "إلكترونيات",
      rating: 3,
      ratings: [
        {
          zzyb1u01rb: 1,
        },
        {
          "3z262rkkva8": 2,
        },
        {
          prrsvh50cf: 3,
        },
        {
          "16bfmirdiyf": 5,
        },
        {
          "2afzrl8q1ni": 4,
        },
        {
          "96dmbeqzkeg": 5,
        },
        {
          t0qxswuedcp: 1,
        },
        {
          "0oey9dcm372i": 1,
        },
        {
          "55pg3ifeb1b": 4,
        },
        {
          "5k54oplmdxf": 1,
        },
      ],
      brand: "علامة تجارية 63",
      images: [
        "https://example.com/image202.jpg",
        "https://example.com/image100.jpg",
        "https://example.com/image108.jpg",
        "https://example.com/image59.jpg",
        "https://example.com/image276.jpg",
      ],
      price: 6951,
      reviews: [
        {
          rating: 4,
          review: "مراجعة 42",
          user: "مستخدم 456",
        },
        {
          rating: 3,
          review: "مراجعة 212",
          user: "مستخدم 230",
        },
        {
          rating: 5,
          review: "مراجعة 441",
          user: "مستخدم 949",
        },
        {
          rating: 4,
          review: "مراجعة 516",
          user: "مستخدم 52",
        },
        {
          rating: 2,
          review: "مراجعة 854",
          user: "مستخدم 545",
        },
      ],
      overview: {
        highlights: "ميزات 23",
        overview: "نظرة عامة 55",
        specifications: [
          {
            "مواصفة 80": "قيمة 91",
          },
          {
            "مواصفة 25": "قيمة 995",
          },
          {
            "مواصفة 14": "قيمة 830",
          },
          {
            "مواصفة 64": "قيمة 780",
          },
          {
            "مواصفة 80": "قيمة 621",
          },
        ],
      },
    },
  },
  {
    id: "169zvbq12ep",
    data: {
      discount: 35,
      name: "منتج 6",
      model: "موديل 56",
      stock: 938,
      subCategory: "فئة فرعية 5",
      category: "إلكترونيات",
      rating: 2,
      ratings: [
        {
          i5ihtly914: 1,
        },
        {
          sm9yn2uanb: 4,
        },
        {
          fwz95jfa0s4: 2,
        },
        {
          huotozpwnzo: 1,
        },
        {
          "9d7yjgk4mjk": 5,
        },
        {
          zqamksxiu6: 4,
        },
        {
          ioylnga4wn: 2,
        },
        {
          xxyzunka5h: 5,
        },
        {
          ks0lxrbvqjr: 1,
        },
        {
          "1k6enudav59": 5,
        },
      ],
      brand: "علامة تجارية 31",
      images: [
        "https://example.com/image945.jpg",
        "https://example.com/image136.jpg",
        "https://example.com/image30.jpg",
        "https://example.com/image27.jpg",
        "https://example.com/image235.jpg",
      ],
      price: 7508,
      reviews: [
        {
          rating: 4,
          review: "مراجعة 354",
          user: "مستخدم 854",
        },
        {
          rating: 5,
          review: "مراجعة 426",
          user: "مستخدم 780",
        },
        {
          rating: 1,
          review: "مراجعة 400",
          user: "مستخدم 41",
        },
        {
          rating: 3,
          review: "مراجعة 540",
          user: "مستخدم 364",
        },
        {
          rating: 1,
          review: "مراجعة 645",
          user: "مستخدم 671",
        },
      ],
      overview: {
        highlights: "ميزات 756",
        overview: "نظرة عامة 205",
        specifications: [
          {
            "مواصفة 99": "قيمة 161",
          },
          {
            "مواصفة 22": "قيمة 506",
          },
          {
            "مواصفة 44": "قيمة 49",
          },
          {
            "مواصفة 78": "قيمة 965",
          },
          {
            "مواصفة 52": "قيمة 783",
          },
        ],
      },
    },
  },
  {
    id: "ae5ai5shy9c",
    data: {
      discount: 13,
      name: "منتج 231",
      model: "موديل 29",
      stock: 709,
      subCategory: "فئة فرعية 9",
      category: "المشروبات",
      rating: 3,
      ratings: [
        {
          "88c7saa3xj9": 2,
        },
        {
          ad5o9pe1obd: 5,
        },
        {
          qmswqcgrmz: 4,
        },
        {
          "5ulx2cbmdet": 1,
        },
        {
          ljtbrrw9vkr: 1,
        },
        {
          foo46hfg3sd: 2,
        },
        {
          ud3v3g6qgo8: 3,
        },
        {
          gr4jnfr4ij: 4,
        },
        {
          v7e5x3ngedq: 4,
        },
        {
          "44611zic58t": 5,
        },
      ],
      brand: "علامة تجارية 24",
      images: [
        "https://example.com/image976.jpg",
        "https://example.com/image83.jpg",
        "https://example.com/image730.jpg",
        "https://example.com/image675.jpg",
        "https://example.com/image401.jpg",
      ],
      price: 5099,
      reviews: [
        {
          rating: 1,
          review: "مراجعة 125",
          user: "مستخدم 104",
        },
        {
          rating: 2,
          review: "مراجعة 483",
          user: "مستخدم 349",
        },
        {
          rating: 3,
          review: "مراجعة 198",
          user: "مستخدم 289",
        },
        {
          rating: 5,
          review: "مراجعة 134",
          user: "مستخدم 296",
        },
        {
          rating: 3,
          review: "مراجعة 539",
          user: "مستخدم 106",
        },
      ],
      overview: {
        highlights: "ميزات 883",
        overview: "نظرة عامة 137",
        specifications: [
          {
            "مواصفة 76": "قيمة 295",
          },
          {
            "مواصفة 39": "قيمة 540",
          },
          {
            "مواصفة 4": "قيمة 338",
          },
          {
            "مواصفة 94": "قيمة 929",
          },
          {
            "مواصفة 20": "قيمة 951",
          },
        ],
      },
    },
  },
  {
    id: "1gbdmriuz4yi",
    data: {
      discount: 8,
      name: "منتج 143",
      model: "موديل 12",
      stock: 804,
      subCategory: "فئة فرعية 8",
      category: "إلكترونيات",
      rating: 3,
      ratings: [
        {
          "2vr505h4n7j": 4,
        },
        {
          hl9oefhqywe: 2,
        },
        {
          cafrjqmtjlj: 2,
        },
        {
          "2nc2ka97a4g": 4,
        },
        {
          "65fhssb6hv": 1,
        },
        {
          "3s9f7uincns": 5,
        },
        {
          qh2j6mdpys: 3,
        },
        {
          fwe01sj77l: 4,
        },
        {
          rt81xgkhhw: 2,
        },
        {
          kr4ojjujw2j: 3,
        },
      ],
      brand: "علامة تجارية 26",
      images: [
        "https://example.com/image722.jpg",
        "https://example.com/image602.jpg",
        "https://example.com/image514.jpg",
        "https://example.com/image868.jpg",
        "https://example.com/image2.jpg",
      ],
      price: 5708,
      reviews: [
        {
          rating: 5,
          review: "مراجعة 747",
          user: "مستخدم 48",
        },
        {
          rating: 4,
          review: "مراجعة 31",
          user: "مستخدم 438",
        },
        {
          rating: 5,
          review: "مراجعة 20",
          user: "مستخدم 969",
        },
        {
          rating: 3,
          review: "مراجعة 936",
          user: "مستخدم 19",
        },
        {
          rating: 5,
          review: "مراجعة 625",
          user: "مستخدم 431",
        },
      ],
      overview: {
        highlights: "ميزات 908",
        overview: "نظرة عامة 658",
        specifications: [
          {
            "مواصفة 16": "قيمة 343",
          },
          {
            "مواصفة 12": "قيمة 476",
          },
          {
            "مواصفة 53": "قيمة 671",
          },
          {
            "مواصفة 15": "قيمة 627",
          },
          {
            "مواصفة 19": "قيمة 11",
          },
        ],
      },
    },
  },
  {
    id: "nfehjhqutgs",
    data: {
      discount: 8,
      name: "منتج 822",
      model: "موديل 48",
      stock: 112,
      subCategory: "فئة فرعية 2",
      category: "رعاية المنزل والحيوانات الأليفة",
      rating: 1,
      ratings: [
        {
          kzc2ima0jhf: 3,
        },
        {
          fuxp9hpyivf: 2,
        },
        {
          j8kk39l2ntb: 4,
        },
        {
          one52lpey5f: 3,
        },
        {
          i0tk2j8hahf: 5,
        },
        {
          g0mm3f82mwm: 1,
        },
        {
          "9wge9rre9uv": 2,
        },
        {
          bv7ey551zwe: 5,
        },
        {
          iuf55ma28mh: 5,
        },
        {
          kz2bnnk8vv: 4,
        },
      ],
      brand: "علامة تجارية 11",
      images: [
        "https://example.com/image534.jpg",
        "https://example.com/image939.jpg",
        "https://example.com/image339.jpg",
        "https://example.com/image939.jpg",
        "https://example.com/image414.jpg",
      ],
      price: 6662,
      reviews: [
        {
          rating: 4,
          review: "مراجعة 224",
          user: "مستخدم 657",
        },
        {
          rating: 2,
          review: "مراجعة 257",
          user: "مستخدم 148",
        },
        {
          rating: 5,
          review: "مراجعة 103",
          user: "مستخدم 749",
        },
        {
          rating: 2,
          review: "مراجعة 445",
          user: "مستخدم 827",
        },
        {
          rating: 5,
          review: "مراجعة 979",
          user: "مستخدم 81",
        },
      ],
      overview: {
        highlights: "ميزات 593",
        overview: "نظرة عامة 726",
        specifications: [
          {
            "مواصفة 26": "قيمة 799",
          },
          {
            "مواصفة 21": "قيمة 610",
          },
          {
            "مواصفة 69": "قيمة 302",
          },
          {
            "مواصفة 58": "قيمة 675",
          },
          {
            "مواصفة 50": "قيمة 471",
          },
        ],
      },
    },
  },
  {
    id: "vrw4ognts4m",
    data: {
      discount: 21,
      name: "منتج 807",
      model: "موديل 90",
      stock: 125,
      subCategory: "فئة فرعية 0",
      category: "طعام",
      rating: 4,
      ratings: [
        {
          bsnjo8hrfis: 1,
        },
        {
          "0stgekez9so": 3,
        },
        {
          u813y91irn9: 2,
        },
        {
          "0tbqktqjda3d": 5,
        },
        {
          r189f7s6yjk: 5,
        },
        {
          "5qyobtzrnr": 2,
        },
        {
          "2wym18gdj4o": 4,
        },
        {
          n0zd60x1b7q: 5,
        },
        {
          ux88kwleu3e: 3,
        },
        {
          uv8edkstzn: 4,
        },
      ],
      brand: "علامة تجارية 96",
      images: [
        "https://example.com/image706.jpg",
        "https://example.com/image923.jpg",
        "https://example.com/image644.jpg",
        "https://example.com/image869.jpg",
        "https://example.com/image169.jpg",
      ],
      price: 1797,
      reviews: [
        {
          rating: 1,
          review: "مراجعة 107",
          user: "مستخدم 426",
        },
        {
          rating: 5,
          review: "مراجعة 948",
          user: "مستخدم 161",
        },
        {
          rating: 2,
          review: "مراجعة 907",
          user: "مستخدم 709",
        },
        {
          rating: 3,
          review: "مراجعة 262",
          user: "مستخدم 90",
        },
        {
          rating: 4,
          review: "مراجعة 485",
          user: "مستخدم 964",
        },
      ],
      overview: {
        highlights: "ميزات 650",
        overview: "نظرة عامة 451",
        specifications: [
          {
            "مواصفة 24": "قيمة 92",
          },
          {
            "مواصفة 45": "قيمة 70",
          },
          {
            "مواصفة 13": "قيمة 172",
          },
          {
            "مواصفة 31": "قيمة 993",
          },
          {
            "مواصفة 74": "قيمة 981",
          },
        ],
      },
    },
  },
  {
    id: "omafaqesmqa",
    data: {
      discount: 48,
      name: "منتج 345",
      model: "موديل 19",
      stock: 875,
      subCategory: "فئة فرعية 0",
      category: "الطفل",
      rating: 4,
      ratings: [
        {
          ww4ku8py5pj: 5,
        },
        {
          te7h6xpz42r: 3,
        },
        {
          "8xk9ccmgo2f": 5,
        },
        {
          "2o1bqq5gtia": 2,
        },
        {
          "1ajc4ftmxx3": 5,
        },
        {
          "0c1fyurb5r8": 1,
        },
        {
          n97ip8pouf: 1,
        },
        {
          hijcujwwhpn: 1,
        },
        {
          pya10kzplwa: 2,
        },
        {
          "8on8rimhcy6": 4,
        },
      ],
      brand: "علامة تجارية 13",
      images: [
        "https://example.com/image419.jpg",
        "https://example.com/image615.jpg",
        "https://example.com/image570.jpg",
        "https://example.com/image836.jpg",
        "https://example.com/image95.jpg",
      ],
      price: 4911,
      reviews: [
        {
          rating: 5,
          review: "مراجعة 344",
          user: "مستخدم 171",
        },
        {
          rating: 2,
          review: "مراجعة 938",
          user: "مستخدم 670",
        },
        {
          rating: 2,
          review: "مراجعة 64",
          user: "مستخدم 589",
        },
        {
          rating: 4,
          review: "مراجعة 681",
          user: "مستخدم 401",
        },
        {
          rating: 3,
          review: "مراجعة 660",
          user: "مستخدم 843",
        },
      ],
      overview: {
        highlights: "ميزات 548",
        overview: "نظرة عامة 31",
        specifications: [
          {
            "مواصفة 53": "قيمة 343",
          },
          {
            "مواصفة 46": "قيمة 48",
          },
          {
            "مواصفة 76": "قيمة 715",
          },
          {
            "مواصفة 73": "قيمة 675",
          },
          {
            "مواصفة 39": "قيمة 307",
          },
        ],
      },
    },
  },
  {
    id: "0026itkzmuga1",
    data: {
      discount: 23,
      name: "منتج 205",
      model: "موديل 51",
      stock: 805,
      subCategory: "فئة فرعية 8",
      category: "الطفل",
      rating: 2,
      ratings: [
        {
          "5sl2sn2rh89": 2,
        },
        {
          qcr4l4yvs7h: 1,
        },
        {
          jnh4yvo1t6o: 3,
        },
        {
          z9gm0xjpax: 1,
        },
        {
          lejg0gaj3q: 2,
        },
        {
          "2w2noj013fd": 4,
        },
        {
          "8sn7kh2fsik": 1,
        },
        {
          "3utgjuoqp0n": 4,
        },
        {
          "2lhi60chpg8": 3,
        },
        {
          ppre8sukfx9: 4,
        },
      ],
      brand: "علامة تجارية 10",
      images: [
        "https://example.com/image528.jpg",
        "https://example.com/image854.jpg",
        "https://example.com/image422.jpg",
        "https://example.com/image289.jpg",
        "https://example.com/image569.jpg",
      ],
      price: 4315,
      reviews: [
        {
          rating: 3,
          review: "مراجعة 753",
          user: "مستخدم 725",
        },
        {
          rating: 5,
          review: "مراجعة 325",
          user: "مستخدم 108",
        },
        {
          rating: 4,
          review: "مراجعة 878",
          user: "مستخدم 643",
        },
        {
          rating: 2,
          review: "مراجعة 611",
          user: "مستخدم 479",
        },
        {
          rating: 1,
          review: "مراجعة 733",
          user: "مستخدم 273",
        },
      ],
      overview: {
        highlights: "ميزات 984",
        overview: "نظرة عامة 156",
        specifications: [
          {
            "مواصفة 73": "قيمة 445",
          },
          {
            "مواصفة 21": "قيمة 617",
          },
          {
            "مواصفة 12": "قيمة 230",
          },
          {
            "مواصفة 53": "قيمة 799",
          },
          {
            "مواصفة 46": "قيمة 475",
          },
        ],
      },
    },
  },
  {
    id: "x7ioatawznp",
    data: {
      discount: 11,
      name: "منتج 199",
      model: "موديل 87",
      stock: 1,
      subCategory: "فئة فرعية 9",
      category: "الطفل",
      rating: 4,
      ratings: [
        {
          yt4nheh1am: 5,
        },
        {
          t1ms724nbj: 2,
        },
        {
          w154248far8: 1,
        },
        {
          "59wi5t2jlf7": 3,
        },
        {
          xboe57umvgh: 3,
        },
        {
          wiby8c845l: 3,
        },
        {
          zpxsdkdazcl: 3,
        },
        {
          fs3r6yg6qta: 4,
        },
        {
          dp3gomytcy: 2,
        },
        {
          tjkug194af: 3,
        },
      ],
      brand: "علامة تجارية 84",
      images: [
        "https://example.com/image226.jpg",
        "https://example.com/image941.jpg",
        "https://example.com/image471.jpg",
        "https://example.com/image266.jpg",
        "https://example.com/image315.jpg",
      ],
      price: 692,
      reviews: [
        {
          rating: 4,
          review: "مراجعة 772",
          user: "مستخدم 230",
        },
        {
          rating: 4,
          review: "مراجعة 627",
          user: "مستخدم 741",
        },
        {
          rating: 3,
          review: "مراجعة 141",
          user: "مستخدم 155",
        },
        {
          rating: 3,
          review: "مراجعة 208",
          user: "مستخدم 538",
        },
        {
          rating: 1,
          review: "مراجعة 306",
          user: "مستخدم 214",
        },
      ],
      overview: {
        highlights: "ميزات 444",
        overview: "نظرة عامة 863",
        specifications: [
          {
            "مواصفة 29": "قيمة 400",
          },
          {
            "مواصفة 0": "قيمة 234",
          },
          {
            "مواصفة 41": "قيمة 350",
          },
          {
            "مواصفة 81": "قيمة 898",
          },
          {
            "مواصفة 96": "قيمة 363",
          },
        ],
      },
    },
  },

  // first health & personal care
  {
    id: "vk0bzolc6f",
    data: {
      discount: 9,
      name: "منتج 947",
      model: "موديل 69",
      stock: 505,
      subCategory: "فئة فرعية 5",
      category: "الصحة والعناية الشخصية",
      rating: 4,
      ratings: [
        {
          fkg2h596yyh: 2,
        },
        {
          pey8ijd2t8f: 5,
        },
        {
          jom268gbjf: 2,
        },
        {
          "99x617pxf74": 4,
        },
        {
          "56q03d1hyrm": 2,
        },
        {
          "7rvmyn3rudj": 5,
        },
        {
          "264krugwkk6": 2,
        },
        {
          "48i9cp6ixwb": 3,
        },
        {
          t650hj02fz: 2,
        },
        {
          i5xhrija12h: 4,
        },
      ],
      brand: "علامة تجارية 38",
      images: [
        "https://media.istockphoto.com/id/157292245/photo/camera-slr.webp?s=2048x2048&w=is&k=20&c=at1-YD0Etz8Ddj9efHj90nVhJZSF42za9ggdmivKfKI=",
        "https://example.com/image377.jpg",
        "https://example.com/image670.jpg",
        "https://example.com/image293.jpg",
        "https://example.com/image941.jpg",
      ],
      price: 6438,
      reviews: [
        {
          rating: 2,
          review: "مراجعة 332",
          user: "مستخدم 399",
        },
        {
          rating: 5,
          review: "مراجعة 550",
          user: "مستخدم 437",
        },
        {
          rating: 4,
          review: "مراجعة 990",
          user: "مستخدم 955",
        },
        {
          rating: 1,
          review: "مراجعة 174",
          user: "مستخدم 844",
        },
        {
          rating: 4,
          review: "مراجعة 349",
          user: "مستخدم 647",
        },
      ],
      overview: {
        highlights: "ميزات 516",
        overview: "نظرة عامة 692",
        specifications: [
          {
            "مواصفة 55": "قيمة 530",
          },
          {
            "مواصفة 29": "قيمة 913",
          },
          {
            "مواصفة 35": "قيمة 180",
          },
          {
            "مواصفة 75": "قيمة 273",
          },
          {
            "مواصفة 78": "قيمة 411",
          },
        ],
      },
    },
  },
  {
    id: "u5931e0squ",
    data: {
      discount: 32,
      name: "منتج 105",
      model: "موديل 65",
      stock: 205,
      subCategory: "فئة فرعية 8",
      category: "إلكترونيات",
      rating: 1,
      ratings: [
        {
          m1unp5zqmp: 2,
        },
        {
          "6cxp85nqm8x": 4,
        },
        {
          slt3ra9dev: 3,
        },
        {
          "9vu74l7hg3k": 1,
        },
        {
          ydintx66ant: 4,
        },
        {
          "9ngqxo4lgpg": 1,
        },
        {
          ooe6rmmgev: 1,
        },
        {
          "9t1wga17kke": 1,
        },
        {
          "652wumye6hc": 1,
        },
        {
          vg21qj5llkq: 4,
        },
      ],
      brand: "علامة تجارية 32",
      images: [
        "https://example.com/image305.jpg",
        "https://example.com/image652.jpg",
        "https://example.com/image69.jpg",
        "https://example.com/image631.jpg",
        "https://example.com/image263.jpg",
      ],
      price: 6777,
      reviews: [
        {
          rating: 1,
          review: "مراجعة 858",
          user: "مستخدم 338",
        },
        {
          rating: 4,
          review: "مراجعة 638",
          user: "مستخدم 359",
        },
        {
          rating: 2,
          review: "مراجعة 224",
          user: "مستخدم 58",
        },
        {
          rating: 4,
          review: "مراجعة 218",
          user: "مستخدم 352",
        },
        {
          rating: 5,
          review: "مراجعة 864",
          user: "مستخدم 791",
        },
      ],
      overview: {
        highlights: "ميزات 831",
        overview: "نظرة عامة 933",
        specifications: [
          {
            "مواصفة 64": "قيمة 163",
          },
          {
            "مواصفة 77": "قيمة 59",
          },
          {
            "مواصفة 14": "قيمة 652",
          },
          {
            "مواصفة 7": "قيمة 442",
          },
          {
            "مواصفة 63": "قيمة 433",
          },
        ],
      },
    },
  },
  {
    id: "wj412ve8rfi",
    data: {
      discount: 18,
      name: "منتج 670",
      model: "موديل 51",
      stock: 401,
      subCategory: "فئة فرعية 0",
      category: "إلكترونيات",
      rating: 4,
      ratings: [
        {
          "2cq0z7l6hdj": 3,
        },
        {
          "1qdzonk9kdd": 4,
        },
        {
          f76jt060tc: 3,
        },
        {
          ac3frfw8t78: 5,
        },
        {
          wposk0m018: 1,
        },
        {
          sisa47w8xz: 2,
        },
        {
          uxhxween65b: 1,
        },
        {
          "1x05tl9zby": 1,
        },
        {
          f9vmmrmoof5: 2,
        },
        {
          tla8jyshoca: 5,
        },
      ],
      brand: "علامة تجارية 68",
      images: [
        "https://example.com/image789.jpg",
        "https://example.com/image510.jpg",
        "https://example.com/image123.jpg",
        "https://example.com/image348.jpg",
        "https://example.com/image98.jpg",
      ],
      price: 6029,
      reviews: [
        {
          rating: 1,
          review: "مراجعة 582",
          user: "مستخدم 592",
        },
        {
          rating: 2,
          review: "مراجعة 659",
          user: "مستخدم 811",
        },
        {
          rating: 4,
          review: "مراجعة 374",
          user: "مستخدم 396",
        },
        {
          rating: 1,
          review: "مراجعة 462",
          user: "مستخدم 646",
        },
        {
          rating: 5,
          review: "مراجعة 345",
          user: "مستخدم 776",
        },
      ],
      overview: {
        highlights: "ميزات 648",
        overview: "نظرة عامة 685",
        specifications: [
          {
            "مواصفة 44": "قيمة 511",
          },
          {
            "مواصفة 38": "قيمة 246",
          },
          {
            "مواصفة 83": "قيمة 47",
          },
          {
            "مواصفة 67": "قيمة 245",
          },
          {
            "مواصفة 6": "قيمة 723",
          },
        ],
      },
    },
  },
  {
    id: "rsk1863y0wh",
    data: {
      discount: 40,
      name: "منتج 979",
      model: "موديل 76",
      stock: 703,
      subCategory: "فئة فرعية 1",
      category: "إلكترونيات",
      rating: 1,
      ratings: [
        {
          s98vxg7jbkd: 5,
        },
        {
          tdak8gpalhp: 2,
        },
        {
          vfhmrqf3zp: 1,
        },
        {
          "3fg30fylirg": 2,
        },
        {
          "0igc8oz17xm6": 3,
        },
        {
          hd3mj7scoa: 2,
        },
        {
          "0912gial25f3": 3,
        },
        {
          pwi07zls58i: 2,
        },
        {
          vplkpvlhpoj: 1,
        },
        {
          "710l7c5qexh": 1,
        },
      ],
      brand: "علامة تجارية 15",
      images: [
        "https://example.com/image247.jpg",
        "https://example.com/image528.jpg",
        "https://example.com/image186.jpg",
        "https://example.com/image231.jpg",
        "https://example.com/image952.jpg",
      ],
      price: 7749,
      reviews: [
        {
          rating: 4,
          review: "مراجعة 736",
          user: "مستخدم 400",
        },
        {
          rating: 2,
          review: "مراجعة 905",
          user: "مستخدم 590",
        },
        {
          rating: 5,
          review: "مراجعة 185",
          user: "مستخدم 116",
        },
        {
          rating: 5,
          review: "مراجعة 722",
          user: "مستخدم 566",
        },
        {
          rating: 2,
          review: "مراجعة 503",
          user: "مستخدم 363",
        },
      ],
      overview: {
        highlights: "ميزات 873",
        overview: "نظرة عامة 839",
        specifications: [
          {
            "مواصفة 18": "قيمة 801",
          },
          {
            "مواصفة 63": "قيمة 158",
          },
          {
            "مواصفة 58": "قيمة 133",
          },
          {
            "مواصفة 49": "قيمة 508",
          },
          {
            "مواصفة 37": "قيمة 594",
          },
        ],
      },
    },
  },
  {
    id: "ynnhrmwt9",
    data: {
      discount: 29,
      name: "منتج 87",
      model: "موديل 47",
      stock: 574,
      subCategory: "فئة فرعية 9",
      category: "رعاية المنزل والحيوانات الأليفة",
      rating: 3,
      ratings: [
        {
          lid3geaz9h: 4,
        },
        {
          "12hjhi3toikh": 1,
        },
        {
          lw60mhdb27: 1,
        },
        {
          vmzsdhs0qm: 2,
        },
        {
          a18ryqw2fbu: 5,
        },
        {
          rwkuwbko27f: 2,
        },
        {
          myovfyn5ap: 2,
        },
        {
          i5phfh4tre: 3,
        },
        {
          "230xvzhtbvb": 3,
        },
        {
          "7oa1wnyma0k": 3,
        },
      ],
      brand: "علامة تجارية 28",
      images: [
        "https://example.com/image344.jpg",
        "https://example.com/image363.jpg",
        "https://example.com/image6.jpg",
        "https://example.com/image41.jpg",
        "https://example.com/image381.jpg",
      ],
      price: 9356,
      reviews: [
        {
          rating: 4,
          review: "مراجعة 446",
          user: "مستخدم 945",
        },
        {
          rating: 1,
          review: "مراجعة 616",
          user: "مستخدم 744",
        },
        {
          rating: 4,
          review: "مراجعة 350",
          user: "مستخدم 283",
        },
        {
          rating: 4,
          review: "مراجعة 444",
          user: "مستخدم 566",
        },
        {
          rating: 4,
          review: "مراجعة 711",
          user: "مستخدم 366",
        },
      ],
      overview: {
        highlights: "ميزات 419",
        overview: "نظرة عامة 536",
        specifications: [
          {
            "مواصفة 40": "قيمة 91",
          },
          {
            "مواصفة 47": "قيمة 669",
          },
          {
            "مواصفة 32": "قيمة 715",
          },
          {
            "مواصفة 38": "قيمة 791",
          },
          {
            "مواصفة 30": "قيمة 441",
          },
        ],
      },
    },
  },
  {
    id: "pz45l7wldd",
    data: {
      discount: 1,
      name: "منتج 665",
      model: "موديل 9",
      stock: 659,
      subCategory: "فئة فرعية 8",
      category: "إلكترونيات",
      rating: 3,
      ratings: [
        {
          ipbisqyp427: 1,
        },
        {
          hynjmqy5ksp: 2,
        },
        {
          vfar1hzq9: 5,
        },
        {
          qrpo82lii7q: 5,
        },
        {
          vhb1ahu2os: 5,
        },
        {
          "6ott94dfn6u": 2,
        },
        {
          ifda1sw82v: 1,
        },
        {
          b9dchqy4mx: 5,
        },
        {
          eqh5syk0grr: 2,
        },
        {
          "21tb50q1vdo": 1,
        },
      ],
      brand: "علامة تجارية 67",
      images: [
        "https://example.com/image724.jpg",
        "https://example.com/image110.jpg",
        "https://example.com/image864.jpg",
        "https://example.com/image269.jpg",
        "https://example.com/image964.jpg",
      ],
      price: 7602,
      reviews: [
        {
          rating: 4,
          review: "مراجعة 457",
          user: "مستخدم 549",
        },
        {
          rating: 2,
          review: "مراجعة 912",
          user: "مستخدم 683",
        },
        {
          rating: 4,
          review: "مراجعة 698",
          user: "مستخدم 713",
        },
        {
          rating: 2,
          review: "مراجعة 779",
          user: "مستخدم 393",
        },
        {
          rating: 5,
          review: "مراجعة 0",
          user: "مستخدم 743",
        },
      ],
      overview: {
        highlights: "ميزات 83",
        overview: "نظرة عامة 386",
        specifications: [
          {
            "مواصفة 49": "قيمة 33",
          },
          {
            "مواصفة 85": "قيمة 525",
          },
          {
            "مواصفة 88": "قيمة 414",
          },
          {
            "مواصفة 25": "قيمة 482",
          },
          {
            "مواصفة 93": "قيمة 743",
          },
        ],
      },
    },
  },
  {
    id: "1t13q9tgklg",
    data: {
      discount: 10,
      name: "منتج 341",
      model: "موديل 38",
      stock: 440,
      subCategory: "فئة فرعية 7",
      category: "رعاية المنزل والحيوانات الأليفة",
      rating: 2,
      ratings: [
        {
          "70kvciie59b": 3,
        },
        {
          lup0kowiqd: 5,
        },
        {
          "7mgmok5sv1r": 4,
        },
        {
          po6pjrnyjel: 5,
        },
        {
          "000ihbcane1ad": 2,
        },
        {
          ur0zovgmt4b: 3,
        },
        {
          ulnru2y6l2: 3,
        },
        {
          "2wymd5smd8o": 5,
        },
        {
          d1wismp3kj: 5,
        },
        {
          v9dah5oa6x: 4,
        },
      ],
      brand: "علامة تجارية 85",
      images: [
        "https://example.com/image413.jpg",
        "https://example.com/image125.jpg",
        "https://example.com/image396.jpg",
        "https://example.com/image393.jpg",
        "https://example.com/image717.jpg",
      ],
      price: 7241,
      reviews: [
        {
          rating: 4,
          review: "مراجعة 491",
          user: "مستخدم 76",
        },
        {
          rating: 4,
          review: "مراجعة 411",
          user: "مستخدم 575",
        },
        {
          rating: 2,
          review: "مراجعة 340",
          user: "مستخدم 777",
        },
        {
          rating: 4,
          review: "مراجعة 223",
          user: "مستخدم 175",
        },
        {
          rating: 4,
          review: "مراجعة 34",
          user: "مستخدم 809",
        },
      ],
      overview: {
        highlights: "ميزات 352",
        overview: "نظرة عامة 868",
        specifications: [
          {
            "مواصفة 8": "قيمة 283",
          },
          {
            "مواصفة 53": "قيمة 135",
          },
          {
            "مواصفة 77": "قيمة 978",
          },
          {
            "مواصفة 45": "قيمة 920",
          },
          {
            "مواصفة 86": "قيمة 600",
          },
        ],
      },
    },
  },
  {
    id: "z48nx9j37ci",
    data: {
      discount: 41,
      name: "منتج 503",
      model: "موديل 70",
      stock: 701,
      subCategory: "فئة فرعية 7",
      category: "إلكترونيات",
      rating: 5,
      ratings: [
        {
          sq8662te8s8: 1,
        },
        {
          uo9kduacr7l: 3,
        },
        {
          "0c2o3ty52lm9": 2,
        },
        {
          lppnti46pyd: 2,
        },
        {
          u3z9diewjy: 4,
        },
        {
          oe5zmab1u18: 1,
        },
        {
          mhgbeyh3gyq: 2,
        },
        {
          "60btwyxm7pt": 3,
        },
        {
          blnivyk1d1u: 2,
        },
        {
          "90l641c9lti": 5,
        },
      ],
      brand: "علامة تجارية 43",
      images: [
        "https://example.com/image588.jpg",
        "https://example.com/image536.jpg",
        "https://example.com/image263.jpg",
        "https://example.com/image932.jpg",
        "https://example.com/image203.jpg",
      ],
      price: 6273,
      reviews: [
        {
          rating: 5,
          review: "مراجعة 854",
          user: "مستخدم 577",
        },
        {
          rating: 3,
          review: "مراجعة 487",
          user: "مستخدم 870",
        },
        {
          rating: 2,
          review: "مراجعة 628",
          user: "مستخدم 388",
        },
        {
          rating: 3,
          review: "مراجعة 30",
          user: "مستخدم 256",
        },
        {
          rating: 2,
          review: "مراجعة 875",
          user: "مستخدم 722",
        },
      ],
      overview: {
        highlights: "ميزات 66",
        overview: "نظرة عامة 192",
        specifications: [
          {
            "مواصفة 30": "قيمة 12",
          },
          {
            "مواصفة 28": "قيمة 996",
          },
          {
            "مواصفة 18": "قيمة 241",
          },
          {
            "مواصفة 17": "قيمة 784",
          },
          {
            "مواصفة 55": "قيمة 426",
          },
        ],
      },
    },
  },
  {
    id: "faucakxm2rb",
    data: {
      discount: 33,
      name: "منتج 473",
      model: "موديل 35",
      stock: 546,
      subCategory: "فئة فرعية 9",
      category: "الصحة والعناية الشخصية",
      rating: 3,
      ratings: [
        {
          "6hqvib14o5": 3,
        },
        {
          aplltx4cba: 2,
        },
        {
          li7p15kkp3: 1,
        },
        {
          uyht63vxfs: 3,
        },
        {
          x263rhtssrh: 3,
        },
        {
          "00t4a3d5de2i": 1,
        },
        {
          bdy7hrld49c: 5,
        },
        {
          l21av4g60j: 1,
        },
        {
          bk20x0e0k2: 4,
        },
        {
          nj2du7r2csf: 4,
        },
      ],
      brand: "علامة تجارية 13",
      images: [
        "https://example.com/image365.jpg",
        "https://example.com/image473.jpg",
        "https://example.com/image645.jpg",
        "https://example.com/image426.jpg",
        "https://example.com/image294.jpg",
      ],
      price: 2779,
      reviews: [
        {
          rating: 4,
          review: "مراجعة 935",
          user: "مستخدم 344",
        },
        {
          rating: 5,
          review: "مراجعة 415",
          user: "مستخدم 951",
        },
        {
          rating: 2,
          review: "مراجعة 585",
          user: "مستخدم 263",
        },
        {
          rating: 4,
          review: "مراجعة 493",
          user: "مستخدم 457",
        },
        {
          rating: 2,
          review: "مراجعة 192",
          user: "مستخدم 792",
        },
      ],
      overview: {
        highlights: "ميزات 409",
        overview: "نظرة عامة 691",
        specifications: [
          {
            "مواصفة 2": "قيمة 61",
          },
          {
            "مواصفة 46": "قيمة 99",
          },
          {
            "مواصفة 73": "قيمة 98",
          },
          {
            "مواصفة 82": "قيمة 263",
          },
          {
            "مواصفة 42": "قيمة 798",
          },
        ],
      },
    },
  },
  {
    id: "2mk45sasc0q",
    data: {
      discount: 0,
      name: "منتج 491",
      model: "موديل 26",
      stock: 455,
      subCategory: "فئة فرعية 1",
      category: "طعام",
      rating: 3,
      ratings: [
        {
          "4msofi0oouc": 4,
        },
        {
          "9lw2burd0wq": 3,
        },
        {
          y2kg521gqz: 4,
        },
        {
          f3sl4mzi4ap: 3,
        },
        {
          qzwu0r1t7q: 3,
        },
        {
          zh7pyvronrm: 1,
        },
        {
          ac4lhul25ff: 4,
        },
        {
          bu735jj1cbs: 1,
        },
        {
          "2bgthi9pk2h": 1,
        },
        {
          "1nv8qgm2ao7": 3,
        },
      ],
      brand: "علامة تجارية 49",
      images: [
        "https://example.com/image52.jpg",
        "https://example.com/image309.jpg",
        "https://example.com/image728.jpg",
        "https://example.com/image994.jpg",
        "https://example.com/image676.jpg",
      ],
      price: 7027,
      reviews: [
        {
          rating: 1,
          review: "مراجعة 483",
          user: "مستخدم 790",
        },
        {
          rating: 2,
          review: "مراجعة 592",
          user: "مستخدم 712",
        },
        {
          rating: 2,
          review: "مراجعة 302",
          user: "مستخدم 413",
        },
        {
          rating: 3,
          review: "مراجعة 376",
          user: "مستخدم 830",
        },
        {
          rating: 2,
          review: "مراجعة 525",
          user: "مستخدم 114",
        },
      ],
      overview: {
        highlights: "ميزات 117",
        overview: "نظرة عامة 611",
        specifications: [
          {
            "مواصفة 99": "قيمة 527",
          },
          {
            "مواصفة 67": "قيمة 133",
          },
          {
            "مواصفة 52": "قيمة 183",
          },
          {
            "مواصفة 45": "قيمة 798",
          },
          {
            "مواصفة 15": "قيمة 991",
          },
        ],
      },
    },
  },
  {
    id: "h0wi8cpvbgm",
    data: {
      discount: 0,
      name: "منتج 768",
      model: "موديل 79",
      stock: 413,
      subCategory: "فئة فرعية 7",
      category: "الصحة والعناية الشخصية",
      rating: 1,
      ratings: [
        {
          ig9qm36c9x: 1,
        },
        {
          "6m8zztzqm3y": 2,
        },
        {
          p6vqrsg3g7d: 2,
        },
        {
          "19c16brg2mz": 5,
        },
        {
          sxmil694cvs: 1,
        },
        {
          fkzgik65dew: 4,
        },
        {
          jv89istq9tq: 2,
        },
        {
          qt5ot5hhjr: 2,
        },
        {
          sb3zb4lg5s: 1,
        },
        {
          "9ay8qtexihv": 3,
        },
      ],
      brand: "علامة تجارية 72",
      images: [
        "https://example.com/image456.jpg",
        "https://example.com/image715.jpg",
        "https://example.com/image955.jpg",
        "https://example.com/image178.jpg",
        "https://example.com/image899.jpg",
      ],
      price: 212,
      reviews: [
        {
          rating: 5,
          review: "مراجعة 311",
          user: "مستخدم 758",
        },
        {
          rating: 1,
          review: "مراجعة 522",
          user: "مستخدم 350",
        },
        {
          rating: 5,
          review: "مراجعة 787",
          user: "مستخدم 931",
        },
        {
          rating: 1,
          review: "مراجعة 614",
          user: "مستخدم 521",
        },
        {
          rating: 4,
          review: "مراجعة 892",
          user: "مستخدم 64",
        },
      ],
      overview: {
        highlights: "ميزات 415",
        overview: "نظرة عامة 118",
        specifications: [
          {
            "مواصفة 91": "قيمة 796",
          },
          {
            "مواصفة 53": "قيمة 479",
          },
          {
            "مواصفة 43": "قيمة 334",
          },
          {
            "مواصفة 4": "قيمة 887",
          },
          {
            "مواصفة 20": "قيمة 503",
          },
        ],
      },
    },
  },
  {
    id: "hzy1a3v5sze",
    data: {
      discount: 42,
      name: "منتج 194",
      model: "موديل 9",
      stock: 609,
      subCategory: "فئة فرعية 9",
      category: "إلكترونيات",
      rating: 3,
      ratings: [
        {
          s0odiy5qxap: 4,
        },
        {
          kf6g6ur8l9g: 2,
        },
        {
          sk9guo2nnn: 1,
        },
        {
          fh5vbswsd0w: 1,
        },
        {
          "1nvjz3eyocd": 4,
        },
        {
          "066acpzlinah": 1,
        },
        {
          y3z7yamvmq: 5,
        },
        {
          wifrmgx6kqb: 4,
        },
        {
          lskl6ok6v4i: 1,
        },
        {
          qh3oevelbeb: 4,
        },
      ],
      brand: "علامة تجارية 75",
      images: [
        "https://example.com/image37.jpg",
        "https://example.com/image332.jpg",
        "https://example.com/image385.jpg",
        "https://example.com/image774.jpg",
        "https://example.com/image769.jpg",
      ],
      price: 8910,
      reviews: [
        {
          rating: 5,
          review: "مراجعة 281",
          user: "مستخدم 508",
        },
        {
          rating: 1,
          review: "مراجعة 875",
          user: "مستخدم 494",
        },
        {
          rating: 1,
          review: "مراجعة 703",
          user: "مستخدم 983",
        },
        {
          rating: 2,
          review: "مراجعة 97",
          user: "مستخدم 39",
        },
        {
          rating: 5,
          review: "مراجعة 501",
          user: "مستخدم 339",
        },
      ],
      overview: {
        highlights: "ميزات 880",
        overview: "نظرة عامة 345",
        specifications: [
          {
            "مواصفة 39": "قيمة 775",
          },
          {
            "مواصفة 66": "قيمة 989",
          },
          {
            "مواصفة 80": "قيمة 652",
          },
          {
            "مواصفة 66": "قيمة 527",
          },
          {
            "مواصفة 88": "قيمة 74",
          },
        ],
      },
    },
  },
  {
    id: "pfaid47pmwd",
    data: {
      discount: 47,
      name: "منتج 378",
      model: "موديل 48",
      stock: 912,
      subCategory: "فئة فرعية 8",
      category: "رعاية المنزل والحيوانات الأليفة",
      rating: 5,
      ratings: [
        {
          fkwndsva4ro: 3,
        },
        {
          bfj4a21bo2e: 3,
        },
        {
          upbro0r0039: 1,
        },
        {
          ev8fi95gcew: 4,
        },
        {
          vlg0vlu4dmi: 1,
        },
        {
          "6elf0zcd858": 1,
        },
        {
          r816awqvmur: 5,
        },
        {
          h9izzk9buxh: 4,
        },
        {
          rxh759pqw5o: 3,
        },
        {
          kby8oo024q: 3,
        },
      ],
      brand: "علامة تجارية 77",
      images: [
        "https://example.com/image237.jpg",
        "https://example.com/image797.jpg",
        "https://example.com/image247.jpg",
        "https://example.com/image701.jpg",
        "https://example.com/image932.jpg",
      ],
      price: 9499,
      reviews: [
        {
          rating: 2,
          review: "مراجعة 446",
          user: "مستخدم 873",
        },
        {
          rating: 1,
          review: "مراجعة 155",
          user: "مستخدم 895",
        },
        {
          rating: 1,
          review: "مراجعة 550",
          user: "مستخدم 776",
        },
        {
          rating: 4,
          review: "مراجعة 736",
          user: "مستخدم 888",
        },
        {
          rating: 4,
          review: "مراجعة 17",
          user: "مستخدم 59",
        },
      ],
      overview: {
        highlights: "ميزات 811",
        overview: "نظرة عامة 637",
        specifications: [
          {
            "مواصفة 93": "قيمة 463",
          },
          {
            "مواصفة 47": "قيمة 514",
          },
          {
            "مواصفة 8": "قيمة 809",
          },
          {
            "مواصفة 92": "قيمة 59",
          },
          {
            "مواصفة 34": "قيمة 614",
          },
        ],
      },
    },
  },
  {
    id: "a2ineveyab9",
    data: {
      discount: 48,
      name: "منتج 331",
      model: "موديل 85",
      stock: 558,
      subCategory: "فئة فرعية 9",
      category: "إلكترونيات",
      rating: 4,
      ratings: [
        {
          utocj365hcj: 1,
        },
        {
          qmcxqw9ksb: 2,
        },
        {
          d22gn0hl1zm: 4,
        },
        {
          m5im8fid19: 3,
        },
        {
          us7tqw8wri: 3,
        },
        {
          c6j4sk6g1b: 4,
        },
        {
          g45tzl4iiu8: 1,
        },
        {
          "702hb4axfj6": 5,
        },
        {
          dk0c2hvg965: 4,
        },
        {
          "1rnk7pffy08": 2,
        },
      ],
      brand: "علامة تجارية 28",
      images: [
        "https://example.com/image67.jpg",
        "https://example.com/image791.jpg",
        "https://example.com/image569.jpg",
        "https://example.com/image680.jpg",
        "https://example.com/image631.jpg",
      ],
      price: 5644,
      reviews: [
        {
          rating: 5,
          review: "مراجعة 311",
          user: "مستخدم 236",
        },
        {
          rating: 5,
          review: "مراجعة 912",
          user: "مستخدم 980",
        },
        {
          rating: 2,
          review: "مراجعة 694",
          user: "مستخدم 404",
        },
        {
          rating: 5,
          review: "مراجعة 897",
          user: "مستخدم 330",
        },
        {
          rating: 1,
          review: "مراجعة 52",
          user: "مستخدم 677",
        },
      ],
      overview: {
        highlights: "ميزات 279",
        overview: "نظرة عامة 579",
        specifications: [
          {
            "مواصفة 75": "قيمة 236",
          },
          {
            "مواصفة 62": "قيمة 396",
          },
          {
            "مواصفة 56": "قيمة 139",
          },
          {
            "مواصفة 83": "قيمة 118",
          },
          {
            "مواصفة 88": "قيمة 823",
          },
        ],
      },
    },
  },
  {
    id: "jh2eprdp48e",
    data: {
      discount: 43,
      name: "منتج 660",
      model: "موديل 93",
      stock: 243,
      subCategory: "فئة فرعية 2",
      category: "طعام",
      rating: 4,
      ratings: [
        {
          ewg74we37ut: 2,
        },
        {
          rj8sxb51t7e: 2,
        },
        {
          zux7gevxldj: 5,
        },
        {
          fmhc2sps7n: 4,
        },
        {
          "274t86niidn": 4,
        },
        {
          t77c1tp67lf: 4,
        },
        {
          "1ub5byg8uy9": 4,
        },
        {
          "1pzykxhvjxc": 2,
        },
        {
          jam1i5ee7e: 4,
        },
        {
          d9ky5l2la1s: 4,
        },
      ],
      brand: "علامة تجارية 83",
      images: [
        "https://example.com/image159.jpg",
        "https://example.com/image962.jpg",
        "https://example.com/image704.jpg",
        "https://example.com/image381.jpg",
        "https://example.com/image187.jpg",
      ],
      price: 7926,
      reviews: [
        {
          rating: 4,
          review: "مراجعة 580",
          user: "مستخدم 62",
        },
        {
          rating: 3,
          review: "مراجعة 683",
          user: "مستخدم 215",
        },
        {
          rating: 2,
          review: "مراجعة 663",
          user: "مستخدم 54",
        },
        {
          rating: 4,
          review: "مراجعة 79",
          user: "مستخدم 622",
        },
        {
          rating: 1,
          review: "مراجعة 49",
          user: "مستخدم 906",
        },
      ],
      overview: {
        highlights: "ميزات 660",
        overview: "نظرة عامة 521",
        specifications: [
          {
            "مواصفة 11": "قيمة 75",
          },
          {
            "مواصفة 4": "قيمة 71",
          },
          {
            "مواصفة 70": "قيمة 337",
          },
          {
            "مواصفة 75": "قيمة 936",
          },
          {
            "مواصفة 45": "قيمة 528",
          },
        ],
      },
    },
  },
  {
    id: "947hp6yl47s",
    data: {
      discount: 18,
      name: "منتج 932",
      model: "موديل 44",
      stock: 427,
      subCategory: "فئة فرعية 7",
      category: "الصحة والعناية الشخصية",
      rating: 4,
      ratings: [
        {
          "5p7um2kbacy": 3,
        },
        {
          z5i2d560que: 1,
        },
        {
          dvk8cunqcet: 1,
        },
        {
          "490kybe50u9": 3,
        },
        {
          z42r0sp4g3i: 2,
        },
        {
          pbuobbj7qfc: 2,
        },
        {
          hdjwwaqo80t: 1,
        },
        {
          e9v8dixnocl: 2,
        },
        {
          "0ep95ukx7dc": 5,
        },
        {
          ax8i4dhipuv: 5,
        },
      ],
      brand: "علامة تجارية 76",
      images: [
        "https://example.com/image424.jpg",
        "https://example.com/image777.jpg",
        "https://example.com/image74.jpg",
        "https://example.com/image541.jpg",
        "https://example.com/image697.jpg",
      ],
      price: 2207,
      reviews: [
        {
          rating: 4,
          review: "مراجعة 422",
          user: "مستخدم 850",
        },
        {
          rating: 3,
          review: "مراجعة 77",
          user: "مستخدم 802",
        },
        {
          rating: 5,
          review: "مراجعة 92",
          user: "مستخدم 191",
        },
        {
          rating: 4,
          review: "مراجعة 612",
          user: "مستخدم 366",
        },
        {
          rating: 4,
          review: "مراجعة 76",
          user: "مستخدم 258",
        },
      ],
      overview: {
        highlights: "ميزات 398",
        overview: "نظرة عامة 261",
        specifications: [
          {
            "مواصفة 85": "قيمة 216",
          },
          {
            "مواصفة 42": "قيمة 638",
          },
          {
            "مواصفة 80": "قيمة 883",
          },
          {
            "مواصفة 95": "قيمة 351",
          },
          {
            "مواصفة 86": "قيمة 273",
          },
        ],
      },
    },
  },
  {
    id: "f1ppfe7ibis",
    data: {
      discount: 26,
      name: "منتج 37",
      model: "موديل 65",
      stock: 784,
      subCategory: "فئة فرعية 8",
      category: "إلكترونيات",
      rating: 4,
      ratings: [
        {
          "8aay11qnton": 1,
        },
        {
          "1y04572bqa4": 2,
        },
        {
          ays9p3fx43: 3,
        },
        {
          zxjo1fbyz6g: 4,
        },
        {
          "5v3vlj9g6uw": 2,
        },
        {
          av26appr72v: 3,
        },
        {
          bvezo1ikb5s: 2,
        },
        {
          wkr5mhipx39: 3,
        },
        {
          kiv50u334p: 5,
        },
        {
          irhkqdt860d: 3,
        },
      ],
      brand: "علامة تجارية 20",
      images: [
        "https://example.com/image520.jpg",
        "https://example.com/image621.jpg",
        "https://example.com/image121.jpg",
        "https://example.com/image543.jpg",
        "https://example.com/image57.jpg",
      ],
      price: 625,
      reviews: [
        {
          rating: 5,
          review: "مراجعة 334",
          user: "مستخدم 440",
        },
        {
          rating: 2,
          review: "مراجعة 105",
          user: "مستخدم 352",
        },
        {
          rating: 5,
          review: "مراجعة 829",
          user: "مستخدم 778",
        },
        {
          rating: 3,
          review: "مراجعة 742",
          user: "مستخدم 188",
        },
        {
          rating: 3,
          review: "مراجعة 853",
          user: "مستخدم 217",
        },
      ],
      overview: {
        highlights: "ميزات 502",
        overview: "نظرة عامة 122",
        specifications: [
          {
            "مواصفة 34": "قيمة 131",
          },
          {
            "مواصفة 32": "قيمة 945",
          },
          {
            "مواصفة 54": "قيمة 371",
          },
          {
            "مواصفة 74": "قيمة 937",
          },
          {
            "مواصفة 58": "قيمة 720",
          },
        ],
      },
    },
  },
  {
    id: "pfomsvfwwo",
    data: {
      discount: 41,
      name: "منتج 789",
      model: "موديل 20",
      stock: 990,
      subCategory: "فئة فرعية 6",
      category: "الطفل",
      rating: 4,
      ratings: [
        {
          scdw20v9caf: 4,
        },
        {
          t4ptoopqz9: 1,
        },
        {
          "2os9g0d2hzg": 1,
        },
        {
          yaw12m976d: 3,
        },
        {
          lg4l2ch1pk9: 2,
        },
        {
          "72oeztjll1a": 4,
        },
        {
          drksilfxx89: 3,
        },
        {
          "87mir6atgic": 5,
        },
        {
          "9c2we53jo8": 5,
        },
        {
          lr1y1qao70q: 4,
        },
      ],
      brand: "علامة تجارية 85",
      images: [
        "https://example.com/image780.jpg",
        "https://example.com/image198.jpg",
        "https://example.com/image519.jpg",
        "https://example.com/image653.jpg",
        "https://example.com/image391.jpg",
      ],
      price: 2587,
      reviews: [
        {
          rating: 4,
          review: "مراجعة 889",
          user: "مستخدم 55",
        },
        {
          rating: 4,
          review: "مراجعة 406",
          user: "مستخدم 819",
        },
        {
          rating: 2,
          review: "مراجعة 813",
          user: "مستخدم 895",
        },
        {
          rating: 3,
          review: "مراجعة 861",
          user: "مستخدم 617",
        },
        {
          rating: 3,
          review: "مراجعة 814",
          user: "مستخدم 255",
        },
      ],
      overview: {
        highlights: "ميزات 732",
        overview: "نظرة عامة 772",
        specifications: [
          {
            "مواصفة 92": "قيمة 21",
          },
          {
            "مواصفة 57": "قيمة 290",
          },
          {
            "مواصفة 73": "قيمة 438",
          },
          {
            "مواصفة 59": "قيمة 427",
          },
          {
            "مواصفة 84": "قيمة 585",
          },
        ],
      },
    },
  },
  {
    id: "rnjh45eqzdm",
    data: {
      discount: 19,
      name: "منتج 815",
      model: "موديل 56",
      stock: 399,
      subCategory: "فئة فرعية 5",
      category: "طعام",
      rating: 1,
      ratings: [
        {
          "45iquka6log": 2,
        },
        {
          qbx2kpf93y: 2,
        },
        {
          "1h3p6p0ha3pi": 2,
        },
        {
          c6kxrmn0omf: 4,
        },
        {
          astr3v1k06d: 2,
        },
        {
          "7w8dxfit77x": 3,
        },
        {
          u1gz4xfkger: 4,
        },
        {
          wtg93232q1l: 2,
        },
        {
          jh2r7r1h63r: 4,
        },
        {
          a2p9ge9n2hc: 4,
        },
      ],
      brand: "علامة تجارية 13",
      images: [
        "https://example.com/image570.jpg",
        "https://example.com/image422.jpg",
        "https://example.com/image154.jpg",
        "https://example.com/image789.jpg",
        "https://example.com/image230.jpg",
      ],
      price: 7853,
      reviews: [
        {
          rating: 4,
          review: "مراجعة 552",
          user: "مستخدم 506",
        },
        {
          rating: 2,
          review: "مراجعة 426",
          user: "مستخدم 623",
        },
        {
          rating: 1,
          review: "مراجعة 562",
          user: "مستخدم 788",
        },
        {
          rating: 2,
          review: "مراجعة 672",
          user: "مستخدم 297",
        },
        {
          rating: 2,
          review: "مراجعة 836",
          user: "مستخدم 828",
        },
      ],
      overview: {
        highlights: "ميزات 238",
        overview: "نظرة عامة 479",
        specifications: [
          {
            "مواصفة 27": "قيمة 681",
          },
          {
            "مواصفة 79": "قيمة 593",
          },
          {
            "مواصفة 14": "قيمة 891",
          },
          {
            "مواصفة 78": "قيمة 881",
          },
          {
            "مواصفة 47": "قيمة 785",
          },
        ],
      },
    },
  },
  {
    id: "tyqiwcyrff",
    data: {
      discount: 11,
      name: "منتج 211",
      model: "موديل 24",
      stock: 959,
      subCategory: "فئة فرعية 0",
      category: "رعاية المنزل والحيوانات الأليفة",
      rating: 2,
      ratings: [
        {
          "5tfl4a3hwcj": 5,
        },
        {
          "9qw8mjq2bxu": 1,
        },
        {
          hn1o3r5qod: 5,
        },
        {
          "8ohywwws5sv": 1,
        },
        {
          ic61ppwapr8: 3,
        },
        {
          qihoyamcxl: 4,
        },
        {
          llj6x5s7be: 1,
        },
        {
          lffifk1duu: 2,
        },
        {
          c7zc1qxcgsu: 3,
        },
        {
          shov3os6lfp: 2,
        },
      ],
      brand: "علامة تجارية 48",
      images: [
        "https://example.com/image571.jpg",
        "https://example.com/image683.jpg",
        "https://example.com/image562.jpg",
        "https://example.com/image118.jpg",
        "https://example.com/image889.jpg",
      ],
      price: 1568,
      reviews: [
        {
          rating: 4,
          review: "مراجعة 425",
          user: "مستخدم 213",
        },
        {
          rating: 1,
          review: "مراجعة 472",
          user: "مستخدم 606",
        },
        {
          rating: 4,
          review: "مراجعة 45",
          user: "مستخدم 969",
        },
        {
          rating: 5,
          review: "مراجعة 146",
          user: "مستخدم 868",
        },
        {
          rating: 3,
          review: "مراجعة 486",
          user: "مستخدم 582",
        },
      ],
      overview: {
        highlights: "ميزات 977",
        overview: "نظرة عامة 673",
        specifications: [
          {
            "مواصفة 38": "قيمة 114",
          },
          {
            "مواصفة 92": "قيمة 142",
          },
          {
            "مواصفة 46": "قيمة 729",
          },
          {
            "مواصفة 39": "قيمة 260",
          },
          {
            "مواصفة 78": "قيمة 78",
          },
        ],
      },
    },
  },
  {
    id: "cf432gcqxq8",
    data: {
      discount: 10,
      name: "منتج 675",
      model: "موديل 1",
      stock: 889,
      subCategory: "فئة فرعية 8",
      category: "الطفل",
      rating: 5,
      ratings: [
        {
          ketaegffv9r: 4,
        },
        {
          "11ebtnbgx6v": 2,
        },
        {
          c4t0wa4ube: 5,
        },
        {
          "03kzrlbhyg9w": 1,
        },
        {
          myvisx5te6q: 1,
        },
        {
          thn7i63im8: 4,
        },
        {
          "5m23mzuxygf": 4,
        },
        {
          "34p68o1dnw2": 1,
        },
        {
          snzj2vqfkth: 4,
        },
        {
          fzj333hig7s: 3,
        },
      ],
      brand: "علامة تجارية 18",
      images: [
        "https://example.com/image445.jpg",
        "https://example.com/image463.jpg",
        "https://example.com/image809.jpg",
        "https://example.com/image405.jpg",
        "https://example.com/image724.jpg",
      ],
      price: 3884,
      reviews: [
        {
          rating: 1,
          review: "مراجعة 564",
          user: "مستخدم 39",
        },
        {
          rating: 5,
          review: "مراجعة 804",
          user: "مستخدم 594",
        },
        {
          rating: 5,
          review: "مراجعة 619",
          user: "مستخدم 66",
        },
        {
          rating: 4,
          review: "مراجعة 597",
          user: "مستخدم 764",
        },
        {
          rating: 3,
          review: "مراجعة 561",
          user: "مستخدم 365",
        },
      ],
      overview: {
        highlights: "ميزات 92",
        overview: "نظرة عامة 459",
        specifications: [
          {
            "مواصفة 37": "قيمة 755",
          },
          {
            "مواصفة 65": "قيمة 940",
          },
          {
            "مواصفة 3": "قيمة 663",
          },
          {
            "مواصفة 1": "قيمة 439",
          },
          {
            "مواصفة 86": "قيمة 166",
          },
        ],
      },
    },
  },
  {
    id: "klvdw63zx3h",
    data: {
      discount: 39,
      name: "منتج 503",
      model: "موديل 63",
      stock: 416,
      subCategory: "فئة فرعية 3",
      category: "رعاية المنزل والحيوانات الأليفة",
      rating: 3,
      ratings: [
        {
          li7gpt6z9ke: 1,
        },
        {
          od2uvd1uj1g: 3,
        },
        {
          "5xwtppcivh": 5,
        },
        {
          sukjbco7kmn: 2,
        },
        {
          cpi54x2jau: 2,
        },
        {
          "46exaih3acs": 2,
        },
        {
          "08z36j33dwar": 1,
        },
        {
          st2sbpgh8vl: 3,
        },
        {
          of5hi66qsrp: 2,
        },
        {
          x9n91o4tj19: 4,
        },
      ],
      brand: "علامة تجارية 77",
      images: [
        "https://example.com/image320.jpg",
        "https://example.com/image352.jpg",
        "https://example.com/image66.jpg",
        "https://example.com/image387.jpg",
        "https://example.com/image385.jpg",
      ],
      price: 7836,
      reviews: [
        {
          rating: 1,
          review: "مراجعة 45",
          user: "مستخدم 734",
        },
        {
          rating: 3,
          review: "مراجعة 593",
          user: "مستخدم 832",
        },
        {
          rating: 5,
          review: "مراجعة 149",
          user: "مستخدم 583",
        },
        {
          rating: 3,
          review: "مراجعة 104",
          user: "مستخدم 279",
        },
        {
          rating: 2,
          review: "مراجعة 804",
          user: "مستخدم 262",
        },
      ],
      overview: {
        highlights: "ميزات 305",
        overview: "نظرة عامة 479",
        specifications: [
          {
            "مواصفة 86": "قيمة 516",
          },
          {
            "مواصفة 52": "قيمة 673",
          },
          {
            "مواصفة 72": "قيمة 402",
          },
          {
            "مواصفة 59": "قيمة 98",
          },
          {
            "مواصفة 0": "قيمة 360",
          },
        ],
      },
    },
  },
  {
    id: "o0pcyfe2l2q",
    data: {
      discount: 3,
      name: "منتج 386",
      model: "موديل 80",
      stock: 458,
      subCategory: "فئة فرعية 9",
      category: "طعام",
      rating: 4,
      ratings: [
        {
          "2o9s8htyvv9": 2,
        },
        {
          jxj3txzdbwp: 4,
        },
        {
          zcgxkhg9ngk: 2,
        },
        {
          "5z7b9udy02m": 4,
        },
        {
          "7r38ozm9m9p": 2,
        },
        {
          mf1slm5a5m: 3,
        },
        {
          d15w1xeu6be: 5,
        },
        {
          ysf7rqew6uq: 3,
        },
        {
          iivz17oihtg: 5,
        },
        {
          hfl3sogsfk: 2,
        },
      ],
      brand: "علامة تجارية 79",
      images: [
        "https://example.com/image439.jpg",
        "https://example.com/image609.jpg",
        "https://example.com/image577.jpg",
        "https://example.com/image157.jpg",
        "https://example.com/image485.jpg",
      ],
      price: 6617,
      reviews: [
        {
          rating: 1,
          review: "مراجعة 704",
          user: "مستخدم 767",
        },
        {
          rating: 3,
          review: "مراجعة 163",
          user: "مستخدم 723",
        },
        {
          rating: 1,
          review: "مراجعة 666",
          user: "مستخدم 341",
        },
        {
          rating: 1,
          review: "مراجعة 18",
          user: "مستخدم 807",
        },
        {
          rating: 1,
          review: "مراجعة 930",
          user: "مستخدم 968",
        },
      ],
      overview: {
        highlights: "ميزات 599",
        overview: "نظرة عامة 394",
        specifications: [
          {
            "مواصفة 10": "قيمة 670",
          },
          {
            "مواصفة 55": "قيمة 215",
          },
          {
            "مواصفة 45": "قيمة 188",
          },
          {
            "مواصفة 92": "قيمة 606",
          },
          {
            "مواصفة 54": "قيمة 201",
          },
        ],
      },
    },
  },
  {
    id: "c6xjdqb6qm5",
    data: {
      discount: 27,
      name: "منتج 36",
      model: "موديل 20",
      stock: 598,
      subCategory: "فئة فرعية 8",
      category: "إلكترونيات",
      rating: 1,
      ratings: [
        {
          "3l67uume3na": 4,
        },
        {
          ptcyheyhmbd: 5,
        },
        {
          sjhflpfy93t: 2,
        },
        {
          ezbxqnev8s6: 3,
        },
        {
          v7vxg11hboc: 3,
        },
        {
          flij0syknd: 3,
        },
        {
          "8df35q1uzu": 1,
        },
        {
          udrjrpuxpnl: 1,
        },
        {
          r5h815uve4k: 4,
        },
        {
          ldg0vjwbn77: 2,
        },
      ],
      brand: "علامة تجارية 70",
      images: [
        "https://example.com/image261.jpg",
        "https://example.com/image57.jpg",
        "https://example.com/image301.jpg",
        "https://example.com/image538.jpg",
        "https://example.com/image339.jpg",
      ],
      price: 9281,
      reviews: [
        {
          rating: 3,
          review: "مراجعة 858",
          user: "مستخدم 9",
        },
        {
          rating: 3,
          review: "مراجعة 450",
          user: "مستخدم 247",
        },
        {
          rating: 3,
          review: "مراجعة 968",
          user: "مستخدم 195",
        },
        {
          rating: 1,
          review: "مراجعة 97",
          user: "مستخدم 904",
        },
        {
          rating: 2,
          review: "مراجعة 360",
          user: "مستخدم 430",
        },
      ],
      overview: {
        highlights: "ميزات 160",
        overview: "نظرة عامة 939",
        specifications: [
          {
            "مواصفة 71": "قيمة 357",
          },
          {
            "مواصفة 90": "قيمة 683",
          },
          {
            "مواصفة 92": "قيمة 240",
          },
          {
            "مواصفة 34": "قيمة 386",
          },
          {
            "مواصفة 74": "قيمة 401",
          },
        ],
      },
    },
  },
  {
    id: "uv9a5oe3eqp",
    data: {
      discount: 22,
      name: "منتج 56",
      model: "موديل 7",
      stock: 172,
      subCategory: "فئة فرعية 9",
      category: "طعام",
      rating: 5,
      ratings: [
        {
          xwy1ai3okoc: 1,
        },
        {
          kemfap5kjfo: 2,
        },
        {
          "31t38xtig7p": 2,
        },
        {
          "72sl4s8lshj": 3,
        },
        {
          "9tkc0d8b8a": 5,
        },
        {
          "3d8k4plg9gc": 5,
        },
        {
          nbf59vy9gqb: 4,
        },
        {
          dyietnpvnak: 4,
        },
        {
          hux540rdvl: 5,
        },
        {
          gjfvcwpu3bg: 5,
        },
      ],
      brand: "علامة تجارية 3",
      images: [
        "https://example.com/image760.jpg",
        "https://example.com/image133.jpg",
        "https://example.com/image750.jpg",
        "https://example.com/image370.jpg",
        "https://example.com/image492.jpg",
      ],
      price: 3378,
      reviews: [
        {
          rating: 3,
          review: "مراجعة 980",
          user: "مستخدم 602",
        },
        {
          rating: 2,
          review: "مراجعة 784",
          user: "مستخدم 774",
        },
        {
          rating: 4,
          review: "مراجعة 441",
          user: "مستخدم 366",
        },
        {
          rating: 2,
          review: "مراجعة 832",
          user: "مستخدم 237",
        },
        {
          rating: 4,
          review: "مراجعة 903",
          user: "مستخدم 780",
        },
      ],
      overview: {
        highlights: "ميزات 76",
        overview: "نظرة عامة 17",
        specifications: [
          {
            "مواصفة 0": "قيمة 185",
          },
          {
            "مواصفة 71": "قيمة 382",
          },
          {
            "مواصفة 26": "قيمة 489",
          },
          {
            "مواصفة 75": "قيمة 235",
          },
          {
            "مواصفة 74": "قيمة 893",
          },
        ],
      },
    },
  },
  {
    id: "qpzwcw2e38h",
    data: {
      discount: 9,
      name: "منتج 318",
      model: "موديل 11",
      stock: 283,
      subCategory: "فئة فرعية 1",
      category: "المشروبات",
      rating: 3,
      ratings: [
        {
          h2gd1pe0dyu: 3,
        },
        {
          "5l65ard707o": 4,
        },
        {
          "8qprcqw550w": 4,
        },
        {
          "5eia7w3wojd": 2,
        },
        {
          nu0fxndr66k: 4,
        },
        {
          "9jp3ux10adw": 4,
        },
        {
          xtnp380xakm: 4,
        },
        {
          o6rsm4h6yui: 1,
        },
        {
          "9wa2dt6mlkd": 3,
        },
        {
          "831qucj7efi": 3,
        },
      ],
      brand: "علامة تجارية 3",
      images: [
        "https://example.com/image229.jpg",
        "https://example.com/image47.jpg",
        "https://example.com/image568.jpg",
        "https://example.com/image348.jpg",
        "https://example.com/image90.jpg",
      ],
      price: 1127,
      reviews: [
        {
          rating: 2,
          review: "مراجعة 233",
          user: "مستخدم 415",
        },
        {
          rating: 1,
          review: "مراجعة 225",
          user: "مستخدم 98",
        },
        {
          rating: 5,
          review: "مراجعة 323",
          user: "مستخدم 185",
        },
        {
          rating: 3,
          review: "مراجعة 76",
          user: "مستخدم 24",
        },
        {
          rating: 2,
          review: "مراجعة 254",
          user: "مستخدم 566",
        },
      ],
      overview: {
        highlights: "ميزات 558",
        overview: "نظرة عامة 698",
        specifications: [
          {
            "مواصفة 93": "قيمة 366",
          },
          {
            "مواصفة 25": "قيمة 754",
          },
          {
            "مواصفة 10": "قيمة 634",
          },
          {
            "مواصفة 64": "قيمة 147",
          },
          {
            "مواصفة 24": "قيمة 593",
          },
        ],
      },
    },
  },
  {
    id: "q0h0oz2g4p",
    data: {
      discount: 43,
      name: "منتج 319",
      model: "موديل 39",
      stock: 616,
      subCategory: "فئة فرعية 4",
      category: "الطفل",
      rating: 1,
      ratings: [
        {
          "99rfm3k8xsb": 4,
        },
        {
          mk8u6iwndaj: 2,
        },
        {
          "9xzkl0oohjc": 1,
        },
        {
          bj2nd6fb7qb: 5,
        },
        {
          "0ig2wtmx6rz6": 4,
        },
        {
          "9ebnx04hmyo": 4,
        },
        {
          sntfoywscmf: 2,
        },
        {
          "6sahh8ytqq": 2,
        },
        {
          iao2hyensmr: 1,
        },
        {
          d1l3eaw64tb: 5,
        },
      ],
      brand: "علامة تجارية 22",
      images: [
        "https://example.com/image639.jpg",
        "https://example.com/image127.jpg",
        "https://example.com/image522.jpg",
        "https://example.com/image192.jpg",
        "https://example.com/image873.jpg",
      ],
      price: 2698,
      reviews: [
        {
          rating: 4,
          review: "مراجعة 312",
          user: "مستخدم 735",
        },
        {
          rating: 1,
          review: "مراجعة 496",
          user: "مستخدم 956",
        },
        {
          rating: 5,
          review: "مراجعة 979",
          user: "مستخدم 181",
        },
        {
          rating: 4,
          review: "مراجعة 163",
          user: "مستخدم 108",
        },
        {
          rating: 5,
          review: "مراجعة 506",
          user: "مستخدم 21",
        },
      ],
      overview: {
        highlights: "ميزات 319",
        overview: "نظرة عامة 831",
        specifications: [
          {
            "مواصفة 17": "قيمة 529",
          },
          {
            "مواصفة 28": "قيمة 766",
          },
          {
            "مواصفة 49": "قيمة 871",
          },
          {
            "مواصفة 94": "قيمة 308",
          },
          {
            "مواصفة 40": "قيمة 387",
          },
        ],
      },
    },
  },
  {
    id: "avx2xq2h2r",
    data: {
      discount: 9,
      name: "منتج 685",
      model: "موديل 28",
      stock: 455,
      subCategory: "فئة فرعية 8",
      category: "المشروبات",
      rating: 1,
      ratings: [
        {
          hro2vcqjvlj: 2,
        },
        {
          djdspujkjmo: 2,
        },
        {
          ct589t4rtcm: 5,
        },
        {
          zs3ebeh0krf: 1,
        },
        {
          srpsygn7ygb: 4,
        },
        {
          "0rgynkvg7zd": 3,
        },
        {
          "8wssks42tby": 2,
        },
        {
          vonewjmi1zo: 1,
        },
        {
          ftbfoj0soeh: 4,
        },
        {
          jc5v2o9txib: 2,
        },
      ],
      brand: "علامة تجارية 39",
      images: [
        "https://example.com/image240.jpg",
        "https://example.com/image152.jpg",
        "https://example.com/image116.jpg",
        "https://example.com/image248.jpg",
        "https://example.com/image539.jpg",
      ],
      price: 5737,
      reviews: [
        {
          rating: 1,
          review: "مراجعة 616",
          user: "مستخدم 946",
        },
        {
          rating: 2,
          review: "مراجعة 652",
          user: "مستخدم 851",
        },
        {
          rating: 3,
          review: "مراجعة 718",
          user: "مستخدم 732",
        },
        {
          rating: 3,
          review: "مراجعة 359",
          user: "مستخدم 317",
        },
        {
          rating: 1,
          review: "مراجعة 610",
          user: "مستخدم 319",
        },
      ],
      overview: {
        highlights: "ميزات 250",
        overview: "نظرة عامة 117",
        specifications: [
          {
            "مواصفة 9": "قيمة 820",
          },
          {
            "مواصفة 96": "قيمة 755",
          },
          {
            "مواصفة 25": "قيمة 629",
          },
          {
            "مواصفة 44": "قيمة 279",
          },
          {
            "مواصفة 87": "قيمة 434",
          },
        ],
      },
    },
  },
  {
    id: "1kamsiurs93",
    data: {
      discount: 22,
      name: "منتج 947",
      model: "موديل 87",
      stock: 213,
      subCategory: "فئة فرعية 7",
      category: "إلكترونيات",
      rating: 2,
      ratings: [
        {
          cdp744ebxnd: 4,
        },
        {
          hvsxnhtw1lr: 2,
        },
        {
          vufqy4u0u4: 3,
        },
        {
          "4nz3sb3v9": 1,
        },
        {
          g4bxcoc7fl: 3,
        },
        {
          yiae3j2nuah: 2,
        },
        {
          "3twpr63dl2r": 1,
        },
        {
          mr8af6wnc7b: 3,
        },
        {
          mdysyxdi4oj: 2,
        },
        {
          gmxmim95b76: 5,
        },
      ],
      brand: "علامة تجارية 64",
      images: [
        "https://example.com/image240.jpg",
        "https://example.com/image812.jpg",
        "https://example.com/image770.jpg",
        "https://example.com/image116.jpg",
        "https://example.com/image140.jpg",
      ],
      price: 5276,
      reviews: [
        {
          rating: 5,
          review: "مراجعة 713",
          user: "مستخدم 258",
        },
        {
          rating: 1,
          review: "مراجعة 370",
          user: "مستخدم 871",
        },
        {
          rating: 3,
          review: "مراجعة 681",
          user: "مستخدم 373",
        },
        {
          rating: 5,
          review: "مراجعة 423",
          user: "مستخدم 95",
        },
        {
          rating: 3,
          review: "مراجعة 17",
          user: "مستخدم 238",
        },
      ],
      overview: {
        highlights: "ميزات 155",
        overview: "نظرة عامة 529",
        specifications: [
          {
            "مواصفة 60": "قيمة 698",
          },
          {
            "مواصفة 53": "قيمة 670",
          },
          {
            "مواصفة 49": "قيمة 707",
          },
          {
            "مواصفة 72": "قيمة 32",
          },
          {
            "مواصفة 12": "قيمة 289",
          },
        ],
      },
    },
  },
  {
    id: "tw51ruq0k6c",
    data: {
      discount: 40,
      name: "منتج 337",
      model: "موديل 96",
      stock: 143,
      subCategory: "فئة فرعية 1",
      category: "الصحة والعناية الشخصية",
      rating: 3,
      ratings: [
        {
          u2pznc0j6bn: 5,
        },
        {
          gtax347qmgr: 2,
        },
        {
          ai1a6wzw82i: 2,
        },
        {
          s5v8dci78u: 4,
        },
        {
          hj56lecoby: 4,
        },
        {
          y9v7mu7xx1t: 5,
        },
        {
          htawhkcaxw: 4,
        },
        {
          olov4ejfr5: 1,
        },
        {
          qg5y1wxhb8i: 3,
        },
        {
          "9bvegxnstd": 2,
        },
      ],
      brand: "علامة تجارية 49",
      images: [
        "https://example.com/image113.jpg",
        "https://example.com/image735.jpg",
        "https://example.com/image750.jpg",
        "https://example.com/image561.jpg",
        "https://example.com/image222.jpg",
      ],
      price: 4543,
      reviews: [
        {
          rating: 5,
          review: "مراجعة 307",
          user: "مستخدم 682",
        },
        {
          rating: 4,
          review: "مراجعة 111",
          user: "مستخدم 982",
        },
        {
          rating: 5,
          review: "مراجعة 292",
          user: "مستخدم 540",
        },
        {
          rating: 2,
          review: "مراجعة 871",
          user: "مستخدم 836",
        },
        {
          rating: 5,
          review: "مراجعة 624",
          user: "مستخدم 872",
        },
      ],
      overview: {
        highlights: "ميزات 903",
        overview: "نظرة عامة 340",
        specifications: [
          {
            "مواصفة 13": "قيمة 726",
          },
          {
            "مواصفة 63": "قيمة 561",
          },
          {
            "مواصفة 93": "قيمة 47",
          },
          {
            "مواصفة 36": "قيمة 236",
          },
          {
            "مواصفة 42": "قيمة 219",
          },
        ],
      },
    },
  },
  {
    id: "7ehf03nygqs",
    data: {
      discount: 5,
      name: "منتج 65",
      model: "موديل 17",
      stock: 10,
      subCategory: "فئة فرعية 9",
      category: "إلكترونيات",
      rating: 5,
      ratings: [
        {
          "7v4a71dy22j": 2,
        },
        {
          "25u82b2icyg": 5,
        },
        {
          pzopz56qur: 2,
        },
        {
          "7vkh8yh6kin": 5,
        },
        {
          zi15kcgn8se: 1,
        },
        {
          "13ktmo3sdudm": 3,
        },
        {
          "8uqdmudx9w": 5,
        },
        {
          "8wri8txg2im": 2,
        },
        {
          "1pwrb1aefqm": 5,
        },
        {
          oz9zdktp7k: 3,
        },
      ],
      brand: "علامة تجارية 71",
      images: [
        "https://example.com/image940.jpg",
        "https://example.com/image265.jpg",
        "https://example.com/image935.jpg",
        "https://example.com/image616.jpg",
        "https://example.com/image28.jpg",
      ],
      price: 2705,
      reviews: [
        {
          rating: 2,
          review: "مراجعة 5",
          user: "مستخدم 699",
        },
        {
          rating: 1,
          review: "مراجعة 112",
          user: "مستخدم 543",
        },
        {
          rating: 3,
          review: "مراجعة 34",
          user: "مستخدم 167",
        },
        {
          rating: 4,
          review: "مراجعة 757",
          user: "مستخدم 687",
        },
        {
          rating: 5,
          review: "مراجعة 785",
          user: "مستخدم 401",
        },
      ],
      overview: {
        highlights: "ميزات 801",
        overview: "نظرة عامة 772",
        specifications: [
          {
            "مواصفة 33": "قيمة 248",
          },
          {
            "مواصفة 6": "قيمة 140",
          },
          {
            "مواصفة 31": "قيمة 126",
          },
          {
            "مواصفة 75": "قيمة 545",
          },
          {
            "مواصفة 50": "قيمة 394",
          },
        ],
      },
    },
  },
  {
    id: "l2u5wjcig8d",
    data: {
      discount: 33,
      name: "منتج 900",
      model: "موديل 67",
      stock: 6,
      subCategory: "فئة فرعية 3",
      category: "الصحة والعناية الشخصية",
      rating: 4,
      ratings: [
        {
          esqi7d68uuv: 1,
        },
        {
          se6zvlxezx: 1,
        },
        {
          uiyeec8vue: 4,
        },
        {
          wjiug5nigu: 4,
        },
        {
          yevnneu635: 1,
        },
        {
          xgv7mz6hce: 3,
        },
        {
          xeymp9soz9r: 4,
        },
        {
          "86qiulmvq3n": 4,
        },
        {
          "47tbw1la8f2": 1,
        },
        {
          "97l16axpnvw": 5,
        },
      ],
      brand: "علامة تجارية 80",
      images: [
        "https://example.com/image368.jpg",
        "https://example.com/image618.jpg",
        "https://example.com/image617.jpg",
        "https://example.com/image936.jpg",
        "https://example.com/image1.jpg",
      ],
      price: 3394,
      reviews: [
        {
          rating: 3,
          review: "مراجعة 56",
          user: "مستخدم 282",
        },
        {
          rating: 2,
          review: "مراجعة 290",
          user: "مستخدم 100",
        },
        {
          rating: 3,
          review: "مراجعة 862",
          user: "مستخدم 427",
        },
        {
          rating: 4,
          review: "مراجعة 40",
          user: "مستخدم 309",
        },
        {
          rating: 2,
          review: "مراجعة 112",
          user: "مستخدم 848",
        },
      ],
      overview: {
        highlights: "ميزات 990",
        overview: "نظرة عامة 294",
        specifications: [
          {
            "مواصفة 13": "قيمة 595",
          },
          {
            "مواصفة 13": "قيمة 793",
          },
          {
            "مواصفة 55": "قيمة 371",
          },
          {
            "مواصفة 9": "قيمة 698",
          },
          {
            "مواصفة 16": "قيمة 788",
          },
        ],
      },
    },
  },
  {
    id: "9h59shiiybg",
    data: {
      discount: 39,
      name: "منتج 538",
      model: "موديل 71",
      stock: 330,
      subCategory: "فئة فرعية 6",
      category: "رعاية المنزل والحيوانات الأليفة",
      rating: 1,
      ratings: [
        {
          x90tl3me3b: 4,
        },
        {
          "1926akcq6sc": 3,
        },
        {
          e63vnmdprmd: 5,
        },
        {
          "53nesepdj8s": 5,
        },
        {
          bmck847czcs: 5,
        },
        {
          "7yk7zfg0813": 3,
        },
        {
          r7kczd8kkvj: 1,
        },
        {
          x60159mqvap: 5,
        },
        {
          kdzr7ic808: 1,
        },
        {
          asum5wf6vjj: 2,
        },
      ],
      brand: "علامة تجارية 31",
      images: [
        "https://example.com/image876.jpg",
        "https://example.com/image473.jpg",
        "https://example.com/image354.jpg",
        "https://example.com/image965.jpg",
        "https://example.com/image698.jpg",
      ],
      price: 6558,
      reviews: [
        {
          rating: 4,
          review: "مراجعة 342",
          user: "مستخدم 785",
        },
        {
          rating: 4,
          review: "مراجعة 704",
          user: "مستخدم 304",
        },
        {
          rating: 5,
          review: "مراجعة 532",
          user: "مستخدم 702",
        },
        {
          rating: 1,
          review: "مراجعة 773",
          user: "مستخدم 897",
        },
        {
          rating: 5,
          review: "مراجعة 674",
          user: "مستخدم 468",
        },
      ],
      overview: {
        highlights: "ميزات 807",
        overview: "نظرة عامة 859",
        specifications: [
          {
            "مواصفة 65": "قيمة 290",
          },
          {
            "مواصفة 43": "قيمة 631",
          },
          {
            "مواصفة 30": "قيمة 766",
          },
          {
            "مواصفة 90": "قيمة 495",
          },
          {
            "مواصفة 96": "قيمة 28",
          },
        ],
      },
    },
  },
  {
    id: "plbayqih8ic",
    data: {
      discount: 36,
      name: "منتج 462",
      model: "موديل 56",
      stock: 29,
      subCategory: "فئة فرعية 2",
      category: "إلكترونيات",
      rating: 4,
      ratings: [
        {
          "6hwz9i5ny1h": 1,
        },
        {
          lqg29b47vu: 5,
        },
        {
          dhq61q0m99: 3,
        },
        {
          svsx4tdwpui: 2,
        },
        {
          vjtuhm1xgtf: 4,
        },
        {
          lt121m4125m: 5,
        },
        {
          j40lgcrpkqo: 4,
        },
        {
          tuzxxzxwsq: 1,
        },
        {
          f2q1u4uvlbv: 1,
        },
        {
          h1ifmt6oidh: 5,
        },
      ],
      brand: "علامة تجارية 7",
      images: [
        "https://example.com/image366.jpg",
        "https://example.com/image766.jpg",
        "https://example.com/image911.jpg",
        "https://example.com/image329.jpg",
        "https://example.com/image963.jpg",
      ],
      price: 8924,
      reviews: [
        {
          rating: 3,
          review: "مراجعة 532",
          user: "مستخدم 761",
        },
        {
          rating: 3,
          review: "مراجعة 292",
          user: "مستخدم 418",
        },
        {
          rating: 5,
          review: "مراجعة 815",
          user: "مستخدم 827",
        },
        {
          rating: 3,
          review: "مراجعة 686",
          user: "مستخدم 697",
        },
        {
          rating: 4,
          review: "مراجعة 273",
          user: "مستخدم 569",
        },
      ],
      overview: {
        highlights: "ميزات 686",
        overview: "نظرة عامة 267",
        specifications: [
          {
            "مواصفة 28": "قيمة 406",
          },
          {
            "مواصفة 81": "قيمة 714",
          },
          {
            "مواصفة 67": "قيمة 469",
          },
          {
            "مواصفة 4": "قيمة 488",
          },
          {
            "مواصفة 49": "قيمة 368",
          },
        ],
      },
    },
  },
  {
    id: "ldrax7d9ky",
    data: {
      discount: 16,
      name: "منتج 400",
      model: "موديل 20",
      stock: 982,
      subCategory: "فئة فرعية 6",
      category: "رعاية المنزل والحيوانات الأليفة",
      rating: 1,
      ratings: [
        {
          "3nl89a13eui": 3,
        },
        {
          nwgriyp5ggg: 3,
        },
        {
          "3szo2rolv2y": 5,
        },
        {
          "67a3k4ce5wj": 5,
        },
        {
          "9imgd5t146": 1,
        },
        {
          agz18yfpupa: 1,
        },
        {
          "307a0ic61gt": 5,
        },
        {
          g8g9g8u61er: 3,
        },
        {
          nlj2uoihex: 1,
        },
        {
          "9md08s728d5": 5,
        },
      ],
      brand: "علامة تجارية 56",
      images: [
        "https://example.com/image458.jpg",
        "https://example.com/image331.jpg",
        "https://example.com/image430.jpg",
        "https://example.com/image690.jpg",
        "https://example.com/image901.jpg",
      ],
      price: 3347,
      reviews: [
        {
          rating: 4,
          review: "مراجعة 514",
          user: "مستخدم 904",
        },
        {
          rating: 4,
          review: "مراجعة 669",
          user: "مستخدم 324",
        },
        {
          rating: 4,
          review: "مراجعة 525",
          user: "مستخدم 617",
        },
        {
          rating: 4,
          review: "مراجعة 667",
          user: "مستخدم 7",
        },
        {
          rating: 1,
          review: "مراجعة 214",
          user: "مستخدم 153",
        },
      ],
      overview: {
        highlights: "ميزات 504",
        overview: "نظرة عامة 393",
        specifications: [
          {
            "مواصفة 60": "قيمة 426",
          },
          {
            "مواصفة 81": "قيمة 40",
          },
          {
            "مواصفة 26": "قيمة 730",
          },
          {
            "مواصفة 94": "قيمة 889",
          },
          {
            "مواصفة 5": "قيمة 612",
          },
        ],
      },
    },
  },
  {
    id: "qcop5k3uu39",
    data: {
      discount: 19,
      name: "منتج 789",
      model: "موديل 54",
      stock: 644,
      subCategory: "فئة فرعية 9",
      category: "رعاية المنزل والحيوانات الأليفة",
      rating: 2,
      ratings: [
        {
          mdjqqjdpfje: 1,
        },
        {
          "8p56h23sf99": 5,
        },
        {
          vtplbnhjbr: 3,
        },
        {
          hmc2ucm53na: 3,
        },
        {
          "4v7zjzo2n09": 4,
        },
        {
          fmp27vryhj6: 5,
        },
        {
          fj1wcqoypu5: 3,
        },
        {
          "5cr0b3dap": 2,
        },
        {
          "6tvew4ygxz8": 5,
        },
        {
          qsx9ixk2ofq: 3,
        },
      ],
      brand: "علامة تجارية 8",
      images: [
        "https://example.com/image772.jpg",
        "https://example.com/image68.jpg",
        "https://example.com/image126.jpg",
        "https://example.com/image770.jpg",
        "https://example.com/image508.jpg",
      ],
      price: 8044,
      reviews: [
        {
          rating: 2,
          review: "مراجعة 694",
          user: "مستخدم 412",
        },
        {
          rating: 3,
          review: "مراجعة 635",
          user: "مستخدم 138",
        },
        {
          rating: 1,
          review: "مراجعة 496",
          user: "مستخدم 728",
        },
        {
          rating: 2,
          review: "مراجعة 270",
          user: "مستخدم 36",
        },
        {
          rating: 3,
          review: "مراجعة 740",
          user: "مستخدم 657",
        },
      ],
      overview: {
        highlights: "ميزات 460",
        overview: "نظرة عامة 170",
        specifications: [
          {
            "مواصفة 16": "قيمة 804",
          },
          {
            "مواصفة 45": "قيمة 837",
          },
          {
            "مواصفة 6": "قيمة 16",
          },
          {
            "مواصفة 10": "قيمة 361",
          },
          {
            "مواصفة 9": "قيمة 322",
          },
        ],
      },
    },
  },
  {
    id: "zu1z1tu5gth",
    data: {
      discount: 5,
      name: "منتج 545",
      model: "موديل 87",
      stock: 478,
      subCategory: "فئة فرعية 2",
      category: "الطفل",
      rating: 5,
      ratings: [
        {
          swdnblwmxg7: 4,
        },
        {
          vjma5iov379: 5,
        },
        {
          t26dlhf2p4: 1,
        },
        {
          l3xio81y5c: 4,
        },
        {
          "49b2b8gevwb": 5,
        },
        {
          yr9su4zpnje: 3,
        },
        {
          vj47ptojmb: 2,
        },
        {
          av6q5zo6ign: 3,
        },
        {
          q8fs095qm4: 1,
        },
        {
          zwwac8umfff: 4,
        },
      ],
      brand: "علامة تجارية 29",
      images: [
        "https://example.com/image428.jpg",
        "https://example.com/image598.jpg",
        "https://example.com/image61.jpg",
        "https://example.com/image533.jpg",
        "https://example.com/image381.jpg",
      ],
      price: 3051,
      reviews: [
        {
          rating: 4,
          review: "مراجعة 160",
          user: "مستخدم 884",
        },
        {
          rating: 1,
          review: "مراجعة 282",
          user: "مستخدم 397",
        },
        {
          rating: 1,
          review: "مراجعة 363",
          user: "مستخدم 240",
        },
        {
          rating: 4,
          review: "مراجعة 687",
          user: "مستخدم 507",
        },
        {
          rating: 4,
          review: "مراجعة 715",
          user: "مستخدم 814",
        },
      ],
      overview: {
        highlights: "ميزات 977",
        overview: "نظرة عامة 433",
        specifications: [
          {
            "مواصفة 41": "قيمة 401",
          },
          {
            "مواصفة 20": "قيمة 258",
          },
          {
            "مواصفة 54": "قيمة 497",
          },
          {
            "مواصفة 36": "قيمة 640",
          },
          {
            "مواصفة 29": "قيمة 735",
          },
        ],
      },
    },
  },
  {
    id: "3jywudf1omm",
    data: {
      discount: 11,
      name: "منتج 109",
      model: "موديل 96",
      stock: 303,
      subCategory: "فئة فرعية 1",
      category: "الصحة والعناية الشخصية",
      rating: 2,
      ratings: [
        {
          s6gha0om7y: 3,
        },
        {
          qh3s006mvxf: 2,
        },
        {
          "0t6h90gpwbnc": 3,
        },
        {
          krfsd9qu8ka: 4,
        },
        {
          "24iawh6j1ygh": 1,
        },
        {
          shzgnteod6c: 5,
        },
        {
          "890jd496sz9": 3,
        },
        {
          tknnqr67s3s: 2,
        },
        {
          w404g6pdzn: 4,
        },
        {
          "4ren18d7o88": 2,
        },
      ],
      brand: "علامة تجارية 14",
      images: [
        "https://example.com/image613.jpg",
        "https://example.com/image457.jpg",
        "https://example.com/image958.jpg",
        "https://example.com/image256.jpg",
        "https://example.com/image596.jpg",
      ],
      price: 3350,
      reviews: [
        {
          rating: 1,
          review: "مراجعة 250",
          user: "مستخدم 189",
        },
        {
          rating: 4,
          review: "مراجعة 422",
          user: "مستخدم 412",
        },
        {
          rating: 3,
          review: "مراجعة 572",
          user: "مستخدم 744",
        },
        {
          rating: 4,
          review: "مراجعة 505",
          user: "مستخدم 822",
        },
        {
          rating: 1,
          review: "مراجعة 364",
          user: "مستخدم 746",
        },
      ],
      overview: {
        highlights: "ميزات 603",
        overview: "نظرة عامة 935",
        specifications: [
          {
            "مواصفة 40": "قيمة 638",
          },
          {
            "مواصفة 52": "قيمة 226",
          },
          {
            "مواصفة 40": "قيمة 531",
          },
          {
            "مواصفة 13": "قيمة 480",
          },
          {
            "مواصفة 59": "قيمة 99",
          },
        ],
      },
    },
  },
  {
    id: "dcyzto9rf2",
    data: {
      discount: 11,
      name: "منتج 618",
      model: "موديل 34",
      stock: 147,
      subCategory: "فئة فرعية 2",
      category: "إلكترونيات",
      rating: 5,
      ratings: [
        {
          "51nsakwpskg": 3,
        },
        {
          "4tgtohcoh3b": 4,
        },
        {
          g7wqtvg20cq: 4,
        },
        {
          htw0t2nj5ka: 2,
        },
        {
          "6opautp0id": 5,
        },
        {
          "65v6b10jemc": 4,
        },
        {
          hmhzf8bt0fb: 5,
        },
        {
          bq9ulq3h5ji: 2,
        },
        {
          potnrvwvnp: 1,
        },
        {
          iv9fj076a8: 5,
        },
      ],
      brand: "علامة تجارية 97",
      images: [
        "https://example.com/image238.jpg",
        "https://example.com/image593.jpg",
        "https://example.com/image372.jpg",
        "https://example.com/image91.jpg",
        "https://example.com/image293.jpg",
      ],
      price: 8814,
      reviews: [
        {
          rating: 5,
          review: "مراجعة 561",
          user: "مستخدم 345",
        },
        {
          rating: 5,
          review: "مراجعة 207",
          user: "مستخدم 507",
        },
        {
          rating: 4,
          review: "مراجعة 859",
          user: "مستخدم 737",
        },
        {
          rating: 4,
          review: "مراجعة 26",
          user: "مستخدم 617",
        },
        {
          rating: 2,
          review: "مراجعة 126",
          user: "مستخدم 670",
        },
      ],
      overview: {
        highlights: "ميزات 340",
        overview: "نظرة عامة 304",
        specifications: [
          {
            "مواصفة 23": "قيمة 705",
          },
          {
            "مواصفة 48": "قيمة 916",
          },
          {
            "مواصفة 56": "قيمة 76",
          },
          {
            "مواصفة 72": "قيمة 787",
          },
          {
            "مواصفة 35": "قيمة 425",
          },
        ],
      },
    },
  },
  {
    id: "vr4ux5tzvi",
    data: {
      discount: 11,
      name: "منتج 825",
      model: "موديل 21",
      stock: 573,
      subCategory: "فئة فرعية 6",
      category: "طعام",
      rating: 4,
      ratings: [
        {
          nqtexz4iav: 4,
        },
        {
          fhrkdljtout: 1,
        },
        {
          "8nengsonymt": 2,
        },
        {
          "7yxb2yunb3i": 5,
        },
        {
          n4zagwr4i0l: 4,
        },
        {
          qfocfu2auq: 4,
        },
        {
          "16k9fdo4n71": 3,
        },
        {
          fa62tjadzp9: 5,
        },
        {
          b90cllye3o5: 3,
        },
        {
          sr706t6abn: 3,
        },
      ],
      brand: "علامة تجارية 57",
      images: [
        "https://example.com/image48.jpg",
        "https://example.com/image457.jpg",
        "https://example.com/image11.jpg",
        "https://example.com/image540.jpg",
        "https://example.com/image750.jpg",
      ],
      price: 141,
      reviews: [
        {
          rating: 1,
          review: "مراجعة 531",
          user: "مستخدم 412",
        },
        {
          rating: 1,
          review: "مراجعة 851",
          user: "مستخدم 961",
        },
        {
          rating: 2,
          review: "مراجعة 431",
          user: "مستخدم 234",
        },
        {
          rating: 5,
          review: "مراجعة 326",
          user: "مستخدم 608",
        },
        {
          rating: 3,
          review: "مراجعة 855",
          user: "مستخدم 231",
        },
      ],
      overview: {
        highlights: "ميزات 654",
        overview: "نظرة عامة 273",
        specifications: [
          {
            "مواصفة 92": "قيمة 998",
          },
          {
            "مواصفة 89": "قيمة 517",
          },
          {
            "مواصفة 30": "قيمة 58",
          },
          {
            "مواصفة 21": "قيمة 673",
          },
          {
            "مواصفة 46": "قيمة 232",
          },
        ],
      },
    },
  },
  {
    id: "5iv6rrj6z4m",
    data: {
      discount: 44,
      name: "منتج 940",
      model: "موديل 22",
      stock: 516,
      subCategory: "فئة فرعية 2",
      category: "إلكترونيات",
      rating: 2,
      ratings: [
        {
          kk7trf19bul: 2,
        },
        {
          ilg6s3htl3: 5,
        },
        {
          yv3h55lga9: 2,
        },
        {
          lcabi0jmtp: 2,
        },
        {
          m7e9jjy283: 4,
        },
        {
          "2jcgkdnqs17": 3,
        },
        {
          v2hmuuu06wf: 2,
        },
        {
          "5a7rkra41yn": 1,
        },
        {
          rqnhqrqq7v: 5,
        },
        {
          dsmd6nlk8o: 1,
        },
      ],
      brand: "علامة تجارية 17",
      images: [
        "https://example.com/image43.jpg",
        "https://example.com/image993.jpg",
        "https://example.com/image946.jpg",
        "https://example.com/image432.jpg",
        "https://example.com/image949.jpg",
      ],
      price: 1350,
      reviews: [
        {
          rating: 1,
          review: "مراجعة 679",
          user: "مستخدم 230",
        },
        {
          rating: 2,
          review: "مراجعة 904",
          user: "مستخدم 107",
        },
        {
          rating: 5,
          review: "مراجعة 435",
          user: "مستخدم 454",
        },
        {
          rating: 5,
          review: "مراجعة 3",
          user: "مستخدم 456",
        },
        {
          rating: 3,
          review: "مراجعة 823",
          user: "مستخدم 543",
        },
      ],
      overview: {
        highlights: "ميزات 647",
        overview: "نظرة عامة 146",
        specifications: [
          {
            "مواصفة 16": "قيمة 810",
          },
          {
            "مواصفة 94": "قيمة 282",
          },
          {
            "مواصفة 83": "قيمة 610",
          },
          {
            "مواصفة 12": "قيمة 633",
          },
          {
            "مواصفة 36": "قيمة 940",
          },
        ],
      },
    },
  },
  {
    id: "irlgklif83j",
    data: {
      discount: 48,
      name: "منتج 79",
      model: "موديل 20",
      stock: 899,
      subCategory: "فئة فرعية 1",
      category: "رعاية المنزل والحيوانات الأليفة",
      rating: 4,
      ratings: [
        {
          glyjpkn0v6: 2,
        },
        {
          kot2hbi6m1: 5,
        },
        {
          pa3gig054dh: 5,
        },
        {
          o1xfces1479: 1,
        },
        {
          g7xb4g9pwig: 1,
        },
        {
          srr85556iji: 4,
        },
        {
          otb3qpht7gl: 2,
        },
        {
          wjldzup12ib: 4,
        },
        {
          b54jmczv6jr: 5,
        },
        {
          j6j3ec3ytxs: 2,
        },
      ],
      brand: "علامة تجارية 94",
      images: [
        "https://example.com/image122.jpg",
        "https://example.com/image92.jpg",
        "https://example.com/image595.jpg",
        "https://example.com/image817.jpg",
        "https://example.com/image732.jpg",
      ],
      price: 572,
      reviews: [
        {
          rating: 1,
          review: "مراجعة 434",
          user: "مستخدم 664",
        },
        {
          rating: 2,
          review: "مراجعة 448",
          user: "مستخدم 417",
        },
        {
          rating: 3,
          review: "مراجعة 113",
          user: "مستخدم 914",
        },
        {
          rating: 4,
          review: "مراجعة 996",
          user: "مستخدم 6",
        },
        {
          rating: 2,
          review: "مراجعة 677",
          user: "مستخدم 658",
        },
      ],
      overview: {
        highlights: "ميزات 173",
        overview: "نظرة عامة 380",
        specifications: [
          {
            "مواصفة 43": "قيمة 946",
          },
          {
            "مواصفة 45": "قيمة 94",
          },
          {
            "مواصفة 22": "قيمة 95",
          },
          {
            "مواصفة 22": "قيمة 236",
          },
          {
            "مواصفة 88": "قيمة 997",
          },
        ],
      },
    },
  },
  {
    id: "3481g4mi4oj",
    data: {
      discount: 35,
      name: "منتج 531",
      model: "موديل 33",
      stock: 986,
      subCategory: "فئة فرعية 3",
      category: "إلكترونيات",
      rating: 3,
      ratings: [
        {
          igpkt4stiek: 4,
        },
        {
          gifrqy3gjg8: 1,
        },
        {
          "2dqzzumd3w3": 4,
        },
        {
          tuqk2b1eem: 3,
        },
        {
          lr6quss2his: 2,
        },
        {
          qni3m86sy1: 3,
        },
        {
          jxar0vzru6e: 4,
        },
        {
          "7meqbw0qwfx": 4,
        },
        {
          c77ar0fkcol: 4,
        },
        {
          d5e5ipkxjd4: 5,
        },
      ],
      brand: "علامة تجارية 28",
      images: [
        "https://example.com/image990.jpg",
        "https://example.com/image162.jpg",
        "https://example.com/image793.jpg",
        "https://example.com/image312.jpg",
        "https://example.com/image957.jpg",
      ],
      price: 7362,
      reviews: [
        {
          rating: 1,
          review: "مراجعة 240",
          user: "مستخدم 243",
        },
        {
          rating: 2,
          review: "مراجعة 102",
          user: "مستخدم 713",
        },
        {
          rating: 3,
          review: "مراجعة 88",
          user: "مستخدم 267",
        },
        {
          rating: 3,
          review: "مراجعة 925",
          user: "مستخدم 684",
        },
        {
          rating: 5,
          review: "مراجعة 288",
          user: "مستخدم 416",
        },
      ],
      overview: {
        highlights: "ميزات 384",
        overview: "نظرة عامة 899",
        specifications: [
          {
            "مواصفة 30": "قيمة 681",
          },
          {
            "مواصفة 0": "قيمة 500",
          },
          {
            "مواصفة 91": "قيمة 643",
          },
          {
            "مواصفة 40": "قيمة 61",
          },
          {
            "مواصفة 93": "قيمة 132",
          },
        ],
      },
    },
  },
  {
    id: "wlp3ghehswh",
    data: {
      discount: 24,
      name: "منتج 642",
      model: "موديل 80",
      stock: 154,
      subCategory: "فئة فرعية 0",
      category: "الصحة والعناية الشخصية",
      rating: 2,
      ratings: [
        {
          "1a7qc0hiwo2": 2,
        },
        {
          kqxyrafcmib: 2,
        },
        {
          z29tc2tm3qg: 3,
        },
        {
          "1oqi2ueisluh": 3,
        },
        {
          uvexnt04cxj: 1,
        },
        {
          hsdh6txbbj4: 1,
        },
        {
          r3ap5ds4pyf: 4,
        },
        {
          "8o82n7o3lhv": 1,
        },
        {
          uuatxnhlsul: 2,
        },
        {
          qd1uvu8ie5i: 1,
        },
      ],
      brand: "علامة تجارية 65",
      images: [
        "https://example.com/image50.jpg",
        "https://example.com/image416.jpg",
        "https://example.com/image221.jpg",
        "https://example.com/image467.jpg",
        "https://example.com/image404.jpg",
      ],
      price: 473,
      reviews: [
        {
          rating: 3,
          review: "مراجعة 22",
          user: "مستخدم 448",
        },
        {
          rating: 2,
          review: "مراجعة 933",
          user: "مستخدم 272",
        },
        {
          rating: 3,
          review: "مراجعة 368",
          user: "مستخدم 650",
        },
        {
          rating: 2,
          review: "مراجعة 235",
          user: "مستخدم 516",
        },
        {
          rating: 5,
          review: "مراجعة 650",
          user: "مستخدم 163",
        },
      ],
      overview: {
        highlights: "ميزات 714",
        overview: "نظرة عامة 687",
        specifications: [
          {
            "مواصفة 63": "قيمة 104",
          },
          {
            "مواصفة 47": "قيمة 259",
          },
          {
            "مواصفة 87": "قيمة 106",
          },
          {
            "مواصفة 20": "قيمة 72",
          },
          {
            "مواصفة 27": "قيمة 95",
          },
        ],
      },
    },
  },
  {
    id: "978x0o03fz",
    data: {
      discount: 12,
      name: "منتج 715",
      model: "موديل 62",
      stock: 462,
      subCategory: "فئة فرعية 2",
      category: "طعام",
      rating: 2,
      ratings: [
        {
          k0i9auonmej: 3,
        },
        {
          zdjysipqvtc: 3,
        },
        {
          my3w40gp41h: 3,
        },
        {
          i7mhtcnxho: 4,
        },
        {
          og69d196td: 1,
        },
        {
          dpa2mer2v3g: 1,
        },
        {
          "6dse54jj23x": 1,
        },
        {
          xg5c4jmx52: 1,
        },
        {
          jchz6pfla7j: 5,
        },
        {
          jn59u98dnr: 3,
        },
      ],
      brand: "علامة تجارية 51",
      images: [
        "https://example.com/image363.jpg",
        "https://example.com/image548.jpg",
        "https://example.com/image407.jpg",
        "https://example.com/image340.jpg",
        "https://example.com/image83.jpg",
      ],
      price: 8051,
      reviews: [
        {
          rating: 4,
          review: "مراجعة 41",
          user: "مستخدم 103",
        },
        {
          rating: 3,
          review: "مراجعة 302",
          user: "مستخدم 890",
        },
        {
          rating: 4,
          review: "مراجعة 619",
          user: "مستخدم 236",
        },
        {
          rating: 4,
          review: "مراجعة 519",
          user: "مستخدم 490",
        },
        {
          rating: 4,
          review: "مراجعة 883",
          user: "مستخدم 722",
        },
      ],
      overview: {
        highlights: "ميزات 71",
        overview: "نظرة عامة 39",
        specifications: [
          {
            "مواصفة 44": "قيمة 305",
          },
          {
            "مواصفة 41": "قيمة 798",
          },
          {
            "مواصفة 51": "قيمة 552",
          },
          {
            "مواصفة 71": "قيمة 431",
          },
          {
            "مواصفة 66": "قيمة 362",
          },
        ],
      },
    },
  },
  {
    id: "hj91fblf9lb",
    data: {
      discount: 43,
      name: "منتج 177",
      model: "موديل 9",
      stock: 951,
      subCategory: "فئة فرعية 8",
      category: "الصحة والعناية الشخصية",
      rating: 5,
      ratings: [
        {
          "914b2q549do": 3,
        },
        {
          jei63gpvbw: 5,
        },
        {
          mn8im5ot4w: 2,
        },
        {
          ou9z80fq04m: 2,
        },
        {
          yv2w6xjwis: 3,
        },
        {
          ca2w8ijszkj: 2,
        },
        {
          tz6mtxz0a8: 2,
        },
        {
          ghwcpkaua6k: 1,
        },
        {
          e7po09j89z: 3,
        },
        {
          doic0p97pzq: 4,
        },
      ],
      brand: "علامة تجارية 21",
      images: [
        "https://example.com/image292.jpg",
        "https://example.com/image306.jpg",
        "https://example.com/image723.jpg",
        "https://example.com/image789.jpg",
        "https://example.com/image364.jpg",
      ],
      price: 5420,
      reviews: [
        {
          rating: 1,
          review: "مراجعة 772",
          user: "مستخدم 998",
        },
        {
          rating: 1,
          review: "مراجعة 350",
          user: "مستخدم 922",
        },
        {
          rating: 3,
          review: "مراجعة 934",
          user: "مستخدم 699",
        },
        {
          rating: 3,
          review: "مراجعة 871",
          user: "مستخدم 716",
        },
        {
          rating: 2,
          review: "مراجعة 855",
          user: "مستخدم 824",
        },
      ],
      overview: {
        highlights: "ميزات 786",
        overview: "نظرة عامة 897",
        specifications: [
          {
            "مواصفة 30": "قيمة 769",
          },
          {
            "مواصفة 76": "قيمة 402",
          },
          {
            "مواصفة 89": "قيمة 702",
          },
          {
            "مواصفة 36": "قيمة 790",
          },
          {
            "مواصفة 61": "قيمة 270",
          },
        ],
      },
    },
  },
  {
    id: "rh7ze74k80g",
    data: {
      discount: 44,
      name: "منتج 905",
      model: "موديل 64",
      stock: 427,
      subCategory: "فئة فرعية 4",
      category: "الطفل",
      rating: 1,
      ratings: [
        {
          "95luigbu26d": 3,
        },
        {
          jed2o1obewr: 3,
        },
        {
          "0wrdhl81ekg": 3,
        },
        {
          jryi39jnsln: 4,
        },
        {
          di21ruaa1a: 4,
        },
        {
          "6xmbla8lrrr": 5,
        },
        {
          ii93qrfod5a: 1,
        },
        {
          rskn0tqhoiq: 2,
        },
        {
          "6u2410lafkw": 3,
        },
        {
          s97bdbjvuqk: 1,
        },
      ],
      brand: "علامة تجارية 3",
      images: [
        "https://example.com/image645.jpg",
        "https://example.com/image186.jpg",
        "https://example.com/image572.jpg",
        "https://example.com/image367.jpg",
        "https://example.com/image509.jpg",
      ],
      price: 9079,
      reviews: [
        {
          rating: 4,
          review: "مراجعة 72",
          user: "مستخدم 351",
        },
        {
          rating: 5,
          review: "مراجعة 970",
          user: "مستخدم 523",
        },
        {
          rating: 3,
          review: "مراجعة 858",
          user: "مستخدم 92",
        },
        {
          rating: 5,
          review: "مراجعة 299",
          user: "مستخدم 996",
        },
        {
          rating: 2,
          review: "مراجعة 899",
          user: "مستخدم 26",
        },
      ],
      overview: {
        highlights: "ميزات 538",
        overview: "نظرة عامة 890",
        specifications: [
          {
            "مواصفة 74": "قيمة 2",
          },
          {
            "مواصفة 11": "قيمة 291",
          },
          {
            "مواصفة 12": "قيمة 497",
          },
          {
            "مواصفة 93": "قيمة 329",
          },
          {
            "مواصفة 84": "قيمة 869",
          },
        ],
      },
    },
  },
  {
    id: "blez77g68d6",
    data: {
      discount: 36,
      name: "منتج 189",
      model: "موديل 61",
      stock: 600,
      subCategory: "فئة فرعية 2",
      category: "المشروبات",
      rating: 3,
      ratings: [
        {
          "0kp1udm7gzbl": 1,
        },
        {
          iqmr8kzr7p: 3,
        },
        {
          cxsflv2vnvf: 1,
        },
        {
          "9b8mugl0hz": 5,
        },
        {
          yhq6xbr8p4: 1,
        },
        {
          ruesobf7px: 4,
        },
        {
          jn0c8sik1h: 4,
        },
        {
          "8at9ezidhv": 3,
        },
        {
          "5jyul6l1ivk": 5,
        },
        {
          l6vy0eiu3uf: 3,
        },
      ],
      brand: "علامة تجارية 45",
      images: [
        "https://example.com/image825.jpg",
        "https://example.com/image903.jpg",
        "https://example.com/image613.jpg",
        "https://example.com/image814.jpg",
        "https://example.com/image599.jpg",
      ],
      price: 5675,
      reviews: [
        {
          rating: 1,
          review: "مراجعة 237",
          user: "مستخدم 163",
        },
        {
          rating: 4,
          review: "مراجعة 211",
          user: "مستخدم 701",
        },
        {
          rating: 4,
          review: "مراجعة 654",
          user: "مستخدم 261",
        },
        {
          rating: 4,
          review: "مراجعة 333",
          user: "مستخدم 584",
        },
        {
          rating: 5,
          review: "مراجعة 630",
          user: "مستخدم 643",
        },
      ],
      overview: {
        highlights: "ميزات 526",
        overview: "نظرة عامة 290",
        specifications: [
          {
            "مواصفة 8": "قيمة 638",
          },
          {
            "مواصفة 48": "قيمة 277",
          },
          {
            "مواصفة 32": "قيمة 160",
          },
          {
            "مواصفة 14": "قيمة 223",
          },
          {
            "مواصفة 25": "قيمة 751",
          },
        ],
      },
    },
  },
  {
    id: "beyv35av6z",
    data: {
      discount: 29,
      name: "منتج 800",
      model: "موديل 25",
      stock: 183,
      subCategory: "فئة فرعية 7",
      category: "الصحة والعناية الشخصية",
      rating: 4,
      ratings: [
        {
          v7vks7u360f: 1,
        },
        {
          mvgpd2g8g5: 3,
        },
        {
          "0g91ifwy1jlc": 4,
        },
        {
          z7745u11uif: 1,
        },
        {
          uej2qbuarx: 2,
        },
        {
          y7eigzx5jr: 1,
        },
        {
          v9s67t5p3pk: 4,
        },
        {
          "2d75xzkhufe": 5,
        },
        {
          "6ufk6dsihn8": 5,
        },
        {
          g36z5k9s8mv: 1,
        },
      ],
      brand: "علامة تجارية 38",
      images: [
        "https://example.com/image791.jpg",
        "https://example.com/image682.jpg",
        "https://example.com/image713.jpg",
        "https://example.com/image304.jpg",
        "https://example.com/image523.jpg",
      ],
      price: 9397,
      reviews: [
        {
          rating: 4,
          review: "مراجعة 871",
          user: "مستخدم 868",
        },
        {
          rating: 3,
          review: "مراجعة 244",
          user: "مستخدم 68",
        },
        {
          rating: 4,
          review: "مراجعة 178",
          user: "مستخدم 153",
        },
        {
          rating: 5,
          review: "مراجعة 646",
          user: "مستخدم 355",
        },
        {
          rating: 1,
          review: "مراجعة 899",
          user: "مستخدم 991",
        },
      ],
      overview: {
        highlights: "ميزات 250",
        overview: "نظرة عامة 761",
        specifications: [
          {
            "مواصفة 92": "قيمة 795",
          },
          {
            "مواصفة 19": "قيمة 331",
          },
          {
            "مواصفة 2": "قيمة 544",
          },
          {
            "مواصفة 89": "قيمة 263",
          },
          {
            "مواصفة 15": "قيمة 726",
          },
        ],
      },
    },
  },
  {
    id: "ojw4g7qezb8",
    data: {
      discount: 40,
      name: "منتج 186",
      model: "موديل 23",
      stock: 337,
      subCategory: "فئة فرعية 8",
      category: "إلكترونيات",
      rating: 4,
      ratings: [
        {
          o7gqqowc40c: 4,
        },
        {
          "0tljo80gpq3i": 5,
        },
        {
          obwz815zd3o: 4,
        },
        {
          cwc8s64zvc8: 2,
        },
        {
          "8wd4r7ztzed": 3,
        },
        {
          "7sehda0x08u": 3,
        },
        {
          clva8a0ywno: 5,
        },
        {
          z702i7ad0z: 2,
        },
        {
          rcu9o3rhm7: 4,
        },
        {
          cqkvshv321: 1,
        },
      ],
      brand: "علامة تجارية 31",
      images: [
        "https://example.com/image98.jpg",
        "https://example.com/image559.jpg",
        "https://example.com/image795.jpg",
        "https://example.com/image428.jpg",
        "https://example.com/image121.jpg",
      ],
      price: 46,
      reviews: [
        {
          rating: 3,
          review: "مراجعة 617",
          user: "مستخدم 347",
        },
        {
          rating: 4,
          review: "مراجعة 585",
          user: "مستخدم 324",
        },
        {
          rating: 3,
          review: "مراجعة 922",
          user: "مستخدم 413",
        },
        {
          rating: 3,
          review: "مراجعة 319",
          user: "مستخدم 742",
        },
        {
          rating: 4,
          review: "مراجعة 346",
          user: "مستخدم 168",
        },
      ],
      overview: {
        highlights: "ميزات 94",
        overview: "نظرة عامة 137",
        specifications: [
          {
            "مواصفة 48": "قيمة 858",
          },
          {
            "مواصفة 91": "قيمة 241",
          },
          {
            "مواصفة 8": "قيمة 172",
          },
          {
            "مواصفة 0": "قيمة 393",
          },
          {
            "مواصفة 67": "قيمة 936",
          },
        ],
      },
    },
  },
  {
    id: "glsugpgx4g9",
    data: {
      discount: 15,
      name: "منتج 459",
      model: "موديل 14",
      stock: 693,
      subCategory: "فئة فرعية 8",
      category: "المشروبات",
      rating: 4,
      ratings: [
        {
          phn30m5ou8i: 1,
        },
        {
          jg2jbql4vz: 1,
        },
        {
          "17cghzbsnvb": 5,
        },
        {
          i9vjp7m9pfk: 3,
        },
        {
          "0ml0eskt765": 4,
        },
        {
          ila8d257ai: 5,
        },
        {
          j6n8wgj4xl: 4,
        },
        {
          vlvumne3sta: 2,
        },
        {
          z2gf11u2tqe: 4,
        },
        {
          ne4rciciao8: 1,
        },
      ],
      brand: "علامة تجارية 84",
      images: [
        "https://example.com/image878.jpg",
        "https://example.com/image39.jpg",
        "https://example.com/image395.jpg",
        "https://example.com/image23.jpg",
        "https://example.com/image404.jpg",
      ],
      price: 9929,
      reviews: [
        {
          rating: 4,
          review: "مراجعة 348",
          user: "مستخدم 504",
        },
        {
          rating: 3,
          review: "مراجعة 975",
          user: "مستخدم 164",
        },
        {
          rating: 3,
          review: "مراجعة 736",
          user: "مستخدم 185",
        },
        {
          rating: 4,
          review: "مراجعة 364",
          user: "مستخدم 643",
        },
        {
          rating: 3,
          review: "مراجعة 770",
          user: "مستخدم 86",
        },
      ],
      overview: {
        highlights: "ميزات 321",
        overview: "نظرة عامة 321",
        specifications: [
          {
            "مواصفة 40": "قيمة 82",
          },
          {
            "مواصفة 28": "قيمة 809",
          },
          {
            "مواصفة 51": "قيمة 696",
          },
          {
            "مواصفة 88": "قيمة 308",
          },
          {
            "مواصفة 87": "قيمة 837",
          },
        ],
      },
    },
  },
  {
    id: "62cf6swowwa",
    data: {
      discount: 35,
      name: "منتج 653",
      model: "موديل 93",
      stock: 325,
      subCategory: "فئة فرعية 5",
      category: "الصحة والعناية الشخصية",
      rating: 1,
      ratings: [
        {
          kgxcpwur6t: 4,
        },
        {
          rp57xtodce: 4,
        },
        {
          g9pvkmqg884: 5,
        },
        {
          al18c5igfun: 5,
        },
        {
          "4azrb0o556g": 2,
        },
        {
          "98csm6o6jl8": 4,
        },
        {
          agf76eafe3e: 3,
        },
        {
          vh4yc3ikz98: 5,
        },
        {
          "24v7ziovdxz": 4,
        },
        {
          "6x397e9vk37": 1,
        },
      ],
      brand: "علامة تجارية 78",
      images: [
        "https://example.com/image7.jpg",
        "https://example.com/image265.jpg",
        "https://example.com/image965.jpg",
        "https://example.com/image431.jpg",
        "https://example.com/image384.jpg",
      ],
      price: 2384,
      reviews: [
        {
          rating: 3,
          review: "مراجعة 916",
          user: "مستخدم 407",
        },
        {
          rating: 4,
          review: "مراجعة 566",
          user: "مستخدم 398",
        },
        {
          rating: 4,
          review: "مراجعة 288",
          user: "مستخدم 314",
        },
        {
          rating: 1,
          review: "مراجعة 31",
          user: "مستخدم 179",
        },
        {
          rating: 2,
          review: "مراجعة 828",
          user: "مستخدم 517",
        },
      ],
      overview: {
        highlights: "ميزات 637",
        overview: "نظرة عامة 834",
        specifications: [
          {
            "مواصفة 35": "قيمة 159",
          },
          {
            "مواصفة 27": "قيمة 137",
          },
          {
            "مواصفة 78": "قيمة 906",
          },
          {
            "مواصفة 96": "قيمة 766",
          },
          {
            "مواصفة 62": "قيمة 402",
          },
        ],
      },
    },
  },
  {
    id: "pqkao885s3q",
    data: {
      discount: 37,
      name: "منتج 230",
      model: "موديل 83",
      stock: 343,
      subCategory: "فئة فرعية 1",
      category: "المشروبات",
      rating: 1,
      ratings: [
        {
          b2vhv30mq2r: 3,
        },
        {
          zvrwj678l9c: 2,
        },
        {
          bd02yvlm9rg: 3,
        },
        {
          pobqmj062g: 2,
        },
        {
          "1uj2n6u0a71": 1,
        },
        {
          dfcusxzrp2w: 5,
        },
        {
          "5n60a024dq9": 4,
        },
        {
          o5uewwbbeim: 1,
        },
        {
          s2wcpsh2wll: 1,
        },
        {
          p6edkd2co6i: 3,
        },
      ],
      brand: "علامة تجارية 16",
      images: [
        "https://example.com/image114.jpg",
        "https://example.com/image500.jpg",
        "https://example.com/image336.jpg",
        "https://example.com/image613.jpg",
        "https://example.com/image182.jpg",
      ],
      price: 2055,
      reviews: [
        {
          rating: 4,
          review: "مراجعة 615",
          user: "مستخدم 278",
        },
        {
          rating: 4,
          review: "مراجعة 146",
          user: "مستخدم 46",
        },
        {
          rating: 4,
          review: "مراجعة 95",
          user: "مستخدم 853",
        },
        {
          rating: 3,
          review: "مراجعة 993",
          user: "مستخدم 739",
        },
        {
          rating: 3,
          review: "مراجعة 406",
          user: "مستخدم 708",
        },
      ],
      overview: {
        highlights: "ميزات 599",
        overview: "نظرة عامة 245",
        specifications: [
          {
            "مواصفة 4": "قيمة 955",
          },
          {
            "مواصفة 62": "قيمة 118",
          },
          {
            "مواصفة 58": "قيمة 450",
          },
          {
            "مواصفة 65": "قيمة 929",
          },
          {
            "مواصفة 11": "قيمة 261",
          },
        ],
      },
    },
  },
  {
    id: "f6ojxwd4a5g",
    data: {
      discount: 9,
      name: "منتج 753",
      model: "موديل 89",
      stock: 444,
      subCategory: "فئة فرعية 6",
      category: "طعام",
      rating: 2,
      ratings: [
        {
          p0k0c6vwb7: 3,
        },
        {
          "30rv8u2pzt": 1,
        },
        {
          yh6z83hz55k: 5,
        },
        {
          spm88dmmn1r: 4,
        },
        {
          z0qn23ug0u: 5,
        },
        {
          "3ymcipav5cy": 3,
        },
        {
          srrsyq91sk: 3,
        },
        {
          utg7ew4c8xr: 2,
        },
        {
          k42bvbiuazo: 2,
        },
        {
          dwklueta29p: 2,
        },
      ],
      brand: "علامة تجارية 4",
      images: [
        "https://example.com/image610.jpg",
        "https://example.com/image110.jpg",
        "https://example.com/image577.jpg",
        "https://example.com/image953.jpg",
        "https://example.com/image502.jpg",
      ],
      price: 1215,
      reviews: [
        {
          rating: 5,
          review: "مراجعة 240",
          user: "مستخدم 771",
        },
        {
          rating: 5,
          review: "مراجعة 598",
          user: "مستخدم 242",
        },
        {
          rating: 2,
          review: "مراجعة 575",
          user: "مستخدم 785",
        },
        {
          rating: 5,
          review: "مراجعة 393",
          user: "مستخدم 693",
        },
        {
          rating: 2,
          review: "مراجعة 869",
          user: "مستخدم 426",
        },
      ],
      overview: {
        highlights: "ميزات 190",
        overview: "نظرة عامة 394",
        specifications: [
          {
            "مواصفة 20": "قيمة 274",
          },
          {
            "مواصفة 37": "قيمة 358",
          },
          {
            "مواصفة 78": "قيمة 562",
          },
          {
            "مواصفة 2": "قيمة 965",
          },
          {
            "مواصفة 17": "قيمة 433",
          },
        ],
      },
    },
  },
  {
    id: "0hcj0c8el3hk",
    data: {
      discount: 14,
      name: "منتج 672",
      model: "موديل 71",
      stock: 204,
      subCategory: "فئة فرعية 9",
      category: "الصحة والعناية الشخصية",
      rating: 3,
      ratings: [
        {
          a4ttt5v1h3f: 1,
        },
        {
          q6jyxp3goej: 2,
        },
        {
          ostrit3biq: 4,
        },
        {
          ey8p6dq6wwd: 5,
        },
        {
          "0tknkn896ui": 3,
        },
        {
          "0076z4ltsbxgb": 4,
        },
        {
          jiq9tr9o7od: 5,
        },
        {
          "8nkxpitzw2l": 1,
        },
        {
          qrcuhpcpln: 1,
        },
        {
          c0qex48ytrk: 1,
        },
      ],
      brand: "علامة تجارية 58",
      images: [
        "https://example.com/image145.jpg",
        "https://example.com/image465.jpg",
        "https://example.com/image6.jpg",
        "https://example.com/image237.jpg",
        "https://example.com/image894.jpg",
      ],
      price: 7335,
      reviews: [
        {
          rating: 1,
          review: "مراجعة 969",
          user: "مستخدم 901",
        },
        {
          rating: 4,
          review: "مراجعة 683",
          user: "مستخدم 860",
        },
        {
          rating: 2,
          review: "مراجعة 230",
          user: "مستخدم 709",
        },
        {
          rating: 4,
          review: "مراجعة 564",
          user: "مستخدم 364",
        },
        {
          rating: 4,
          review: "مراجعة 622",
          user: "مستخدم 401",
        },
      ],
      overview: {
        highlights: "ميزات 656",
        overview: "نظرة عامة 349",
        specifications: [
          {
            "مواصفة 50": "قيمة 735",
          },
          {
            "مواصفة 51": "قيمة 496",
          },
          {
            "مواصفة 49": "قيمة 874",
          },
          {
            "مواصفة 51": "قيمة 105",
          },
          {
            "مواصفة 35": "قيمة 693",
          },
        ],
      },
    },
  },
  {
    id: "2ta18nzy8g8",
    data: {
      discount: 21,
      name: "منتج 828",
      model: "موديل 95",
      stock: 719,
      subCategory: "فئة فرعية 4",
      category: "إلكترونيات",
      rating: 3,
      ratings: [
        {
          dojdje64l5u: 2,
        },
        {
          gknalnnba19: 4,
        },
        {
          iltlyeskmqn: 4,
        },
        {
          rgwyimxsp4f: 3,
        },
        {
          wrs2nw6zkz: 4,
        },
        {
          huou2vxg4nr: 3,
        },
        {
          jz2kzo7w5nl: 4,
        },
        {
          pupprtvy6h: 4,
        },
        {
          ynr1v8h70i: 4,
        },
        {
          "9ewovr1vii9": 2,
        },
      ],
      brand: "علامة تجارية 90",
      images: [
        "https://example.com/image538.jpg",
        "https://example.com/image892.jpg",
        "https://example.com/image175.jpg",
        "https://example.com/image66.jpg",
        "https://example.com/image260.jpg",
      ],
      price: 3664,
      reviews: [
        {
          rating: 3,
          review: "مراجعة 745",
          user: "مستخدم 22",
        },
        {
          rating: 5,
          review: "مراجعة 756",
          user: "مستخدم 380",
        },
        {
          rating: 3,
          review: "مراجعة 252",
          user: "مستخدم 588",
        },
        {
          rating: 1,
          review: "مراجعة 339",
          user: "مستخدم 184",
        },
        {
          rating: 5,
          review: "مراجعة 531",
          user: "مستخدم 886",
        },
      ],
      overview: {
        highlights: "ميزات 605",
        overview: "نظرة عامة 386",
        specifications: [
          {
            "مواصفة 12": "قيمة 617",
          },
          {
            "مواصفة 74": "قيمة 524",
          },
          {
            "مواصفة 99": "قيمة 228",
          },
          {
            "مواصفة 40": "قيمة 29",
          },
          {
            "مواصفة 11": "قيمة 403",
          },
        ],
      },
    },
  },
  {
    id: "hqcu3vfj6ti",
    data: {
      discount: 8,
      name: "منتج 274",
      model: "موديل 90",
      stock: 576,
      subCategory: "فئة فرعية 8",
      category: "إلكترونيات",
      rating: 1,
      ratings: [
        {
          btuhq4uf4ub: 4,
        },
        {
          "80j1c8l6eim": 5,
        },
        {
          lg8l2pe9e8f: 1,
        },
        {
          q3i6c36ivtj: 2,
        },
        {
          qj8yrt73faa: 4,
        },
        {
          udh3xtksto9: 1,
        },
        {
          cvrvmj6n0vo: 5,
        },
        {
          bqyvuh81b3j: 2,
        },
        {
          "9zsdlsic6xg": 1,
        },
        {
          rp9ag9kwj5i: 5,
        },
      ],
      brand: "علامة تجارية 75",
      images: [
        "https://example.com/image364.jpg",
        "https://example.com/image638.jpg",
        "https://example.com/image249.jpg",
        "https://example.com/image904.jpg",
        "https://example.com/image628.jpg",
      ],
      price: 1576,
      reviews: [
        {
          rating: 3,
          review: "مراجعة 391",
          user: "مستخدم 542",
        },
        {
          rating: 3,
          review: "مراجعة 217",
          user: "مستخدم 293",
        },
        {
          rating: 4,
          review: "مراجعة 518",
          user: "مستخدم 735",
        },
        {
          rating: 2,
          review: "مراجعة 223",
          user: "مستخدم 244",
        },
        {
          rating: 1,
          review: "مراجعة 542",
          user: "مستخدم 909",
        },
      ],
      overview: {
        highlights: "ميزات 84",
        overview: "نظرة عامة 293",
        specifications: [
          {
            "مواصفة 31": "قيمة 230",
          },
          {
            "مواصفة 89": "قيمة 506",
          },
          {
            "مواصفة 64": "قيمة 384",
          },
          {
            "مواصفة 72": "قيمة 539",
          },
          {
            "مواصفة 93": "قيمة 737",
          },
        ],
      },
    },
  },
  {
    id: "6p5slyhw0ba",
    data: {
      discount: 9,
      name: "منتج 684",
      model: "موديل 25",
      stock: 836,
      subCategory: "فئة فرعية 4",
      category: "رعاية المنزل والحيوانات الأليفة",
      rating: 4,
      ratings: [
        {
          "1kd8a6kfiqz": 4,
        },
        {
          "79s3rc8x45t": 3,
        },
        {
          "93hqb8us15w": 3,
        },
        {
          cgoj6ab7f15: 1,
        },
        {
          "7raxjfddd4": 3,
        },
        {
          co414lk1ekr: 1,
        },
        {
          mrf92novrlh: 2,
        },
        {
          r4nh8ps41ah: 4,
        },
        {
          nqvhy5s0wgd: 5,
        },
        {
          "2vsarrzyrp6": 1,
        },
      ],
      brand: "علامة تجارية 64",
      images: [
        "https://example.com/image377.jpg",
        "https://example.com/image561.jpg",
        "https://example.com/image677.jpg",
        "https://example.com/image787.jpg",
        "https://example.com/image853.jpg",
      ],
      price: 6129,
      reviews: [
        {
          rating: 5,
          review: "مراجعة 332",
          user: "مستخدم 746",
        },
        {
          rating: 1,
          review: "مراجعة 738",
          user: "مستخدم 850",
        },
        {
          rating: 1,
          review: "مراجعة 424",
          user: "مستخدم 479",
        },
        {
          rating: 4,
          review: "مراجعة 622",
          user: "مستخدم 126",
        },
        {
          rating: 4,
          review: "مراجعة 773",
          user: "مستخدم 317",
        },
      ],
      overview: {
        highlights: "ميزات 152",
        overview: "نظرة عامة 437",
        specifications: [
          {
            "مواصفة 49": "قيمة 887",
          },
          {
            "مواصفة 71": "قيمة 329",
          },
          {
            "مواصفة 77": "قيمة 949",
          },
          {
            "مواصفة 43": "قيمة 492",
          },
          {
            "مواصفة 48": "قيمة 482",
          },
        ],
      },
    },
  },
  {
    id: "8ni5kwns64g",
    data: {
      discount: 49,
      name: "منتج 579",
      model: "موديل 58",
      stock: 364,
      subCategory: "فئة فرعية 6",
      category: "المشروبات",
      rating: 1,
      ratings: [
        {
          u5x5nsob6q: 3,
        },
        {
          rqgrsbpli: 1,
        },
        {
          tnvx7dbxzr: 5,
        },
        {
          arw8hvmgy9: 3,
        },
        {
          gy3bn228zd8: 3,
        },
        {
          t8fwy590i8a: 2,
        },
        {
          fuswv7hc4m4: 2,
        },
        {
          vkxn2y3uctb: 1,
        },
        {
          avk291aiboo: 2,
        },
        {
          o5le1tyjwm: 4,
        },
      ],
      brand: "علامة تجارية 10",
      images: [
        "https://example.com/image927.jpg",
        "https://example.com/image911.jpg",
        "https://example.com/image413.jpg",
        "https://example.com/image515.jpg",
        "https://example.com/image700.jpg",
      ],
      price: 5047,
      reviews: [
        {
          rating: 2,
          review: "مراجعة 281",
          user: "مستخدم 565",
        },
        {
          rating: 3,
          review: "مراجعة 836",
          user: "مستخدم 689",
        },
        {
          rating: 3,
          review: "مراجعة 33",
          user: "مستخدم 57",
        },
        {
          rating: 2,
          review: "مراجعة 572",
          user: "مستخدم 591",
        },
        {
          rating: 3,
          review: "مراجعة 386",
          user: "مستخدم 692",
        },
      ],
      overview: {
        highlights: "ميزات 913",
        overview: "نظرة عامة 588",
        specifications: [
          {
            "مواصفة 47": "قيمة 425",
          },
          {
            "مواصفة 21": "قيمة 245",
          },
          {
            "مواصفة 2": "قيمة 303",
          },
          {
            "مواصفة 59": "قيمة 219",
          },
          {
            "مواصفة 22": "قيمة 553",
          },
        ],
      },
    },
  },
  {
    id: "t6xdgrh36n",
    data: {
      discount: 16,
      name: "منتج 467",
      model: "موديل 79",
      stock: 828,
      subCategory: "فئة فرعية 2",
      category: "رعاية المنزل والحيوانات الأليفة",
      rating: 3,
      ratings: [
        {
          bmb5c9eqzta: 3,
        },
        {
          "6mm0z2udmqd": 2,
        },
        {
          "944o2pdelvg": 2,
        },
        {
          "9m9j7fh7tyn": 3,
        },
        {
          y4ogyrx6pge: 5,
        },
        {
          "3yrjw96ipoa": 3,
        },
        {
          "3v67xhudmvk": 5,
        },
        {
          gacz0gt3xwp: 4,
        },
        {
          pdy2ogd603a: 2,
        },
        {
          su61rgr4trd: 5,
        },
      ],
      brand: "علامة تجارية 86",
      images: [
        "https://example.com/image186.jpg",
        "https://example.com/image990.jpg",
        "https://example.com/image470.jpg",
        "https://example.com/image387.jpg",
        "https://example.com/image176.jpg",
      ],
      price: 5610,
      reviews: [
        {
          rating: 2,
          review: "مراجعة 956",
          user: "مستخدم 635",
        },
        {
          rating: 4,
          review: "مراجعة 284",
          user: "مستخدم 797",
        },
        {
          rating: 5,
          review: "مراجعة 94",
          user: "مستخدم 81",
        },
        {
          rating: 5,
          review: "مراجعة 656",
          user: "مستخدم 559",
        },
        {
          rating: 4,
          review: "مراجعة 341",
          user: "مستخدم 753",
        },
      ],
      overview: {
        highlights: "ميزات 269",
        overview: "نظرة عامة 784",
        specifications: [
          {
            "مواصفة 53": "قيمة 627",
          },
          {
            "مواصفة 10": "قيمة 114",
          },
          {
            "مواصفة 25": "قيمة 515",
          },
          {
            "مواصفة 55": "قيمة 706",
          },
          {
            "مواصفة 64": "قيمة 847",
          },
        ],
      },
    },
  },
  {
    id: "nmrkcsnihmf",
    data: {
      discount: 10,
      name: "منتج 249",
      model: "موديل 44",
      stock: 715,
      subCategory: "فئة فرعية 4",
      category: "طعام",
      rating: 1,
      ratings: [
        {
          "2e5j66womz3": 2,
        },
        {
          "97phvst9rso": 4,
        },
        {
          ee4iaxbyznf: 1,
        },
        {
          "7s0wzfsjete": 5,
        },
        {
          qoa4xumvka: 2,
        },
        {
          "107epn1r2pbd": 2,
        },
        {
          xefr6ori1vb: 4,
        },
        {
          xpe7ssqf71h: 3,
        },
        {
          xmvs29syjo: 5,
        },
        {
          "0dswmxic64": 3,
        },
      ],
      brand: "علامة تجارية 45",
      images: [
        "https://example.com/image109.jpg",
        "https://example.com/image982.jpg",
        "https://example.com/image729.jpg",
        "https://example.com/image657.jpg",
        "https://example.com/image945.jpg",
      ],
      price: 1589,
      reviews: [
        {
          rating: 1,
          review: "مراجعة 494",
          user: "مستخدم 115",
        },
        {
          rating: 1,
          review: "مراجعة 868",
          user: "مستخدم 490",
        },
        {
          rating: 3,
          review: "مراجعة 240",
          user: "مستخدم 659",
        },
        {
          rating: 2,
          review: "مراجعة 445",
          user: "مستخدم 919",
        },
        {
          rating: 1,
          review: "مراجعة 358",
          user: "مستخدم 865",
        },
      ],
      overview: {
        highlights: "ميزات 905",
        overview: "نظرة عامة 525",
        specifications: [
          {
            "مواصفة 89": "قيمة 116",
          },
          {
            "مواصفة 47": "قيمة 260",
          },
          {
            "مواصفة 28": "قيمة 717",
          },
          {
            "مواصفة 1": "قيمة 683",
          },
          {
            "مواصفة 96": "قيمة 312",
          },
        ],
      },
    },
  },
  {
    id: "ubxeznb9rch",
    data: {
      discount: 16,
      name: "منتج 370",
      model: "موديل 1",
      stock: 967,
      subCategory: "فئة فرعية 7",
      category: "إلكترونيات",
      rating: 3,
      ratings: [
        {
          i9lcmrl37gb: 2,
        },
        {
          zmjurr1v33c: 4,
        },
        {
          jb37yziw8ij: 2,
        },
        {
          h9ou33ce8km: 5,
        },
        {
          "1by6zwkx4ll": 5,
        },
        {
          m7p0zmvtdaq: 2,
        },
        {
          ug03nsfvs9i: 5,
        },
        {
          "7uf2g2qvgdp": 1,
        },
        {
          x2jotluykyg: 5,
        },
        {
          jxcxan1s4we: 3,
        },
      ],
      brand: "علامة تجارية 44",
      images: [
        "https://example.com/image242.jpg",
        "https://example.com/image264.jpg",
        "https://example.com/image901.jpg",
        "https://example.com/image144.jpg",
        "https://example.com/image476.jpg",
      ],
      price: 6874,
      reviews: [
        {
          rating: 1,
          review: "مراجعة 495",
          user: "مستخدم 620",
        },
        {
          rating: 2,
          review: "مراجعة 991",
          user: "مستخدم 880",
        },
        {
          rating: 1,
          review: "مراجعة 77",
          user: "مستخدم 889",
        },
        {
          rating: 5,
          review: "مراجعة 411",
          user: "مستخدم 951",
        },
        {
          rating: 3,
          review: "مراجعة 627",
          user: "مستخدم 795",
        },
      ],
      overview: {
        highlights: "ميزات 889",
        overview: "نظرة عامة 481",
        specifications: [
          {
            "مواصفة 51": "قيمة 190",
          },
          {
            "مواصفة 79": "قيمة 897",
          },
          {
            "مواصفة 67": "قيمة 997",
          },
          {
            "مواصفة 41": "قيمة 109",
          },
          {
            "مواصفة 13": "قيمة 382",
          },
        ],
      },
    },
  },
  {
    id: "ure3mk23u08",
    data: {
      discount: 27,
      name: "منتج 659",
      model: "موديل 49",
      stock: 921,
      subCategory: "فئة فرعية 5",
      category: "الصحة والعناية الشخصية",
      rating: 1,
      ratings: [
        {
          u41qnk032o: 4,
        },
        {
          dihmxvnc1ym: 5,
        },
        {
          dmt384ikx6m: 4,
        },
        {
          h3kuqpr3quu: 4,
        },
        {
          "3bvye8esz4g": 2,
        },
        {
          bscep0rini: 1,
        },
        {
          gao2zr6nwxw: 4,
        },
        {
          ra5ohgjq6n: 2,
        },
        {
          sg3defoegn: 5,
        },
        {
          rvjyozo06k: 2,
        },
      ],
      brand: "علامة تجارية 58",
      images: [
        "https://example.com/image854.jpg",
        "https://example.com/image979.jpg",
        "https://example.com/image486.jpg",
        "https://example.com/image118.jpg",
        "https://example.com/image963.jpg",
      ],
      price: 1382,
      reviews: [
        {
          rating: 2,
          review: "مراجعة 639",
          user: "مستخدم 164",
        },
        {
          rating: 5,
          review: "مراجعة 617",
          user: "مستخدم 279",
        },
        {
          rating: 2,
          review: "مراجعة 992",
          user: "مستخدم 780",
        },
        {
          rating: 5,
          review: "مراجعة 719",
          user: "مستخدم 114",
        },
        {
          rating: 3,
          review: "مراجعة 698",
          user: "مستخدم 56",
        },
      ],
      overview: {
        highlights: "ميزات 479",
        overview: "نظرة عامة 998",
        specifications: [
          {
            "مواصفة 24": "قيمة 272",
          },
          {
            "مواصفة 59": "قيمة 588",
          },
          {
            "مواصفة 63": "قيمة 651",
          },
          {
            "مواصفة 26": "قيمة 61",
          },
          {
            "مواصفة 56": "قيمة 265",
          },
        ],
      },
    },
  },
  {
    id: "0ix6tkql4b3j",
    data: {
      discount: 35,
      name: "منتج 407",
      model: "موديل 68",
      stock: 805,
      subCategory: "فئة فرعية 6",
      category: "رعاية المنزل والحيوانات الأليفة",
      rating: 3,
      ratings: [
        {
          b5xdos0iexf: 3,
        },
        {
          cpxb1qj56kj: 5,
        },
        {
          qkxstpknte: 3,
        },
        {
          hxe5g9y66jk: 3,
        },
        {
          j7urzqzq7k: 4,
        },
        {
          bbrva1xm7w: 5,
        },
        {
          "0uz4zwlktnol": 4,
        },
        {
          wfsvgtzoicr: 3,
        },
        {
          iol8r7dl5dp: 1,
        },
        {
          fvy67jjk0e8: 1,
        },
      ],
      brand: "علامة تجارية 82",
      images: [
        "https://example.com/image761.jpg",
        "https://example.com/image220.jpg",
        "https://example.com/image742.jpg",
        "https://example.com/image691.jpg",
        "https://example.com/image782.jpg",
      ],
      price: 1450,
      reviews: [
        {
          rating: 3,
          review: "مراجعة 69",
          user: "مستخدم 514",
        },
        {
          rating: 1,
          review: "مراجعة 787",
          user: "مستخدم 372",
        },
        {
          rating: 3,
          review: "مراجعة 818",
          user: "مستخدم 293",
        },
        {
          rating: 2,
          review: "مراجعة 953",
          user: "مستخدم 930",
        },
        {
          rating: 1,
          review: "مراجعة 519",
          user: "مستخدم 101",
        },
      ],
      overview: {
        highlights: "ميزات 724",
        overview: "نظرة عامة 26",
        specifications: [
          {
            "مواصفة 53": "قيمة 3",
          },
          {
            "مواصفة 65": "قيمة 13",
          },
          {
            "مواصفة 49": "قيمة 862",
          },
          {
            "مواصفة 41": "قيمة 433",
          },
          {
            "مواصفة 22": "قيمة 628",
          },
        ],
      },
    },
  },
  {
    id: "058vl72t4wia",
    data: {
      discount: 1,
      name: "منتج 991",
      model: "موديل 22",
      stock: 464,
      subCategory: "فئة فرعية 8",
      category: "الصحة والعناية الشخصية",
      rating: 4,
      ratings: [
        {
          hws8k7h24vd: 3,
        },
        {
          "3932xob1d03": 4,
        },
        {
          cvfe42pm2i4: 1,
        },
        {
          pjuw5kpwc5: 1,
        },
        {
          m5ig6gt0c9: 2,
        },
        {
          "2lfzquwx2ql": 2,
        },
        {
          eytsunbi87q: 3,
        },
        {
          "9k0b6vusck": 3,
        },
        {
          lguvmxjzqj: 1,
        },
        {
          bn4vevczzmu: 5,
        },
      ],
      brand: "علامة تجارية 75",
      images: [
        "https://example.com/image943.jpg",
        "https://example.com/image677.jpg",
        "https://example.com/image728.jpg",
        "https://example.com/image126.jpg",
        "https://example.com/image481.jpg",
      ],
      price: 685,
      reviews: [
        {
          rating: 3,
          review: "مراجعة 615",
          user: "مستخدم 539",
        },
        {
          rating: 3,
          review: "مراجعة 270",
          user: "مستخدم 56",
        },
        {
          rating: 4,
          review: "مراجعة 985",
          user: "مستخدم 279",
        },
        {
          rating: 1,
          review: "مراجعة 146",
          user: "مستخدم 923",
        },
        {
          rating: 1,
          review: "مراجعة 608",
          user: "مستخدم 451",
        },
      ],
      overview: {
        highlights: "ميزات 572",
        overview: "نظرة عامة 580",
        specifications: [
          {
            "مواصفة 36": "قيمة 298",
          },
          {
            "مواصفة 21": "قيمة 864",
          },
          {
            "مواصفة 92": "قيمة 626",
          },
          {
            "مواصفة 80": "قيمة 896",
          },
          {
            "مواصفة 58": "قيمة 247",
          },
        ],
      },
    },
  },
  {
    id: "kdoxi6l4xzb",
    data: {
      discount: 2,
      name: "منتج 429",
      model: "موديل 64",
      stock: 246,
      subCategory: "فئة فرعية 5",
      category: "رعاية المنزل والحيوانات الأليفة",
      rating: 3,
      ratings: [
        {
          yaatys3v97: 4,
        },
        {
          "092dwpztcep4": 4,
        },
        {
          a4gmc9k8gj: 4,
        },
        {
          si62e4pbon: 5,
        },
        {
          xcpivowvexn: 5,
        },
        {
          h1uxqwqatae: 3,
        },
        {
          gzsp6diikks: 5,
        },
        {
          hvwv08vr49r: 5,
        },
        {
          wl04i7n373: 2,
        },
        {
          "9eyeeymwhhg": 5,
        },
      ],
      brand: "علامة تجارية 73",
      images: [
        "https://example.com/image337.jpg",
        "https://example.com/image480.jpg",
        "https://example.com/image392.jpg",
        "https://example.com/image724.jpg",
        "https://example.com/image259.jpg",
      ],
      price: 2145,
      reviews: [
        {
          rating: 1,
          review: "مراجعة 821",
          user: "مستخدم 160",
        },
        {
          rating: 4,
          review: "مراجعة 781",
          user: "مستخدم 454",
        },
        {
          rating: 5,
          review: "مراجعة 564",
          user: "مستخدم 512",
        },
        {
          rating: 2,
          review: "مراجعة 702",
          user: "مستخدم 569",
        },
        {
          rating: 3,
          review: "مراجعة 142",
          user: "مستخدم 56",
        },
      ],
      overview: {
        highlights: "ميزات 587",
        overview: "نظرة عامة 617",
        specifications: [
          {
            "مواصفة 58": "قيمة 1",
          },
          {
            "مواصفة 48": "قيمة 998",
          },
          {
            "مواصفة 31": "قيمة 841",
          },
          {
            "مواصفة 62": "قيمة 990",
          },
          {
            "مواصفة 99": "قيمة 769",
          },
        ],
      },
    },
  },
  {
    id: "2e6azwzi9mn",
    data: {
      discount: 4,
      name: "منتج 135",
      model: "موديل 68",
      stock: 487,
      subCategory: "فئة فرعية 2",
      category: "الطفل",
      rating: 2,
      ratings: [
        {
          fp8plx8d7q: 2,
        },
        {
          "9qgg633hd6o": 4,
        },
        {
          ebhfzyctmae: 1,
        },
        {
          rv4a8f6hxl: 3,
        },
        {
          "9ui1z1vsl6q": 1,
        },
        {
          u70t9yibp2: 5,
        },
        {
          zofs98s7nh8: 5,
        },
        {
          "5f3ckp9o7ow": 1,
        },
        {
          ol6ottpf0id: 1,
        },
        {
          "8fg3vxqh3eq": 1,
        },
      ],
      brand: "علامة تجارية 27",
      images: [
        "https://example.com/image241.jpg",
        "https://example.com/image84.jpg",
        "https://example.com/image181.jpg",
        "https://example.com/image451.jpg",
        "https://example.com/image410.jpg",
      ],
      price: 378,
      reviews: [
        {
          rating: 2,
          review: "مراجعة 300",
          user: "مستخدم 649",
        },
        {
          rating: 4,
          review: "مراجعة 20",
          user: "مستخدم 851",
        },
        {
          rating: 3,
          review: "مراجعة 718",
          user: "مستخدم 956",
        },
        {
          rating: 2,
          review: "مراجعة 402",
          user: "مستخدم 721",
        },
        {
          rating: 2,
          review: "مراجعة 807",
          user: "مستخدم 789",
        },
      ],
      overview: {
        highlights: "ميزات 264",
        overview: "نظرة عامة 8",
        specifications: [
          {
            "مواصفة 51": "قيمة 128",
          },
          {
            "مواصفة 39": "قيمة 735",
          },
          {
            "مواصفة 54": "قيمة 566",
          },
          {
            "مواصفة 61": "قيمة 691",
          },
          {
            "مواصفة 77": "قيمة 38",
          },
        ],
      },
    },
  },
  {
    id: "kvotfn8hl9a",
    data: {
      discount: 9,
      name: "منتج 171",
      model: "موديل 74",
      stock: 696,
      subCategory: "فئة فرعية 3",
      category: "الطفل",
      rating: 5,
      ratings: [
        {
          u82iez1hd5: 4,
        },
        {
          o3jyo8lkfh: 4,
        },
        {
          "3csjz8k08li": 3,
        },
        {
          "8xex5jnc2z": 4,
        },
        {
          "4f8g24pdngn": 2,
        },
        {
          "8qpoa0dilqd": 5,
        },
        {
          hsckykz3d5: 5,
        },
        {
          "03e9oa9zq3q": 4,
        },
        {
          ut62xdoe3iq: 5,
        },
        {
          a6anvs5aqv: 1,
        },
      ],
      brand: "علامة تجارية 20",
      images: [
        "https://example.com/image673.jpg",
        "https://example.com/image30.jpg",
        "https://example.com/image880.jpg",
        "https://example.com/image797.jpg",
        "https://example.com/image428.jpg",
      ],
      price: 4300,
      reviews: [
        {
          rating: 1,
          review: "مراجعة 676",
          user: "مستخدم 53",
        },
        {
          rating: 1,
          review: "مراجعة 49",
          user: "مستخدم 483",
        },
        {
          rating: 5,
          review: "مراجعة 231",
          user: "مستخدم 575",
        },
        {
          rating: 1,
          review: "مراجعة 518",
          user: "مستخدم 626",
        },
        {
          rating: 5,
          review: "مراجعة 769",
          user: "مستخدم 693",
        },
      ],
      overview: {
        highlights: "ميزات 419",
        overview: "نظرة عامة 561",
        specifications: [
          {
            "مواصفة 21": "قيمة 363",
          },
          {
            "مواصفة 78": "قيمة 570",
          },
          {
            "مواصفة 84": "قيمة 142",
          },
          {
            "مواصفة 14": "قيمة 776",
          },
          {
            "مواصفة 41": "قيمة 132",
          },
        ],
      },
    },
  },
  {
    id: "0i3m473vb4x",
    data: {
      discount: 5,
      name: "منتج 515",
      model: "موديل 71",
      stock: 999,
      subCategory: "فئة فرعية 3",
      category: "المشروبات",
      rating: 1,
      ratings: [
        {
          u3kyf0u7ze: 4,
        },
        {
          i6b8dw9haka: 3,
        },
        {
          svgduj1obm8: 4,
        },
        {
          "3tgltgjgdyy": 1,
        },
        {
          "7brne5tt9kt": 3,
        },
        {
          "5as7jwgr1qy": 2,
        },
        {
          xetvqvjggr7: 3,
        },
        {
          eqgcl4u90ye: 5,
        },
        {
          "06nc86kpt0u8": 5,
        },
        {
          "16psexy9fkn": 4,
        },
      ],
      brand: "علامة تجارية 49",
      images: [
        "https://example.com/image653.jpg",
        "https://example.com/image369.jpg",
        "https://example.com/image21.jpg",
        "https://example.com/image970.jpg",
        "https://example.com/image248.jpg",
      ],
      price: 6392,
      reviews: [
        {
          rating: 3,
          review: "مراجعة 67",
          user: "مستخدم 526",
        },
        {
          rating: 3,
          review: "مراجعة 172",
          user: "مستخدم 386",
        },
        {
          rating: 5,
          review: "مراجعة 411",
          user: "مستخدم 681",
        },
        {
          rating: 3,
          review: "مراجعة 925",
          user: "مستخدم 865",
        },
        {
          rating: 2,
          review: "مراجعة 205",
          user: "مستخدم 122",
        },
      ],
      overview: {
        highlights: "ميزات 828",
        overview: "نظرة عامة 963",
        specifications: [
          {
            "مواصفة 48": "قيمة 384",
          },
          {
            "مواصفة 57": "قيمة 342",
          },
          {
            "مواصفة 48": "قيمة 870",
          },
          {
            "مواصفة 0": "قيمة 698",
          },
          {
            "مواصفة 22": "قيمة 23",
          },
        ],
      },
    },
  },
  {
    id: "7nk0e7sbn5n",
    data: {
      discount: 28,
      name: "منتج 836",
      model: "موديل 59",
      stock: 191,
      subCategory: "فئة فرعية 6",
      category: "طعام",
      rating: 5,
      ratings: [
        {
          "39vv9yl2wks": 3,
        },
        {
          xkhpskudl28: 2,
        },
        {
          q1alaf8vpkj: 2,
        },
        {
          "5gpc2ucfrxu": 4,
        },
        {
          "9pakxmejsyk": 4,
        },
        {
          e90jeo21sx5: 1,
        },
        {
          gceviahcr34: 5,
        },
        {
          "4016o1qsn5v": 1,
        },
        {
          casc4a7vte: 4,
        },
        {
          qk88t9vyqpa: 3,
        },
      ],
      brand: "علامة تجارية 96",
      images: [
        "https://example.com/image727.jpg",
        "https://example.com/image804.jpg",
        "https://example.com/image629.jpg",
        "https://example.com/image809.jpg",
        "https://example.com/image503.jpg",
      ],
      price: 6338,
      reviews: [
        {
          rating: 5,
          review: "مراجعة 614",
          user: "مستخدم 966",
        },
        {
          rating: 1,
          review: "مراجعة 341",
          user: "مستخدم 937",
        },
        {
          rating: 2,
          review: "مراجعة 550",
          user: "مستخدم 167",
        },
        {
          rating: 3,
          review: "مراجعة 814",
          user: "مستخدم 473",
        },
        {
          rating: 5,
          review: "مراجعة 617",
          user: "مستخدم 293",
        },
      ],
      overview: {
        highlights: "ميزات 144",
        overview: "نظرة عامة 796",
        specifications: [
          {
            "مواصفة 54": "قيمة 156",
          },
          {
            "مواصفة 50": "قيمة 679",
          },
          {
            "مواصفة 18": "قيمة 844",
          },
          {
            "مواصفة 2": "قيمة 417",
          },
          {
            "مواصفة 49": "قيمة 556",
          },
        ],
      },
    },
  },
  {
    id: "4wjk81zhvc8",
    data: {
      discount: 45,
      name: "منتج 675",
      model: "موديل 1",
      stock: 736,
      subCategory: "فئة فرعية 5",
      category: "الطفل",
      rating: 5,
      ratings: [
        {
          x2xblafpeu7: 1,
        },
        {
          fi7n2skr467: 4,
        },
        {
          fgeynrjmxd5: 3,
        },
        {
          bzqncf9iuae: 4,
        },
        {
          y2qccnyfn6o: 2,
        },
        {
          valb9ey06v: 3,
        },
        {
          "78revls2xe4": 4,
        },
        {
          gzn219s3wk: 1,
        },
        {
          rwgcyw3j8n: 1,
        },
        {
          ykheijojipg: 1,
        },
      ],
      brand: "علامة تجارية 4",
      images: [
        "https://example.com/image579.jpg",
        "https://example.com/image505.jpg",
        "https://example.com/image938.jpg",
        "https://example.com/image58.jpg",
        "https://example.com/image711.jpg",
      ],
      price: 1301,
      reviews: [
        {
          rating: 4,
          review: "مراجعة 277",
          user: "مستخدم 450",
        },
        {
          rating: 2,
          review: "مراجعة 557",
          user: "مستخدم 9",
        },
        {
          rating: 5,
          review: "مراجعة 121",
          user: "مستخدم 212",
        },
        {
          rating: 4,
          review: "مراجعة 34",
          user: "مستخدم 975",
        },
        {
          rating: 1,
          review: "مراجعة 625",
          user: "مستخدم 542",
        },
      ],
      overview: {
        highlights: "ميزات 848",
        overview: "نظرة عامة 173",
        specifications: [
          {
            "مواصفة 71": "قيمة 953",
          },
          {
            "مواصفة 69": "قيمة 302",
          },
          {
            "مواصفة 19": "قيمة 340",
          },
          {
            "مواصفة 80": "قيمة 21",
          },
          {
            "مواصفة 99": "قيمة 688",
          },
        ],
      },
    },
  },
  {
    id: "cyno53yx1rk",
    data: {
      discount: 13,
      name: "منتج 966",
      model: "موديل 34",
      stock: 742,
      subCategory: "فئة فرعية 3",
      category: "الطفل",
      rating: 1,
      ratings: [
        {
          c0m9wy9tw1b: 1,
        },
        {
          zbfiewslfgl: 1,
        },
        {
          ct3bi4um7mh: 2,
        },
        {
          "0x88uwjzhlm": 3,
        },
        {
          hhyz8ulfjv8: 4,
        },
        {
          "6jypwrirprh": 5,
        },
        {
          qpo2dc7de6: 5,
        },
        {
          im5bj1ka4g8: 3,
        },
        {
          lb7ts5dx7u: 4,
        },
        {
          hh9g2mmqyo4: 4,
        },
      ],
      brand: "علامة تجارية 10",
      images: [
        "https://example.com/image868.jpg",
        "https://example.com/image345.jpg",
        "https://example.com/image82.jpg",
        "https://example.com/image970.jpg",
        "https://example.com/image213.jpg",
      ],
      price: 1251,
      reviews: [
        {
          rating: 2,
          review: "مراجعة 346",
          user: "مستخدم 906",
        },
        {
          rating: 5,
          review: "مراجعة 865",
          user: "مستخدم 229",
        },
        {
          rating: 3,
          review: "مراجعة 776",
          user: "مستخدم 517",
        },
        {
          rating: 1,
          review: "مراجعة 483",
          user: "مستخدم 959",
        },
        {
          rating: 4,
          review: "مراجعة 336",
          user: "مستخدم 129",
        },
      ],
      overview: {
        highlights: "ميزات 514",
        overview: "نظرة عامة 432",
        specifications: [
          {
            "مواصفة 58": "قيمة 817",
          },
          {
            "مواصفة 53": "قيمة 92",
          },
          {
            "مواصفة 44": "قيمة 700",
          },
          {
            "مواصفة 64": "قيمة 842",
          },
          {
            "مواصفة 85": "قيمة 955",
          },
        ],
      },
    },
  },
  {
    id: "u4vvsw6b94e",
    data: {
      discount: 32,
      name: "منتج 547",
      model: "موديل 20",
      stock: 836,
      subCategory: "فئة فرعية 5",
      category: "الطفل",
      rating: 5,
      ratings: [
        {
          "91v5062hxw": 4,
        },
        {
          vqaot9xqx7: 4,
        },
        {
          "095sniigemfw": 4,
        },
        {
          pwpyhbakok: 4,
        },
        {
          mcckuz1cnz: 3,
        },
        {
          h9at34yg0tf: 2,
        },
        {
          cvyh7cp8ebv: 2,
        },
        {
          "4904gygf2fs": 5,
        },
        {
          "8cxhh3qwf4h": 3,
        },
        {
          ujgllk6bz3: 5,
        },
      ],
      brand: "علامة تجارية 13",
      images: [
        "https://example.com/image30.jpg",
        "https://example.com/image340.jpg",
        "https://example.com/image995.jpg",
        "https://example.com/image930.jpg",
        "https://example.com/image991.jpg",
      ],
      price: 7538,
      reviews: [
        {
          rating: 1,
          review: "مراجعة 186",
          user: "مستخدم 763",
        },
        {
          rating: 4,
          review: "مراجعة 941",
          user: "مستخدم 714",
        },
        {
          rating: 5,
          review: "مراجعة 685",
          user: "مستخدم 229",
        },
        {
          rating: 2,
          review: "مراجعة 423",
          user: "مستخدم 963",
        },
        {
          rating: 3,
          review: "مراجعة 962",
          user: "مستخدم 340",
        },
      ],
      overview: {
        highlights: "ميزات 129",
        overview: "نظرة عامة 14",
        specifications: [
          {
            "مواصفة 47": "قيمة 583",
          },
          {
            "مواصفة 62": "قيمة 247",
          },
          {
            "مواصفة 61": "قيمة 14",
          },
          {
            "مواصفة 75": "قيمة 782",
          },
          {
            "مواصفة 19": "قيمة 984",
          },
        ],
      },
    },
  },
  {
    id: "7kf5ssjz2tn",
    data: {
      discount: 30,
      name: "منتج 591",
      model: "موديل 75",
      stock: 817,
      subCategory: "فئة فرعية 5",
      category: "الصحة والعناية الشخصية",
      rating: 3,
      ratings: [
        {
          akzn6bd4qhe: 3,
        },
        {
          rmc9h7yytkq: 1,
        },
        {
          ez1j8pqrae: 4,
        },
        {
          e5z27c08z0k: 5,
        },
        {
          ywi74g9gr9a: 4,
        },
        {
          wtfi1jova1: 1,
        },
        {
          gkqkevs9ml6: 3,
        },
        {
          i5d44ecf36q: 5,
        },
        {
          cjrglhlw7yi: 4,
        },
        {
          "365ts7fu7n9": 4,
        },
      ],
      brand: "علامة تجارية 58",
      images: [
        "https://example.com/image316.jpg",
        "https://example.com/image398.jpg",
        "https://example.com/image929.jpg",
        "https://example.com/image766.jpg",
        "https://example.com/image825.jpg",
      ],
      price: 3883,
      reviews: [
        {
          rating: 3,
          review: "مراجعة 341",
          user: "مستخدم 884",
        },
        {
          rating: 2,
          review: "مراجعة 566",
          user: "مستخدم 693",
        },
        {
          rating: 1,
          review: "مراجعة 27",
          user: "مستخدم 377",
        },
        {
          rating: 3,
          review: "مراجعة 751",
          user: "مستخدم 357",
        },
        {
          rating: 5,
          review: "مراجعة 103",
          user: "مستخدم 853",
        },
      ],
      overview: {
        highlights: "ميزات 332",
        overview: "نظرة عامة 906",
        specifications: [
          {
            "مواصفة 84": "قيمة 199",
          },
          {
            "مواصفة 98": "قيمة 108",
          },
          {
            "مواصفة 90": "قيمة 24",
          },
          {
            "مواصفة 22": "قيمة 602",
          },
          {
            "مواصفة 85": "قيمة 108",
          },
        ],
      },
    },
  },
  {
    id: "dmv2u2h5etv",
    data: {
      discount: 12,
      name: "منتج 606",
      model: "موديل 40",
      stock: 417,
      subCategory: "فئة فرعية 5",
      category: "الصحة والعناية الشخصية",
      rating: 4,
      ratings: [
        {
          "0f9lsezk1qzj": 2,
        },
        {
          jjb0lqq56i: 5,
        },
        {
          y2hebffbvd: 1,
        },
        {
          dalnxd78re5: 5,
        },
        {
          dxqz6eem79a: 4,
        },
        {
          w2104mopb4: 4,
        },
        {
          "9ms9siknoz7": 2,
        },
        {
          "89vtvte6vpf": 2,
        },
        {
          hnk6wzxkc0w: 1,
        },
        {
          f7w0b7qlzpl: 3,
        },
      ],
      brand: "علامة تجارية 92",
      images: [
        "https://example.com/image49.jpg",
        "https://example.com/image904.jpg",
        "https://example.com/image779.jpg",
        "https://example.com/image726.jpg",
        "https://example.com/image489.jpg",
      ],
      price: 6922,
      reviews: [
        {
          rating: 2,
          review: "مراجعة 5",
          user: "مستخدم 692",
        },
        {
          rating: 5,
          review: "مراجعة 734",
          user: "مستخدم 451",
        },
        {
          rating: 4,
          review: "مراجعة 620",
          user: "مستخدم 821",
        },
        {
          rating: 3,
          review: "مراجعة 238",
          user: "مستخدم 396",
        },
        {
          rating: 1,
          review: "مراجعة 72",
          user: "مستخدم 242",
        },
      ],
      overview: {
        highlights: "ميزات 816",
        overview: "نظرة عامة 980",
        specifications: [
          {
            "مواصفة 81": "قيمة 358",
          },
          {
            "مواصفة 83": "قيمة 736",
          },
          {
            "مواصفة 7": "قيمة 469",
          },
          {
            "مواصفة 83": "قيمة 83",
          },
          {
            "مواصفة 62": "قيمة 4",
          },
        ],
      },
    },
  },
  {
    id: "u2ks4hr2ko9",
    data: {
      discount: 27,
      name: "منتج 43",
      model: "موديل 81",
      stock: 317,
      subCategory: "فئة فرعية 5",
      category: "طعام",
      rating: 4,
      ratings: [
        {
          vxjf7az93u: 4,
        },
        {
          w32jr5rxo2: 1,
        },
        {
          l8k5fhq3uis: 1,
        },
        {
          "70c4y9reh0o": 3,
        },
        {
          vvft6da354: 4,
        },
        {
          "9sglh8z80xb": 5,
        },
        {
          "7pol0u52a5d": 2,
        },
        {
          yhjb3lxy2rc: 3,
        },
        {
          "77m6tq7uwlf": 3,
        },
        {
          ya4mtj6tnfm: 2,
        },
      ],
      brand: "علامة تجارية 48",
      images: [
        "https://example.com/image496.jpg",
        "https://example.com/image551.jpg",
        "https://example.com/image751.jpg",
        "https://example.com/image852.jpg",
        "https://example.com/image653.jpg",
      ],
      price: 4260,
      reviews: [
        {
          rating: 1,
          review: "مراجعة 471",
          user: "مستخدم 914",
        },
        {
          rating: 4,
          review: "مراجعة 264",
          user: "مستخدم 300",
        },
        {
          rating: 4,
          review: "مراجعة 630",
          user: "مستخدم 40",
        },
        {
          rating: 5,
          review: "مراجعة 429",
          user: "مستخدم 79",
        },
        {
          rating: 5,
          review: "مراجعة 133",
          user: "مستخدم 342",
        },
      ],
      overview: {
        highlights: "ميزات 516",
        overview: "نظرة عامة 253",
        specifications: [
          {
            "مواصفة 32": "قيمة 424",
          },
          {
            "مواصفة 14": "قيمة 641",
          },
          {
            "مواصفة 54": "قيمة 699",
          },
          {
            "مواصفة 12": "قيمة 905",
          },
          {
            "مواصفة 1": "قيمة 926",
          },
        ],
      },
    },
  },
  {
    id: "5liliplryia",
    data: {
      discount: 48,
      name: "منتج 642",
      model: "موديل 0",
      stock: 914,
      subCategory: "فئة فرعية 3",
      category: "طعام",
      rating: 5,
      ratings: [
        {
          jacc6mxyupl: 1,
        },
        {
          "3axgdzx8x41": 3,
        },
        {
          d72cdzwdvtt: 1,
        },
        {
          vz0x7gns8e: 5,
        },
        {
          "8qm9hs5jcc8": 5,
        },
        {
          vj68qvamez: 1,
        },
        {
          delzyouxl0p: 2,
        },
        {
          c913bub05cs: 2,
        },
        {
          "20hqyxx0ia7": 5,
        },
        {
          "829fnwt22pk": 2,
        },
      ],
      brand: "علامة تجارية 79",
      images: [
        "https://example.com/image103.jpg",
        "https://example.com/image620.jpg",
        "https://example.com/image648.jpg",
        "https://example.com/image301.jpg",
        "https://example.com/image401.jpg",
      ],
      price: 3971,
      reviews: [
        {
          rating: 5,
          review: "مراجعة 405",
          user: "مستخدم 965",
        },
        {
          rating: 5,
          review: "مراجعة 261",
          user: "مستخدم 884",
        },
        {
          rating: 4,
          review: "مراجعة 356",
          user: "مستخدم 391",
        },
        {
          rating: 4,
          review: "مراجعة 682",
          user: "مستخدم 453",
        },
        {
          rating: 4,
          review: "مراجعة 468",
          user: "مستخدم 463",
        },
      ],
      overview: {
        highlights: "ميزات 269",
        overview: "نظرة عامة 277",
        specifications: [
          {
            "مواصفة 5": "قيمة 857",
          },
          {
            "مواصفة 44": "قيمة 636",
          },
          {
            "مواصفة 12": "قيمة 542",
          },
          {
            "مواصفة 44": "قيمة 781",
          },
          {
            "مواصفة 34": "قيمة 176",
          },
        ],
      },
    },
  },
  {
    id: "b4v1ebtlrls",
    data: {
      discount: 15,
      name: "منتج 95",
      model: "موديل 95",
      stock: 142,
      subCategory: "فئة فرعية 7",
      category: "الطفل",
      rating: 4,
      ratings: [
        {
          ybgbum32uw: 3,
        },
        {
          h73pk2x5auc: 4,
        },
        {
          "6e9u5np86nm": 4,
        },
        {
          "18pduoolm50i": 5,
        },
        {
          d9axfemis68: 5,
        },
        {
          jcirkdfolag: 3,
        },
        {
          rl2bk9lm9td: 2,
        },
        {
          kh2d7itema: 1,
        },
        {
          "9ouywks7vcr": 5,
        },
        {
          e2zwonx07qm: 2,
        },
      ],
      brand: "علامة تجارية 4",
      images: [
        "https://example.com/image396.jpg",
        "https://example.com/image138.jpg",
        "https://example.com/image140.jpg",
        "https://example.com/image664.jpg",
        "https://example.com/image325.jpg",
      ],
      price: 9248,
      reviews: [
        {
          rating: 2,
          review: "مراجعة 967",
          user: "مستخدم 406",
        },
        {
          rating: 3,
          review: "مراجعة 30",
          user: "مستخدم 660",
        },
        {
          rating: 3,
          review: "مراجعة 520",
          user: "مستخدم 993",
        },
        {
          rating: 4,
          review: "مراجعة 785",
          user: "مستخدم 200",
        },
        {
          rating: 1,
          review: "مراجعة 756",
          user: "مستخدم 81",
        },
      ],
      overview: {
        highlights: "ميزات 930",
        overview: "نظرة عامة 789",
        specifications: [
          {
            "مواصفة 5": "قيمة 251",
          },
          {
            "مواصفة 76": "قيمة 155",
          },
          {
            "مواصفة 63": "قيمة 19",
          },
          {
            "مواصفة 48": "قيمة 61",
          },
          {
            "مواصفة 54": "قيمة 261",
          },
        ],
      },
    },
  },
  {
    id: "c529l4wnrjw",
    data: {
      discount: 5,
      name: "منتج 357",
      model: "موديل 17",
      stock: 309,
      subCategory: "فئة فرعية 2",
      category: "المشروبات",
      rating: 4,
      ratings: [
        {
          h4gi0qiwklg: 2,
        },
        {
          xlbgml79eai: 1,
        },
        {
          k5hnr6f6uwq: 2,
        },
        {
          b6yl4o8xi0o: 4,
        },
        {
          zr8lm7vg2dj: 1,
        },
        {
          "20v3o8pncoh": 2,
        },
        {
          "1jad3gh1i9w": 5,
        },
        {
          ixnyw2cqgs: 5,
        },
        {
          q3bee36s5ig: 3,
        },
        {
          "4ns2trtbp9q": 3,
        },
      ],
      brand: "علامة تجارية 68",
      images: [
        "https://example.com/image821.jpg",
        "https://example.com/image738.jpg",
        "https://example.com/image933.jpg",
        "https://example.com/image191.jpg",
        "https://example.com/image455.jpg",
      ],
      price: 3055,
      reviews: [
        {
          rating: 2,
          review: "مراجعة 987",
          user: "مستخدم 124",
        },
        {
          rating: 4,
          review: "مراجعة 484",
          user: "مستخدم 590",
        },
        {
          rating: 2,
          review: "مراجعة 340",
          user: "مستخدم 811",
        },
        {
          rating: 3,
          review: "مراجعة 653",
          user: "مستخدم 46",
        },
        {
          rating: 1,
          review: "مراجعة 629",
          user: "مستخدم 399",
        },
      ],
      overview: {
        highlights: "ميزات 801",
        overview: "نظرة عامة 610",
        specifications: [
          {
            "مواصفة 87": "قيمة 999",
          },
          {
            "مواصفة 77": "قيمة 13",
          },
          {
            "مواصفة 77": "قيمة 860",
          },
          {
            "مواصفة 95": "قيمة 602",
          },
          {
            "مواصفة 75": "قيمة 496",
          },
        ],
      },
    },
  },
  {
    id: "mrtpu6x56i",
    data: {
      discount: 2,
      name: "منتج 361",
      model: "موديل 85",
      stock: 341,
      subCategory: "فئة فرعية 6",
      category: "طعام",
      rating: 5,
      ratings: [
        {
          v8kq190maxe: 1,
        },
        {
          efne4fcn8ip: 5,
        },
        {
          makik9eq4sc: 1,
        },
        {
          sbbr1vauc4: 5,
        },
        {
          pqbc4j8q5z: 3,
        },
        {
          "6iy7fx4buvm": 1,
        },
        {
          e44x1yo783b: 2,
        },
        {
          tq4m02o75up: 1,
        },
        {
          poeowqjqrv: 4,
        },
        {
          "8w6s8t9ltxj": 5,
        },
      ],
      brand: "علامة تجارية 6",
      images: [
        "https://example.com/image920.jpg",
        "https://example.com/image97.jpg",
        "https://example.com/image96.jpg",
        "https://example.com/image537.jpg",
        "https://example.com/image497.jpg",
      ],
      price: 782,
      reviews: [
        {
          rating: 1,
          review: "مراجعة 787",
          user: "مستخدم 231",
        },
        {
          rating: 1,
          review: "مراجعة 517",
          user: "مستخدم 864",
        },
        {
          rating: 2,
          review: "مراجعة 238",
          user: "مستخدم 546",
        },
        {
          rating: 5,
          review: "مراجعة 26",
          user: "مستخدم 528",
        },
        {
          rating: 4,
          review: "مراجعة 59",
          user: "مستخدم 710",
        },
      ],
      overview: {
        highlights: "ميزات 101",
        overview: "نظرة عامة 90",
        specifications: [
          {
            "مواصفة 27": "قيمة 467",
          },
          {
            "مواصفة 8": "قيمة 397",
          },
          {
            "مواصفة 2": "قيمة 231",
          },
          {
            "مواصفة 90": "قيمة 592",
          },
          {
            "مواصفة 44": "قيمة 634",
          },
        ],
      },
    },
  },
  {
    id: "sd9vna9izgi",
    data: {
      discount: 30,
      name: "منتج 546",
      model: "موديل 53",
      stock: 971,
      subCategory: "فئة فرعية 0",
      category: "المشروبات",
      rating: 1,
      ratings: [
        {
          "2hps7ouv2pr": 5,
        },
        {
          yyycwah3v6: 4,
        },
        {
          egj5wmep1fs: 3,
        },
        {
          "9qyno6z8me": 4,
        },
        {
          nrw8jtpptpo: 1,
        },
        {
          y4cqsx4i2hb: 3,
        },
        {
          fpkhxjmy5ic: 5,
        },
        {
          "1d20956ueii": 3,
        },
        {
          lerk9plxw59: 3,
        },
        {
          h93ireg7b7k: 3,
        },
      ],
      brand: "علامة تجارية 85",
      images: [
        "https://example.com/image257.jpg",
        "https://example.com/image593.jpg",
        "https://example.com/image747.jpg",
        "https://example.com/image798.jpg",
        "https://example.com/image863.jpg",
      ],
      price: 283,
      reviews: [
        {
          rating: 2,
          review: "مراجعة 428",
          user: "مستخدم 431",
        },
        {
          rating: 5,
          review: "مراجعة 552",
          user: "مستخدم 402",
        },
        {
          rating: 5,
          review: "مراجعة 912",
          user: "مستخدم 626",
        },
        {
          rating: 2,
          review: "مراجعة 474",
          user: "مستخدم 126",
        },
        {
          rating: 2,
          review: "مراجعة 25",
          user: "مستخدم 574",
        },
      ],
      overview: {
        highlights: "ميزات 527",
        overview: "نظرة عامة 37",
        specifications: [
          {
            "مواصفة 48": "قيمة 184",
          },
          {
            "مواصفة 60": "قيمة 617",
          },
          {
            "مواصفة 6": "قيمة 76",
          },
          {
            "مواصفة 20": "قيمة 890",
          },
          {
            "مواصفة 28": "قيمة 731",
          },
        ],
      },
    },
  },
];
