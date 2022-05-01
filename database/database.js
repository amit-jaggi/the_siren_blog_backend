const database = [
    {
        id : '1',
        title : `Kerala: God's Own Country`,
        body : `An equable climate, beautiful and serene beaches, peaceful stretch of backwaters and canals, exotic wildlife and lush green hill stations are some of the main attractions of Kerala which make a wonderful place to visit.`,
        category : 'Tourism',
        date : `January 24, 2022`,
        url : 'https://wallpaperaccess.com/full/1635201.jpg'
    },
    {
        id : '2',
        title : 'Madhya Pradesh: The Heart of Incredible India',
        body : `It is known as the “Heart of India” because of a lot many things that it has to offer. It has been home to cultural and spiritual heritage of almost all the religions.`,
        category : 'Tourism',
        date : `February 24, 2022`,
        url : 'https://gos3.ibcdn.com/india-madhya-pradesh-148408153806o.jpeg'
    },
    {
        id : '3',
        title : 'Karnataka: One state Many Worlds',
        body : `Karnataka is primarily known for its Heritage destinations and its Wildlife/ National Parks. Apart from that, it is also famous for its magical hill stations and spectacular waterfalls.`,
        category : 'Tourism',
        date : `January 2, 2022`,
        url : 'https://www.karnatakatourism.org/wp-content/uploads/2021/01/india-national-tourism-day.jpg'
    },
    {
        id : '4',
        title : 'Sikkim: Small But Beautiful',
        body : `A part of the Eastern Himalaya, Sikkim is notable for its biodiversity, including alpine and subtropical climates, as well as being a host to Kangchenjunga, the highest peak in India and third highest on Earth.`,
        category : 'Tourism',
        date : `March 14, 2022`,
        url : 'https://www.adotrip.com/public/images/areas/master_images/5c3f0a99aa3ec-Tashiding_Monastery_Attractions.jpg'
    },
    {
        id : '5',
        title : 'Punjab: India Begins Here',
        body : `The Harmandir Sahib in Amritsar is the holiest site in Sikhism, and one of the most visited tourist attractions in India.`,
        category : 'Tourism',
        date : `February 24, 2022`,
        url : 'https://cdn.britannica.com/45/84845-050-96697731/Harmandir-Sahib-Amritsar-India-Punjab.jpg'
    },
    {
        id : '1',
        title : `Sweat now shine later`,
        body : `Weight training is a type of strength training that uses weights for resistance. Weight training provides a stress to the muscles that causes them to adapt and get stronger, similar to the way aerobic conditioning strengthens your heart.`,
        category : 'Fitness',
        date : `January 22, 2022`,
        url : 'https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260'
    },
    {
        id : '2',
        title : `Balance`,
        body : `Actively working to maintain and improve your balance and stability is incredibly important, especially as you age. Improving your balance can help you avoid falls and stay active and independent.`,
        category : 'Fitness',
        date : `January 22, 2022`,
        url : `https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/complex-body-movement-royalty-free-image-941096852-1547665020.jpg?resize=480:*`
    },
    {
        id : '3',
        title : `Aerobic`,
        body : `Activity that you do for more than a few minutes at a time is aerobic training. When you're doing this type of exercise, your body uses your aerobic energy system for power. And, because that metabolic system uses oxygen to help create energy, your breathing rate increases.`,
        category : 'Fitness',
        date : `January 22, 2022`,
        url : `https://post.healthline.com/wp-content/uploads/2019/02/Male_Jump_Rope_Fitness-732x549-Thumbnail.jpg`,
    },
    {
        id : '4',
        title : `Sprint`,
        body : `Sprinting is running over a short distance at the top-most speed of the body in a limited period of time. The use of starting blocks allows the sprinter to perform an enhanced isometric preload.`,
        category : 'Fitness',
        date : `January 22, 2022`,
        url : `https://www.snackinginsneakers.com/wp-content/uploads/2020/07/Sprinting-vs-Jogging-2.jpg`,
    },
    {
        id : '5',
        title : `Flexibility`,
        body : `Possibly one of the most important types of fitness training is flexibility and mobility. Flexibility is the ability of your muscles to stretch. Mobility is being able to move your joints and tissues through their full range of motion`,
        category : 'Fitness',
        date : `January 22, 2022`,
        url : `https://healthbeat.spectrumhealth.org/wp-content/uploads/2018/01/StretchMAIN.jpg`,
    },
    {
        id : '1',
        title : `Cyber Security: Prevention is better than cure`,
        body : `Cyber security can be described as the collective methods, technologies, and processes to help protect the confidentiality, integrity, and availability of computer systems, networks and data, against cyber-attacks or unauthorized access.`,
        category : `Technology`,
        date : `January 1, 2022`,
        url : `https://www.afnor.org/en/wp-content/uploads/sites/2/2017/03/20170303_webinar_cybersecurity.jpg`
    },
    {
        id : '2',
        title : `Blockchain`,
        body : `The blockchain is an open, immutable distributed public ledger that allows transactions to take place in a decentralised manner without a need for a trusted third party. Bitcoin, the first successful cryptocurrency, is a peer-to-peer electronic payment system.`,
        category : `Technology`,
        date : `December 12, 2021`,
        url : `	https://ventsmagazine.com/wp-content/uploads/2020/10/dn-blockchain.jpg`
    },
    {
        id : '3',
        title : `Artificial Intelligence (AI) & Machine Learning`,
        body : `Machine learning is the science that will take artificial intelligence to a level beyond what humans can do. ML is used to create AI systems that can learn from data rather than through programming. This will allow machines to adapt to new challenges over time.`,
        category : `Technology`,
        date : `Sewptember 31, 2021`,
        url : `	https://res.infoq.com/articles/problem-with-ai/en/headerimage/GettyImages-817293926-2.jpg`
    },
    {
        id : '4',
        title : `Internet of Things (IoT)`,
        body : `The Internet of Things is a technological revolution that represents the future of computing and communications, and its development depends on dynamic technical innovation in a number of important fields, from wireless sensors to nanotechnology.`,
        category : `Technology`,
        date : `February 2, 2022`,
        url : `https://www.bachly.com/wp-content/uploads/2018/08/internet-things.jpg`
    },
    {
        id : '5',
        title : `Cryptography`,
        body : `It is data encryption technology which provides for secure communication in the presence of malicious third-parties—known as adversaries. Encryption uses an algorithm and a key to transform an input (i.e., plaintext) into an encrypted output (i.e., ciphertext).`,
        category : `Technology`,
        date : `April 21, 2022`,
        url : `https://edge.app/wp-content/uploads/2019/05/crypto-crypto-edge.jpg`
    },
    {
        id :'1',
        title : 'John Abraham in Attack',
        body : `Attack is an upcoming Hindi movie scheduled to be released on 26 Jan, 2022. The movie is directed by Lakshya Raj Anand and will feature John Abraham, Jacqueline Fernandez and Rakul Preet Singh as lead characters.`,
        category : 'Bollywood',
        date : 'January 26, 2022',
        url : 'https://i.ytimg.com/vi/_HVOgUwv1YM/maxresdefault.jpg'
    },
    {
        id :'2',
        title : 'Aayush Sharma in Antim: The Final Truth',
        body : `With intense action and drama (a tad too much), Antim: The Final Truth checks some of the boxes for mass entertainment.`,
        category : 'Bollywood',
        date : 'November 26, 2021',
        url : 'https://images.hindustantimes.com/img/2021/09/07/550x309/antim_salman_khan_1631001005060_1631001022678.jpg'
    },
    {
        id :'3',
        title : 'Faran Aktar in Toofaan',
        body : `Toofaan is a 2021 Bollywood sports-drama, helmed by Rakeysh Omprakash Mehra. The movie star Farhan Akhtar, Paresh Rawal and Mrunal Thakur in the lead roles. In Toofan, Farhan will be essaying the role of a boxer. The film is releasing on 16th July 2021 on OTT platform Amazon Prime.`,
        category : 'Bollywood',
        date : 'July 16, 2021',
        url : 'https://images.indianexpress.com/2021/06/toofan-trailer-.jpg'
    },
    {
        id :'4',
        title : 'Allu Arjun in Pushpa: The Rise',
        body : `Story of Pushpa Raj, a lorry driver in Seshachalam forests of South India, set in the backdrop of red sandalwood smuggling. Red Sandalwood is endemic to South-Eastern Ghats (mountain range) of India.`,
        category : 'Bollywood',
        date : 'December 17, 2021',
        url : 'https://images.livemint.com/img/2021/05/14/1600x900/Pushpa_1620969459135_1620969466386.jpg'
    },
    {
        id :'5',
        title : 'Parineeti Chopra in Saina',
        body : `The film follows the career highs and lows of the former world no 1, India’s ace shuttler, Saina Nehwal. It also pays tribute to the people who immensely contribute to her resilience and unbreakable spirit.`,
        category : 'Bollywood',
        date : 'March 26, 2021',
        url : 'https://i.ytimg.com/vi/55XTHZtWtH4/maxresdefault.jpg'
    },
    {
        id :'1',
        title : `Chicken Tikka Masala`,
        body : `Chicken tikka masala is a dish consisting of roasted marinated chicken chunks in spiced curry sauce. The curry is usually creamy and orange-coloured. The dish was popularized by cooks from the Indian subcontinent living in Great Britain and is offered at restaurants around the world.`,
        category : 'Food',
        date : `January 29, 2022`,
        url : `https://www.archanaskitchen.com/images/archanaskitchen/1-Author/Karthika_Gopalakrishnan/Chicken_Tikka_Masala.jpg`,
    },
    {
        id :'2',
        title : `Masala Dosa`,
        body : `Masala dosa is a variation of the popular South Indian dosa, which has its origins in Tuluva Udupi cuisine of Karnataka. It is made from rice, lentils, potato, fenugreek, ghee and curry leaves, and served with chutneys and sambar.`,
        category : 'Food',
        date : `January 29, 2022`,
        url : `https://vismaifood.com/storage/app/uploads/public/8b4/19e/427/thumb__1200_0_0_0_auto.jpg`,
    },
    {
        id :'3',
        title : `Paneer Tikka`,
        body : `Paneer tikka is an Indian dish made from chunks of paneer marinated in spices and grilled in a tandoor. It is a vegetarian alternative to chicken tikka and other meat dishes. It is a popular dish that is widely available in India and countries with an Indian diaspora.`,
        category : 'Food',
        date : `January 29, 2022`,
        url : `https://www.indianhealthyrecipes.com/wp-content/uploads/2021/07/paneer-tikka-restaurant-style.jpg`,
    },
    {
        id :'4',
        title : `Maach Bhaat`,
        body : `Bengal has been famous for its food and cuisine ever since the establishment of civilization in the landscape of gluttons, made up of the sovereign state of Bangladesh (earlier East Bengal or East Pakistan) and the Indian state of West Bengal.`,
        category : 'Food',
        date : `January 29, 2022`,
        url : `https://www.archanaskitchen.com/images/archanaskitchen/1-Author/ruby_pathak-yahoo.com/hilsa_fish_curry_bengali_style.JPG`,
    },
    {
        id :'5',
        title : `Malai Kofta`,
        body : `It is a delicious dish of fried balls of potato and paneer in a rich and creamy mild gravy made with sweet onions and tomatoes. Malai means cream and kofta are fried balls. So malai kofta literally translates to koftas dunked in a creamy sauce. It is a popular Indian vegetarian dish in which potato paneer balls are served with a delicious, smooth, rich & creamy gravy.`,
        category : 'Food',
        date : `January 29, 2022`,
        url : `https://www.indianhealthyrecipes.com/wp-content/uploads/2018/07/malai-kofta-recipe.jpg`,
    }
]

exports.database = database;