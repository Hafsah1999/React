const Data = [
    {
        id: 1,
        place: "Agra",
        Image: 'https://t3.gstatic.com/licensed-image?q=tbn:ANd9GcQu14ZrQcOZOLXw8BKotigqUK1P6GZU3gqyWkXogSy8EWfbKJObTsBngF2nRew8gWm2',
        content: 'Agra is a city on the banks of the Yamuna river in the Indian state of Uttar Pradesh.'
    },
    {
        id: 2,
        place: "Jaipur",
        Image: 'https://m.economictimes.com/thumb/msid-70104165,width-1200,height-900,resizemode-4,imgsize-1445127/jaipur_gettyimages.jpg',
        content: 'Jaipur. Jaipur. The Pink City of Jaipur is the capital of Rajasthan. '
    },
    {
        id: 3,
        place: "Rishikesh",
        Image: 'https://www.abhibus.com/blog/wp-content/uploads/2023/06/Top-10-Tourist-Places-to-Visit-in-Rishikesh-696x464.jpg',
        content: 'Rishikesh is a city in Indian northern state of Uttarakhand, in the Himalayan foothills beside the Ganges River.'
    },
    {
        id: 4,
        place: "Ooty",
        Image: 'https://t3.gstatic.com/licensed-image?q=tbn:ANd9GcTDSwjwiW92K2MBeK8rQL0MTtVcZ6xT-cH24xfaj3Aj_UDnPhmIrOY6ncRkzthXyJTU',
        content: 'Ooty is a resort town in the Western Ghats mountains, in southern India&apos;s Tamil Nadu state.'
    },
    {
        id: 5,
        place: "Munnar",
        Image: 'https://t1.gstatic.com/licensed-image?q=tbn:ANd9GcQ6aXO76Ow6I55t6nahzk9n8MNys3sjj_EXNqQ4uUL4W0hEZUXspvXbShy43O48yLsc',
        content: 'Munnar is a town in the Western Ghats mountain range in India’s Kerala state.'
    },
    {
        id: 6,
        place: "Udaipur",
        Image: 'https://t0.gstatic.com/licensed-image?q=tbn:ANd9GcQbdWrGllzEtbVgkrJGl2CXGqjnZuKCLz2VDpzfl6_vSRRH51z5d7gcZY3hMYXDQJuF',
        content: 'Udaipur, formerly the capital of the Mewar Kingdom, is a city in the western Indian state of Rajasthan.'
    },
    {
        id: 7,
        place: "Kolkata",
        Image: 'https://t3.gstatic.com/licensed-image?q=tbn:ANd9GcR5_Ro0MJq2s4FibnysM_etwGi7xmnR9k79okP8gUFBoglo11rS43XtFM2n1V2XZGBk',
        content: 'Kolkata (formerly Calcutta) is the capital of India&apos;s West Bengal state.'
    },
    {
        id: 8,
        place: "Shimla",
        Image: 'https://t1.gstatic.com/licensed-image?q=tbn:ANd9GcT_eax0EycLMsUE4AvHhGyEwhQkQJySDHbDINUmmEpvYe_T7cwIOQiy3-KlPn-0UPFO',
        content: 'Shimla is the capital of the northern Indian state of Himachal Pradesh, in the Himalayan foothills'
    },
    {
        id: 9,
        place: "Mysuru",
        Image: 'https://t0.gstatic.com/licensed-image?q=tbn:ANd9GcRei_cE_eiAQEbr6mrGzNfZJ38RG14sB4IpFOroQ_pCnazMKm4iTvbJxTusAmNbI1DW',
        content: 'Mysore (or Mysuru), a city in India&apos;s southwestern Karnataka state.'
    },
    {
        id: 10,
        place: "Jodhpur",
        Image: 'https://t3.gstatic.com/licensed-image?q=tbn:ANd9GcSs4NmRhi8oqP99XQ9GJG7dLiaG5a14rVfbz-MLoezJbeGIQgtOwIJB04rb4miAdTlq',
        content: 'Jodhpur is a city in the Thar Desert of the northwest Indian state of Rajasthan'
    },
    {
        id: 11,
        place: "Srinagar",
        Image: 'https://t3.gstatic.com/licensed-image?q=tbn:ANd9GcQmmzV8V3AowCz3h3LpgBj9KjE_R7M5u-rihidzTKM1sAn77zsP8Aa69ok83LlReFVD',
        content: 'Srinagar is a city in Indian-administered Jammu and Kashmir in the disputed Kashmir region.'
    },
    {
        id: 12,
        place: "Pune",
        Image: 'https://t2.gstatic.com/licensed-image?q=tbn:ANd9GcSZ3cTbQo9lHHkMk0v3Ey4oOpbYHt_ANkvDlApPRLYKDCAvlBk_ZyrZyJ0h471rKmYt',
        content: 'Pune is a sprawling city in the western Indian state of Maharashtra'
    },
    {
        id:13,
        place: "Lucknow",
        Image:'https://lp-cms-production.imgix.net/2022-03/500pxRF_26117913.jpg',
        content: 'Lucknow was the capital of the Awadh region, controlled by the Delhi Sultanate and later the Mughal Empire'
    },
    {
        id:14,
        place:"Delhi",
        Image:'https://www.moxon.net/images/india/800/delhi1.jpg',
        content:'Delhi, officially the National Capital Territory (NCT) of Delhi, is a city and a union territory of India containing New Delhi, the capital of India.',

    },
    {
        id: 15,
        place: "Munnar",
        Image: 'https://t1.gstatic.com/licensed-image?q=tbn:ANd9GcQ6aXO76Ow6I55t6nahzk9n8MNys3sjj_EXNqQ4uUL4W0hEZUXspvXbShy43O48yLsc',
        content: 'Munnar is a town in the Western Ghats mountain range in India’s Kerala state.'
    },
    {
        id: 16,
        place: "Udaipur",
        Image: 'https://t0.gstatic.com/licensed-image?q=tbn:ANd9GcQbdWrGllzEtbVgkrJGl2CXGqjnZuKCLz2VDpzfl6_vSRRH51z5d7gcZY3hMYXDQJuF',
        content: 'Udaipur, formerly the capital of the Mewar Kingdom, is a city in the western Indian state of Rajasthan.'
    },
]




export default Data;
