// ============================================
// 상품 데이터
// ============================================
// 이 파일은 모든 상품 정보를 담고 있는 데이터 객체입니다.
// 베스트 상품, 신상품, 특가 상품으로 구분되어 있습니다.

// 상품 데이터 객체
const productsData = {
    // 베스트 상품 목록
    best: [
        {
            id: 1,
            title: '[한복 증정]레나베어 물망초 M',
            price: 199000,
            salePrice: 175120,
            discount: 12,
            rating: 4.9,
            reviews: 213,
            image: 'https://ecimg.cafe24img.com/pg440b54139354047/teddytales/web/product/extra/big/20260128/c277ceb1de77b4867c0da9adac393888.png',
            images: [
                'https://ecimg.cafe24img.com/pg440b54139354047/teddytales/web/product/big/20260130/1f042ce8eb86dfca2c3685f6960de61e.png',
                'https://ecimg.cafe24img.com/pg440b54139354047/teddytales/web/product/extra/big/20260128/a4adc512ab347fb1c72b12f81a0eb543.png',
                'https://ecimg.cafe24img.com/pg440b54139354047/teddytales/web/product/extra/big/20260128/ec53ecb50b14c1f64168f3bc24229c10.png',
                'https://ecimg.cafe24img.com/pg440b54139354047/teddytales/web/product/extra/big/20260128/c277ceb1de77b4867c0da9adac393888.png',
            ],
            badge: 'hot',
            badgeText: 'HOT',
            description: `
                <h3>사랑을 선물하세요, 테디테일즈</h3>
                <p>형태가 다양한 사랑을 통합시켜주는 테이테일즈 물망초 S,M</p>
                <h4>물망초 M의 매력을 확인해 보세요!</h4>
                <ul>
                    <li>꽃 핀이 사랑스러운 분위기를 더해줍니다</li>
                    <li>정교한 디테일로 고급스러운 느낌을 줍니다</li>
                    <li>눈, 코, 입의 크기와 배치가 자연스럽고 정돈된 느낌입니다</li>
                </ul>
                <h4>100% 프리미엄 핸드메이드</h4>
                <ul>
                    <li>하나부터 열까지 수작업으로 진행되는 레나베어 제작,</li>
                    <li>오랜작업시간으로 양상형 인형보다 생산성이 극도로 낮아요</li>
                    <li>하지만 새 주인님이 10년이 넘게 함께할</li>
                    <li>소중한 반려곰이라면 퀄리티는 포기할 수 없죠!</li>
                </ul>
            `,
            spec: {
                '스탠드 높이': '약 30cm',
                '앉은 높이': '약 23cm',
            },
            reviewList: [
                {
                    id: 1,
                    author: 'nobadino**',
                    rating: 5,
                    date: '2026.02.06',
                    content: '심장이 아프도록 귀여워요 덕분에 한 달 동안 많이 행복했습니다. ',
                    helpful: 234,
                    verified: true
                },
                {
                    id: 2,
                    author: '황**',
                    rating: 4,
                    date: '2026.02.03',
                    content: '너무 귀여워서 다들 이거 뭐냐고 물어볼때 핀을 뺐다 껴주면 탄성이 터집니다.',
                    helpful: 189,
                    verified: true
                },
                {
                    id: 3,
                    author: '김**',
                    rating: 5,
                    date: '2026.01.30',
                    content: '귀여운건 한번 더♥ 너무 사랑스럽고 포근한 느낌이 들어서 바로 마음을 빼았겼어요',
                    helpful: 156,
                    verified: true
                },
                {
                    id: 4,
                    author: '최**',
                    rating: 4,
                    date: '2026.01.13',
                    content: '제가 제일 탐내던 시리즈인 물망초와 한복 세트로 판매하는 거에요!! 그래서 이번에는 못참고 질러버렸어요.',
                    helpful: 98,
                    verified: false
                },
                {
                    id: 5,
                    author: '정**',
                    rating: 5,
                    date: '2026.02.10',
                    content: '너무너무 귀여워요. 제 생일이 다가와서 저한테 선물했어요.',
                    helpful: 267,
                    verified: true
                }
            ]
        },
        {
            id: 2,
            title: '레나버니 S Drop-ear (20cm)',
            price: 114000,
            salePrice: 91200,
            discount: 20,
            rating: 4.9,
            reviews: 368,
            image: 'https://ecimg.cafe24img.com/pg440b54139354047/teddytales/web/product/big/20251210/1d5edb393218d20d3de4c781e95261b4.png',
            images: [
                'https://ecimg.cafe24img.com/pg440b54139354047/teddytales/web/product/big/20251210/1d5edb393218d20d3de4c781e95261b4.png',
                'https://ecimg.cafe24img.com/pg440b54139354047/teddytales/web/product/extra/big/20250114/a585a57b97023feb8ecc49fd726f2482.png',
                'https://ecimg.cafe24img.com/pg440b54139354047/teddytales/web/product/extra/small/20250114/79e27bf9d4b7cd3846d2f9fc3b9113d0.png',
                'https://ecimg.cafe24img.com/pg440b54139354047/teddytales/web/product/extra/big/20250114/db0e086f656b96b4f8119c9609a68c4e.png',
                'https://ecimg.cafe24img.com/pg440b54139354047/teddytales/web/product/extra/big/20250114/dd7a1edf04aa179de3165fc6db396dc7.png'
            ],
            badge: 'sale',
            badgeText: '12%',
            description: `
                <h3>Drop-ear 4 Color View</h3>
                <p>4가지의 레나버니 스몰 컬러를 만나보세요</p>
                <h4>주요 특징</h4>
                <ul>
                    <li>복슬복슬한 매력과 다양한 색감을 가진 레나버니</li>
                    <li>사랑을 전달하는 레나버니들은</li>
                    <li>감정이 있다는 사실 아시나요?</li>
                    <li>Living Linabear</li>
                    <li>테디테일즈의 모든 인형은 심장을 가지고 있어요</li>
                </ul>
                <h4>100% 프리미엄 핸드메이드</h4>
                <ul>
                    <li>하나부터 열까지 수작업으로 진행되는 레나베어 제작,</li>
                    <li>오랜작업시간으로 양상형 인형보다 생산성이 극도로 낮아요</li>
                    <li>하지만 새 주인님이 10년이 넘게 함께할</li>
                    <li>소중한 반려곰이라면 퀄리티는 포기할 수 없죠!</li>
                </ul>
            `,
            spec: {
               '스탠드 높이': '약 25cm',
               '앉은 높이': '약 20cm',
               '허리 둘레': '약 20cm',
               '머리 둘레': '약 24cm',
               '목 둘레': '약 25cm',
               '발 길이': '약 5cm',
            },
            reviewList: [
                {
                    id: 1,
                    author: '이**',
                    rating: 5,
                    date: '2026.02.14',
                    content: '레나버니 너무 귀엽고 옷도 얼른 입혀주고 싶어요 이렇게 귀여운 인형을!!',
                    helpful: 312,
                    verified: true
                },
                {
                    id: 2,
                    author: '강**',
                    rating: 4,
                    date: '2026.01.11',
                    content: '토끼 인형이 관절인형이라니..!! 신세계인거 같아요. 다양한 포즈가 가능해서 포인트 오브제로 너무 좋아요',
                    helpful: 245,
                    verified: true
                },
                {
                    id: 3,
                    author: '윤**',
                    rating: 4,
                    date: '2026.01.09',
                    content: '레몬버터 롭에어 드디어 들였습니다. 피치화이트 롭이어 사고 싶어서 눈빠지게 기다렸는데... 당최 들어오지 않아 레몬버터 샀어요. 레몬터터도 너무 귀여워요!!',
                    helpful: 198,
                    verified: true
                },
                {
                    id: 4,
                    author: '임**',
                    rating: 4,
                    date: '2025.01.06',
                    content: '특유의 색상이 너무 사랑스럽고 처진 귀도 귀여워요! 신발 신기고 옷 입히니까 더 예쁘네요!!',
                    helpful: 167,
                    verified: true
                }
            ]
        },
        {
            id: 3,
            title: '레나버니 핑크체리 드레스 키링 XS',
            price: 109000,
            salePrice: 98100,
            discount: 10,
            rating: 5,
            reviews: 133,
            image: 'https://ecimg.cafe24img.com/pg440b54139354047/teddytales/web/product/big/20241124/1f3bb94b44d0e6442430a6d565c7cc64.png',
            images: [
                'https://ecimg.cafe24img.com/pg440b54139354047/teddytales/web/product/big/20241124/1f3bb94b44d0e6442430a6d565c7cc64.png',
                'https://ecimg.cafe24img.com/pg440b54139354047/teddytales/web/product/extra/big/20240927/d22410f326af328319fb4d7bbbb15c9b.png',
                'https://ecimg.cafe24img.com/pg440b54139354047/teddytales/web/product/extra/big/20240927/11ac3ad19aa264f9f3903be1ed28b650.png',
                'https://ecimg.cafe24img.com/pg440b54139354047/teddytales/web/product/extra/big/20240927/c1aca79564a7a754e6e6c7d16c84f455.png',
                'https://ecimg.cafe24img.com/pg440b54139354047/teddytales/web/product/extra/big/20240927/d487ce8bceeeed6e5253629c92e07949.png'
            ],
            badge: 'sale',
            badgeText: '10%',
            description: `
                <h3>버니 키링</h3>
                <p>버니 키링의 매력을 확인해보세요!</p>
                <h4>주요 특징</h4>
                <ul>
                    <li>피치 화이트라는 이름답게 핑크빛으로 빛나는 귀여운 버니 키링 코</li>
                    <li>버니 키링에서만 확인할 수 있는 핑크 프릴 드레스</li>
                    <li>버니키링에서 확인 가능한 하트 키링 고리</li>
                </ul>
                <h4>100% 프리미엄 핸드메이드</h4>
                <ul>
                    <li>하나부터 열까지 수작업으로 진행되는 레나베어 제작,</li>
                    <li>오랜작업시간으로 양상형 인형보다 생산성이 극도로 낮아요</li>
                    <li>하지만 새 주인님이 10년이 넘게 함께할</li>
                    <li>소중한 반려곰이라면 퀄리티는 포기할 수 없죠!</li>
                </ul>
            `,
            spec: {
                '키링 사이즈': '약 15cm',
                '전체 사이즈': '약 24.5cm',              
            },
            reviewList: [
                {
                    id: 1,
                    author: '김**',
                    rating: 5,
                    date: '2026.02.15',
                    content: '너무 귀엽고 사랑스러워요~~♡ 보고 있으면 행복해 집니다.',
                    helpful: 289,
                    verified: true
                },
                {
                    id: 2,
                    author: '이**',
                    rating: 5,
                    date: '2026.02.06',
                    content: '요즘 테이테일즈에 푹 빠졌는데 토끼 키링 실물이 너무 작고 소중해요...❤',
                    helpful: 198,
                    verified: true
                },
                {
                    id: 3,
                    author: '주**',
                    rating: 5,
                    date: '2026.01.31',
                    content: '베어랑은 또 다른 느낌의 귀여움 입니다. 털도 너무 부드럽고 생긴것도 너무 예뻐요',
                    helpful: 156,
                    verified: true
                }
            ]
        },
        {
            id: 4,
            title: '레나베어 시그니처 키링 세트 XS',
            price: 89000,
            salePrice: 79000,
            discount: 11,
            rating: 5.0,
            reviews: 1696,
            image: 'https://ecimg.cafe24img.com/pg440b54139354047/teddytales/web/product/big/20240927/8269ebe8a978483a4d41e3c78df6c0f0.png',
            images: [
                'https://ecimg.cafe24img.com/pg440b54139354047/teddytales/web/product/big/20240927/8269ebe8a978483a4d41e3c78df6c0f0.png',
                'https://ecimg.cafe24img.com/pg440b54139354047/teddytales/web/product/extra/big/20240930/a130949fe284bfbb723de7a8c1b059b7.png',
                'https://ecimg.cafe24img.com/pg440b54139354047/teddytales/web/product/extra/big/20240930/a130949fe284bfbb723de7a8c1b059b7.png',
                'https://ecimg.cafe24img.com/pg440b54139354047/teddytales/web/product/extra/big/20240930/82ff4b66e7e268b06557b7eab782fa23.png',
                'https://ecimg.cafe24img.com/pg440b54139354047/teddytales/web/product/extra/big/20240930/751d8960378b0b46f9f1108fc8ba110a.png'
            ],
            badge: 'best',
            badgeText: 'BEST',
            description: `
                <h3>사랑을 선물하세요, 테디테일즈</h3>
                <p>형태가 다양한 사랑을 통합시켜주는 테이테일즈 시그니처 키링</p>
                <h4>Signature Keyring</h4>
                <ul>
                    <li>하늘색 상의와 파스텔 옐로우 바지가 어우러져</li>
                    <li>더욱 포근하고 사랑스러운 분위기 완성</li>
                    <li>후드 끝이 뾰족한 디자인으로 더욱 깜찍한느낌 강조</li>
                    <li>화이트: 흰색 털로 얼굴의 특징이 더욱 또렷하게 강조</li>
                    <li>밀크티: 동그란 눈과 작은코, 살짝 처집 입꼬리가 특징</li>
                </ul>
            `,
            spec: {
               '키링 사이즈': '약 15cm',
                '전체 사이즈': '약 24cm',
            },
            reviewList: [
                {
                    id: 1,
                    author: '이**',
                    rating: 5,
                    date: '2025.10.14',
                    content: '테디테일즈 곰인형😚 곰돌이 키링이 이렇게 예쁘고 귀엽고 사랑스럽고 비쌀일이냐고 ㅋㅋ',
                    helpful: 312,
                    verified: true
                },
                {
                    id: 2,
                    author: '비회원',
                    rating: 4,
                    date: '2025.02.07',
                    content: '무해하고 귀여운게 세상을 구하는게 분명해요. 바라만 봐도 입꼬리가 솟아올라 ... 😃',
                    helpful: 245,
                    verified: true
                },
                {
                    id: 3,
                    author: 'soha_mo_**',
                    rating: 5,
                    date: '2025.01.16',
                    content: '레나베어..! 너무 이쁠거 아니냐뇨~ 가격을 상상초월.. 하지만, 무개하고 바라보면 생각이 달라지지!',
                    helpful: 189,
                    verified: true
                }
            ]
        },
        {
            id: 5,
            title: '레나베어 장모 S (20cm)',
            price: 109000,
            salePrice: 87200,
            discount: 20,
            rating: 4.9,
            reviews: 233,
            image: 'https://ecimg.cafe24img.com/pg440b54139354047/teddytales/web/product/big/20250919/f5074c1da57ba4146a1c13d978fd823a.png',
            images: [
                'https://ecimg.cafe24img.com/pg440b54139354047/teddytales/web/product/big/20250919/f5074c1da57ba4146a1c13d978fd823a.png',
                'https://ecimg.cafe24img.com/pg440b54139354047/teddytales/web/product/extra/big/20250820/3821594f32fa6965bbb1be580ef871b9.png',
                'https://ecimg.cafe24img.com/pg440b54139354047/teddytales/web/product/extra/big/20250820/9327b52977b84508ea0be68d6908c333.png',
            ],
            badge: 'sale',
            badgeText: '20%',
            description: `
                <h3>LinaBear Long Fur Small Size</h3>
                <p>4가지 레나베어 장모 S컬러를 만나보세요</p>
                <h4>주요 특징</h4>
                <ul>
                    <li>밀크티는 부드러운 베이지컬러로, 은은하고 따뜻한 감성을 전해줘요</li>
                    <li>화이트는 순수하고 깔끔한 화이트컬러로, 청순하고 상큼한 느낌을 줘요</li>
                    <li>핑크는 은은한 파스텔 핑크톤으로 사랑스럽고 부드러운 매력을 줘요</li>
                    <li>블루베리 요거트는 차분한 블루 그레이컬러로, 은은하고 편안함 감성을 전해줘요</li>
                </ul>
            `,
            spec: {
                '스탠드 높이': '약 20cm',
                '앉은 높이': '약 16cm',
            },
            reviewList: [
                {
                    id: 1,
                    author: '박**',
                    rating: 5,
                    date: '2026.02.27',
                    content: '하루만에 받았어요 핑크색도 아주 이쁘네요. 밀크티도 하나 구매해야겠어요',
                    helpful: 278,
                    verified: true
                },
                {
                    id: 2,
                    author: '홍**',
                    rating: 4,
                    date: '2026.02.03',
                    content: '딱 아담한 사이즈의 귀염귀욤 곰돌이^^ 딸아이 생일선물 위시리스트로 구입했습니다.',
                    helpful: 198,
                    verified: true
                },
                {
                    id: 3,
                    author: '감**',
                    rating: 5,
                    date: '2025.12.27',
                    content: '너무 예쁘네요~ 하나씩 모으고 있어요',
                    helpful: 167,
                    verified: true
                }
            ]
        },
        {
            id: 6,
            title: '[9차 재입고] 웨딩 세트 브라이드 + 웨딩 세트 그룸',
            price: 398000,
            salePrice: 318400,
            discount: 20,
            rating: 5.0,
            reviews: 234,
            image: 'https://ecimg.cafe24img.com/pg440b54139354047/teddytales/web/product/big/20250912/bc7efbaa9609e027eacedb5e04a7e5dd.png',
            images: [
                'https://ecimg.cafe24img.com/pg440b54139354047/teddytales/web/product/big/20250912/bc7efbaa9609e027eacedb5e04a7e5dd.png',
            ],
            badge: 'best',
            badgeText: 'BEST',
            description: `
                <h3>LinaBear Wedding Set</h3>
                <p>레나베어 웨딩세트 M을 만나보세요.</p>
                <h4>주요 특징</h4>
                <ul>
                    <li><b>웨딩세트 브라이드 M</b></li>
                    <li>파스텔 컬러가 어우러진 부케</li>
                    <li>흰 리본이 돋보이는 메리제인 슈즈</li>
                    <li>흰 장미가 돋보이는 면사포</li>
                    <li><b>웨딩세트 그룸 M</b></li>
                    <li>멋진 정장에 포인트! 부토니에</li>
                    <li>제비 꼬리를 닮은 테일 코트</li>
                    <li>세련된 리본이 어우러진 모자</li>
                </ul>
            `,
            spec: {
                '인형 사이즈(세로)': '약 30cm',
                '전체 사이즈(의상 포함)': '약 33cm',
            },
            reviewList: [
                {
                    id: 1,
                    author: '조**',
                    rating: 5,
                    date: '2026.01.01',
                    content: '완전 강추 프로포즈 정말 멋지게 할 수 있어요!! 여자친구도 대만족!!',
                    helpful: 189,
                    verified: true
                },
                {
                    id: 2,
                    author: '선**',
                    rating: 4,
                    date: '2026.01.03',
                    content: '넘 부드럽고 기여워요 ㅜㅜ.. 웨딩테이블 데코로 잘 쓰겠습니다',
                    helpful: 134,
                    verified: true
                }
            ]
        },
        {
            id: 7,
            title: '테디테일즈 레나퍼피 M',
            price: 159000,
            salePrice: 135150,
            discount: 15,
            rating: 4.9,
            reviews: 45,
            image: 'https://ecimg.cafe24img.com/pg440b54139354047/teddytales/web/product/big/20250317/29ca485e9c2e7cf0d49b12166cf97858.png',
            images: [
                'https://ecimg.cafe24img.com/pg440b54139354047/teddytales/web/product/big/20250317/29ca485e9c2e7cf0d49b12166cf97858.png',
                'https://ecimg.cafe24img.com/pg440b54139354047/teddytales/web/product/extra/big/20250214/54569aee6f2612a73ea83d666dfcb25e.png',
                'https://ecimg.cafe24img.com/pg440b54139354047/teddytales/web/product/extra/big/20250214/094076de3cbcff7d5b75699d3fb82ce7.png',
                'https://ecimg.cafe24img.com/pg440b54139354047/teddytales/web/product/extra/big/20250214/0b7cb3b3ad4389d1ea94590d5d67c876.png',
                'https://ecimg.cafe24img.com/pg440b54139354047/teddytales/web/product/extra/big/20250214/c230efdc7ac39ef7cf221c2c60d42c84.png'
            ],
            badge: 'new',
            badgeText: 'NEW',
            description: `
                <h3>LinaPuppy Medium Size</h3>
                <p>3가지 레나퍼피 M 컬러를 만나보세요.</p>
                <h4>주요 특징</h4>
                <ul>
                    <li><b>레나퍼피 클라우드 그레이</b></li>
                    <li>부드러운 회색톤이 흐린 날의 구름처럼 은은하고 차분한 분위기를 자아냅니다</li>
                    <li><b>레나퍼피 크림</b></li>
                    <li>부드러운 크림 컬러가 포근하고 사랑스러운 분위기를 연출합니다</li>
                    <li><b>레나퍼피 브라운</b></li>
                    <li>따뜻한 감성을 머금은 깊은 브라운 컬러가 부드럽고 안정적인 분위기를 자아냅니다</li>
                </ul>
            `,
            spec: {
               '스탠드 높이': '약 30cm',
               '앉은 높이': '약 23cm'
            },
            reviewList: [
                {
                    id: 1,
                    author: '안**',
                    rating: 5,
                    date: '2025.10.13',
                    content: '너무 귀여워요! 볼때마다 쓰다듬어요 ㅎㅎ',
                    helpful: 345,
                    verified: true
                },
                {
                    id: 2,
                    author: '김**',
                    rating: 5,
                    date: '2025.12.24',
                    content: '뽀글뽀글 뽀글이 헤어는 만지면 기분이 좋을 만큼 촉감도 훌륭합니다.',
                    helpful: 278,
                    verified: true
                },
                {
                    id: 3,
                    author: '**',
                    rating: 4,
                    date: '2025.05.23',
                    content: '다 큰 어른이 인형 가지고 논다고 다들 뭐라그러지만 실문 영접하고는 절대 그말 못하쥬~',
                    helpful: 198,
                    verified: true
                }
            ]
        },
        {
            id: 8,
            title: '레나의 해변 시리즈 XS 의상',
            price: 46000,
            salePrice: 41400,
            discount: 10,
            rating: 5.0,
            reviews: 22,
            image: 'https://ecimg.cafe24img.com/pg440b54139354047/teddytales/web/product/big/20260224/d22769ef3f9b4919f2dc578a97e5ad1c.png',
            images: [
                'https://ecimg.cafe24img.com/pg440b54139354047/teddytales/web/product/big/20260224/d22769ef3f9b4919f2dc578a97e5ad1c.png',
                'https://ecimg.cafe24img.com/pg440b54139354047/teddytales/web/product/extra/big/20260224/90648a1e8128ec548b5d973b0b96596d.png',
                'https://ecimg.cafe24img.com/pg440b54139354047/teddytales/web/product/extra/big/20260224/81784ac370964101d3087f7605e2da92.png',
                'https://ecimg.cafe24img.com/pg440b54139354047/teddytales/web/product/extra/big/20260224/52d2695af7e4cb603a2b6b4f046b861f.png',
                'https://ecimg.cafe24img.com/pg440b54139354047/teddytales/web/product/extra/big/20260224/fd3092bfb15c7058df4200f4f6e3b2e0.png'
            ],
            badge: 'new',
            badgeText: 'NEW',
            description: `
                <h3>La cote de Lina XS Clothes</h3>
                <p>레나의 해변 의상의 다양한 색상을 확인해보세요</p>
                <h4>주요 특징</h4>
                <ul>
                    <li><b>딥나이트 블루</b></li>
                    <li>고요한 밤하늘을 닮은 네이비 컬러에 반짝이는 펄이 더해져 별빛같은 무드 완성</li>
                    <li><b>포그그레이</b></li>
                    <li>맑은 하늘빛과 화이트의 청명한 조합</li>
                    <li>조개 껍데기를 닮은 은은한 광택이 고급스러움을 완성</li>
                    <li><b>선셋 골드</b></li>
                    <li>하늘을 수놓은 노을빛을 담은 컬러 팔레트</li>
                    <li>따뜻하지만 세련된 톤 조합으로 잔잔한 무드 완성</li>
                    <li><b>펄라이트 블루</b></li>
                    <li>진한 차콜 컬러에 리본이 더해져 차분하면서도 귀여운 분위기를 더해줍니다</li>
                </ul>
            `,
            spec: {
                '옷의 가로': '약 12cm',
                '옷의 세로': '약 18cm',
            },
            reviewList: [
                {
                    id: 1,
                    author: '조**',
                    rating: 5,
                    date: '2026.02.25',
                    content: '의상 너무 귀여워서 전부 샀어요 너무 이뻐요!!',
                    helpful: 234,
                    verified: true
                },
                {
                    id: 2,
                    author: '강**',
                    rating: 5,
                    date: '2026.02.15',
                    content: '귀여운데 꼬리 구멍이 없는게 진짜 아쉬워요 ㅜㅜ 그래도 너무 귀여워요',
                    helpful: 189,
                    verified: true
                },
                {
                    id: 3,
                    author: '송**',
                    rating: 5,
                    date: '2026.02.07',
                    content: '만족해요. 꽤 좋은 선택이었던것 같아요',
                    helpful: 156,
                    verified: true
                }
            ]
        }
    ],
    // 신상품 목록
    new: [
        {
            id: 9,
            title: '한복 에디션 인형 + 의상 세트',
            price: 12900,
            salePrice: 116100,
            discount: 10,
            rating: 5.0,
            reviews: 806,
            image: 'https://ecimg.cafe24img.com/pg440b54139354047/teddytales/web/product/big/20251117/2f2db85b1a21a3fbd33390184ed520a1.png',
            images: [
                'https://ecimg.cafe24img.com/pg440b54139354047/teddytales/web/product/big/20251117/2f2db85b1a21a3fbd33390184ed520a1.png',
                'https://ecimg.cafe24img.com/pg440b54139354047/teddytales/web/product/extra/big/20251117/3367a0a5fa5db1b32ff9b522942735b4.png',
                'https://ecimg.cafe24img.com/pg440b54139354047/teddytales/web/product/extra/big/20251117/ba0c6d08e0053eda9eb1ba3c7fa52154.png',
                'https://ecimg.cafe24img.com/pg440b54139354047/teddytales/web/product/extra/big/20251117/c17a986f2e8cd3ce1363af4468cc98fb.png',
            ],
            badge: 'new',
            badgeText: 'NEW',
            description: `
                <h3>한국 단독출시</h3>
                <p>전세계 단 한곳, 오직 한국에서만 선보이는 테디테일즈 한복 에니션을 만나보세요!</p>
                <h4>주요 특징</h4>
                <ul>
                    <li>한복의 아름다움, 그 특별함을 담았습니다.</li>
                    <li>레나베어의 발에 꼭맞게 설계된 한복 전용 신발</li>
                    <li>흑과 분홍, 단아함과 화사함이 만나다</li>
                    <li>푸른빛의 청아함, 복숭아빛의 사랑스러움이 만나다</li>
                </ul>
            `,
            spec: {
                '레나베어XS': '',
                '서있는 높이': '약 15cm',
                '앉은 높이': '약 13cm',
                '레나베어S': '',
                '서있는 높이': '약 20cm',
                '앉은 높이': '약 16cm',
                '레나베어M': '',
                '서있는 높이': '약 30cm',
                '앉은 높이': '약 23cm',
            },
            reviewList: [
                {
                    id: 1,
                    author: '노**',
                    rating: 5,
                    date: '2026.01.14',
                    content: '한복 퀄리티가 진짜 미쳤어요... 사람이 입는 한복보다 마감이 좋아요!!',
                    helpful: 198,
                    verified: true
                },
                {
                    id: 2,
                    author: '김**',
                    rating: 4,
                    date: '2025.12.15',
                    content: '너무 귀여운 레나베어 청운 입양했어요. 한복이 작고 귀엽지만 퀄리티가 좋아 금액이 아깝지 안항요',
                    helpful: 134,
                    verified: true
                }
            ]
        },
        {
            id: 10,
            title: '트위드 셋업 의상 S',
            price: 60000,
            salePrice: 48000,
            discount: 20,
            rating: 5.0,
            reviews: 14,
            image: 'https://ecimg.cafe24img.com/pg440b54139354047/teddytales/web/product/big/20251223/e7588dfe81cf27bdad296302917c1781.png',
            images: [
                'https://ecimg.cafe24img.com/pg440b54139354047/teddytales/web/product/big/20251223/e7588dfe81cf27bdad296302917c1781.png',
                'https://ecimg.cafe24img.com/pg440b54139354047/teddytales/web/product/extra/big/20251223/cce4892e9ba502fd1020ab3d643af7e9.jpg',
                'https://ecimg.cafe24img.com/pg440b54139354047/teddytales/web/product/extra/big/20251223/1e76dd518d4c4020043a2ef1c54d8f22.jpg',
                'https://ecimg.cafe24img.com/pg440b54139354047/teddytales/web/product/extra/big/20251223/7edeace85bdafe6d3e03f6c11f042854.jpg',
                'https://ecimg.cafe24img.com/pg440b54139354047/teddytales/web/product/extra/big/20251223/e7973cb1dd96e31491d5971742682f6e.jpg'
            ],
            badge: 'new',
            badgeText: 'NEW',
            description: `
                <h3>Tweed Set-up</h3>
                <p>트위드 셋업이 출시되었어요. 화이트 핑크 둘다 예뻐요</p>
                <h4>주요 특징</h4>
                <ul>
                    <li><b>은은한 크림빛 트위드 셋업</b></li>
                    <li>은은한 광의 진주알 단추</li>
                    <li>단정함을 더하는 블랙리본</li>
                    <li><b>튀지 않는 맑은 핑크빛 트위드 셋업</b></li>
                    <li>모자 위에 시스루 레이스를 덧댄</li>
                    <li>레이어드 디테일</li>
                </ul>
            `,
            spec: {
                '자켓 총장(세로)': '약 7cm',
                '자켓 총장(가로)': '약 15.5cm',
            },
            reviewList: [
                {
                    id: 1,
                    author: '홍**',
                    rating: 5,
                    date: '2025.12.27',
                    content: '아기 탄냥이가 요조숙녀가 되어썽요 ㅎㅎ 너무 예뻐요',
                    helpful: 167,
                    verified: true
                },
                {
                    id: 2,
                    author: '정**',
                    rating: 4,
                    date: '2026.02.21',
                    content: '솔직히 가격이 비싼 편이기는 한데 퀄리키가 워낙 좋아서 구매했습니다.',
                    helpful: 123,
                    verified: true
                }
            ]
        },
        {
            id: 11,
            title: '후디 키링 망토 XXS',
            price: 99000,
            salePrice: 89100,
            discount: 10,
            rating: 5.0,
            reviews: 104,
            image: 'https://ecimg.cafe24img.com/pg440b54139354047/teddytales/web/product/big/20250729/463fa82b64b8e845826f63ef39c6f9c4.png',
            images: [
                'https://ecimg.cafe24img.com/pg440b54139354047/teddytales/web/product/big/20250729/463fa82b64b8e845826f63ef39c6f9c4.png',
                'https://ecimg.cafe24img.com/pg440b54139354047/teddytales/web/product/extra/big/20250729/de7f939e7f1d2eb7b41c08769fefd37b.png',
                'https://ecimg.cafe24img.com/pg440b54139354047/teddytales/web/product/extra/big/20250729/42082adbca9c5d98771e708be6184689.png',
                'https://ecimg.cafe24img.com/pg440b54139354047/teddytales/web/product/extra/big/20250729/1bb61e83b824e397e92fcab142961bc4.png',
                'https://ecimg.cafe24img.com/pg440b54139354047/teddytales/web/product/extra/big/20250729/c914d0c16a1d0d406ecd4a694ef0b3c6.png',
                'https://ecimg.cafe24img.com/pg440b54139354047/teddytales/web/product/extra/big/20250729/883390d493e357aa76c470a501e6ee99.png'
            ],
            badge: 'sale',
            badgeText: 'SALE',
            description: `
                <h3>Hoodie Keying Cloak XXS</h3>
                <p>테디테일즈 후디 키링 망토를 만나보세요</p>
                <h4>주요 특징</h4>
                <ul>
                    <li>보송보송한 연노랑 털과 동글동글한 실루엣의 병아리</li>
                    <li>가슴털과 동글동글한 얼굴이 마치 동화속 친구처럼 다가오는 여우</li>
                    <li>망토를 벗으면, 사랑스럽고 순수한 모습 가득한 티라미수 고양이</li>
                    <li>호기힘 가득한 눈망울을 가진 사랑스러운 블랙몽키</li>
                    <li>호기힘 가득한 눈망울을 가진 사랑스러운 피치몽키</li>
                    
                </ul>
            `,
            spec: {
                '인형높이': '약12cm',
                '망토모자 포함 높이': '약16cm',
                '노이즈 캔슬링': '업계 최고 수준',
                '배터리': '최대 30시간 (ANC 켜짐)',
                '충전': 'USB-C, 빠른 충전 지원',
                '연결': 'Bluetooth 5.2, NFC',
                '코덱': 'LDAC, AAC, SBC',
                '무게': '약 250g'
            },
            reviewList: [
                {
                    id: 1,
                    author: '정**',
                    rating: 5,
                    date: '2026.02.20',
                    content: '팔다리 움직이고 털도 매우 부드러워요~ 원숭이띠라 몽키 주문했어요~^^',
                    helpful: 456,
                    verified: true
                },
                {
                    id: 2,
                    author: '이**',
                    rating: 5,
                    date: '2025.12.05',
                    content: '두번째 티라미수 입니다. 첨에 나왔을때 샀는데 너무 귀여워서 한마리 더 들였어요❤',
                    helpful: 389,
                    verified: true
                },
                {
                    id: 3,
                    author: '김**',
                    rating: 5,
                    date: '2025.12.04',
                    content: '찌이이인짜 귀여워요',
                    helpful: 312,
                    verified: true
                },
                {
                    id: 4,
                    author: '이**',
                    rating: 4,
                    date: '2025.12.01',
                    content: '선물용으로 구입했는데 정말 귀엽습니당ㅋ',
                    helpful: 234,
                    verified: true
                }
            ]
        },
        {
            id: 12,
            title: '장난꾸러기 레나캣 랜덤박스 시리즈',
            price: 79000,
            salePrice: 75050,
            discount: 5,
            rating: 4.9,
            reviews: 194,
            image: 'https://ecimg.cafe24img.com/pg440b54139354047/teddytales/web/product/big/20251201/95c4567cc5fa7cf076f3b85168eccbc2.png',
            images: [
                'https://ecimg.cafe24img.com/pg440b54139354047/teddytales/web/product/big/20251201/95c4567cc5fa7cf076f3b85168eccbc2.png',
                'https://ecimg.cafe24img.com/pg440b54139354047/teddytales/web/product/extra/big/20251201/dd81920c5d006c1e832717771cbe2ad7.png',
                'https://ecimg.cafe24img.com/pg440b54139354047/teddytales/web/product/extra/big/20251201/bde010dafb1c8da90061b9f557653b92.png',
                'https://ecimg.cafe24img.com/pg440b54139354047/teddytales/web/product/extra/big/20251201/00f581ab4dfd2edb48d40d63d347e1eb.png',
                'https://ecimg.cafe24img.com/pg440b54139354047/teddytales/web/product/extra/big/20251201/759b0a19ba738a0313e0b74a6428508f.png',
                'https://ecimg.cafe24img.com/pg440b54139354047/teddytales/web/product/extra/big/20251201/d2dfc385a26bb995525eb981568b60cc.png',
                'https://ecimg.cafe24img.com/pg440b54139354047/teddytales/web/product/extra/small/20251201/0f02d42fe0fd673910a203eefaa6300d.png',
                'https://ecimg.cafe24img.com/pg440b54139354047/teddytales/web/product/extra/big/20251201/5b0fad414fb033b54f9a2a6fc355f55b.png',
                'https://ecimg.cafe24img.com/pg440b54139354047/teddytales/web/product/extra/big/20251201/004657b1d62bf86629d6a132fce5ca1a.png'
            ],
            badge: 'sale',
            badgeText: '5%',
            description: `
                <h3>Cheeky Cats</h3>
                <p>테디테일즈이 장난꾸러기 레나캣 시리즈</p>
                <h4>주요 특징</h4>
                <ul>
                    <li>아주 이상한 팬텀</li>
                    <li>호기심이 아주 많은 성격인 키디</li>
                    <li>아주 장난스러운 뭉치</li>
                    <li>마음이 아주 여린 포키</li>
                    <li>센 척 잘하는 나이트</li>
                    <li>아주 용감한 히로</li>
                    <li>소힘한 수호</li>
                </ul>
            `,
            spec: {
                '세로사이즈': '약 15cm',
                '전체사이즈(의상포함)': '약 16cm',
            },
            reviewList: [
                {
                    id: 1,
                    author: '장**',
                    rating: 5,
                    date: '2025.12.18',
                    content: '테디테일즈 인형에 빠져버렸다. 조망간 대가족이 될듯',
                    helpful: 278,
                    verified: true
                },
                {
                    id: 2,
                    author: '김**',
                    rating: 5,
                    date: '2025.12.19',
                    content: '레나켓 장난꾸러기 랜덤 박스. 하나 산게 후회될 정도로 귀여운 칭구',
                    helpful: 234,
                    verified: true
                },
                {
                    id: 3,
                    author: '조**',
                    rating: 4,
                    date: '2026.02.25',
                    content: '가지고 싶었던 고양이 두개나 뽑아서 너무 만족합니다.',
                    helpful: 189,
                    verified: true
                }
            ]
        },
        {
            id: 18,
            title: '레나몽키 병아리 유치원 세트 스커트 / 팬츠',
            price: 199000,
            salePrice: 169150,
            discount: 15,
            rating: 5.0,
            reviews: 1,
            image: 'https://ecimg.cafe24img.com/pg440b54139354047/teddytales/web/product/big/20251013/240630ab1c442d94e188d356524d3e54.png',
            images: [
                'https://ecimg.cafe24img.com/pg440b54139354047/teddytales/web/product/big/20251013/240630ab1c442d94e188d356524d3e54.png',
                'https://ecimg.cafe24img.com/pg440b54139354047/teddytales/web/product/extra/big/20251013/d4b56820183a3fdc0f987a0cc84338c0.png',
                'https://ecimg.cafe24img.com/pg440b54139354047/teddytales/web/product/extra/big/20251013/be41922292abc3b79aabd44ee16339b5.png',
                'https://ecimg.cafe24img.com/pg440b54139354047/teddytales/web/product/extra/big/20251013/41e2a940e5761017433ef23c0a8b6d87.png'
            ],
            badge: 'new',
            badgeText: 'NEW',
            description: `
                <h3>LinaMonkey Chick Kindergarten Set M</h3>
                <p>레나몽키 병아리 유리원 세트 M</p>
                <h4>주요 특징</h4>
                <ul>
                    <li><b>스커트세트</b></li>
                    <li>노란 유치원 모자와 연보라 셔츠</li>
                    <li>흰색 그커트가 어우러져 사랑스러워요</li>
                    <li><b>팬츠세트</b></li>
                    <li>노란 유치원 모자와 산뜻한 그린 셔츠</li>
                    <li>화이트 팬츠가 어우러져 발랄하고 상큼한 분위기</li>
                </ul>
                <h4>포함 구성품</h4>
                <ul>
                    <li>갤럭시탭 A11 플러스 본체</li>
                    <li>충전 어댑터</li>
                    <li>USB 케이블</li>
                    <li>사용 설명서</li>
                    <li>보증서</li>
                </ul>
            `,
            spec: {
                '인형사이즈': '30cm'
            },
            reviewList: [
                {
                    id: 1,
                    author: '김**',
                    rating: 5,
                    date: '2025.11.06',
                    content: '처음에는 디자인이 귀여워 마음에 들었고, 그다음엔 스토리가 눈에 들어왔어요 너무 귀여워요!',
                    helpful: 198,
                    verified: true
                }
            ]
        },
        {
            id: 19,
            title: '레나베어 클로버 화이트 S 세트',
            price: 169000,
            salePrice: 143650,
            discount: 15,
            rating: 5.0,
            reviews: 2,
            image: 'https://ecimg.cafe24img.com/pg440b54139354047/teddytales/web/product/big/20251013/94555ad8b111dbb518a634d94148cd99.png',
            images: [
                'https://ecimg.cafe24img.com/pg440b54139354047/teddytales/web/product/big/20251013/94555ad8b111dbb518a634d94148cd99.png',
                'https://ecimg.cafe24img.com/pg440b54139354047/teddytales/web/product/extra/big/20251013/e2704f7f609bf643030c14f5e6fa3bc7.png',
                'https://ecimg.cafe24img.com/pg440b54139354047/teddytales/web/product/extra/big/20251013/587b74706ea5308dcd0ccb4129b25d9e.png'
            ],
            badge: 'new',
            badgeText: 'NEW',
            description: `
                <h3>LinaBear Clover White Set</h3>
                <p>레나베어 시그니처를 만나보세요.</h4>
                <ul>
                    <li>클로버 초록색 가디건과 분홍 하트패치</li>
                    <li>화사한 초록과 부드러운 핑크의 조합으로 상큼발랄</li>
                </ul>
                <h4>포함 구성품</h4>
                <ul>
                    <li>ANAC 자동 먼지 비움 청소기 본체</li>
                    <li>자동 충전 스테이션</li>
                    <li>먼지 비움 스테이션</li>
                    <li>예비 필터</li>
                    <li>사이드 브러시</li>
                    <li>사용 설명서</li>
                </ul>
            `,
            spec: {
               '스탠드 높이': '약 20cm',
               '앉은 높이': '약 16cm'
            },
            reviewList: [
                {
                    id: 1,
                    author: '김**',
                    rating: 5,
                    date: '2026.01.10',
                    content: '너무 이쁨 귀여움',
                    helpful: 234,
                    verified: true
                },
                {
                    id: 2,
                    author: '김**',
                    rating: 4,
                    date: '2025.12.11',
                    content: '잘 산것 같이 기분이 좋아요',
                    helpful: 189,
                    verified: true
                }               
            ]
        }
    ],
    // 특가 상품 목록
    sale: [
        {
            id: 13,
            title: '[37% 특가] 신학기 데스크테리어 추천 조합 1',
            price: 242000,
            salePrice: 169400,
            discount: 30,
            rating: 4.9,
            reviews: 827,
            image: 'https://ecimg.cafe24img.com/pg440b54139354047/teddytales/web/product/big/20260225/071b871a866cd14a957e760a61d53308.png',
            images: [
                'https://ecimg.cafe24img.com/pg440b54139354047/teddytales/web/product/big/20260225/071b871a866cd14a957e760a61d53308.png',
            ],
            badge: 'sale',
            badgeText: '30%',
            description: `
                <h3>사랑을 선물하세요, 테이테일즈</h3>
                <p>레나베어 물망초 S 와 레나베어 XS를 함께 만나보세요 </p>
                <h4>주요 특징</h4>
                <ul>
                    <li>물망초 S</li>
                    <li>작은 사이즈에도 섬세한 디테일</li>
                    <li>귀여운 표정 강조</li>
                    <li>4가지 레나베어 XS 컬러</li>
                    <li>베이비핑크, 밀크티, 화이트, 베이비블랙</li>
                </ul>
            `,
            spec: {
                '인형사이즈 S': '약 20cm',
                '인형사이즈 XS': '약 15cm'
            },
            reviewList: [
                {
                    id: 1,
                    author: '김**',
                    rating: 5,
                    date: '2026.02.24',
                    content: '물망초S와 XS레나베어 라니 한번에 두마리 너무 좋아요',
                    helpful: 567,
                    verified: true
                },
                {
                    id: 2,
                    author: '강**',
                    rating: 5,
                    date: '2026.02.25',
                    content: '귀여워요~~ 부드럽고 손에 딱 들어오는 느낌이 좋아요!!',
                    helpful: 489,
                    verified: true
                },
                {
                    id: 3,
                    author: 'Young j**',
                    rating: 4,
                    date: '2026.02.04',
                    content: '너무 갖고 싶었던 거라 만족도는 100%에요',
                    helpful: 345,
                    verified: true
                }
            ]
        },
        {
            id: 14,
            title: '신학기 데스크테리어 추천 조합 2',
            price: 218000,
            salePrice: 152600,
            discount: 30,
            rating: 4.9,
            reviews: 365,
            image: 'https://ecimg.cafe24img.com/pg440b54139354047/teddytales/web/product/big/20260225/bcf4ecc0570b77c9fc91c690cff28636.png',
            images: [
                'https://ecimg.cafe24img.com/pg440b54139354047/teddytales/web/product/big/20260225/bcf4ecc0570b77c9fc91c690cff28636.png'
            ],
            badge: 'sale',
            badgeText: '30%',
            description: `
                <h3>Linabear S 1+1 </h3>
                <p>7 Color View</p>
                <h4>주요 특징</h4>
                <ul>
                    <li><b>레나베어 단모S</b></li>
                    <li>딥핑크, 라떼, 밀크티, 블루그레이, 퍼블그레이, 핑크, 화이트</li>
                    <li>황금비율의 얼굴로 안정감을 주는 레나베어 스몰</li>
                    <li>적당한 볼륨감으로 입체적인 느낌을 주어 더욱 귀엽게 보여요</li>
                    <li>귀여움을 극대화하는 포동포동한 팔다리</li>
                   
                </ul>
            `,
            spec: {
               '스탠드 높이': '약 20cm',
               '앉은 높이': '약 15cm',
               '머리 둘레': '약 25cm',
               '목 둘레': '약 20cm',
               '엉덩이 둘레': '약 25cm',
               '가슴 둘레': '약 21cm',
               '발 바닥 길이': '약 4cm',
               '발 폭': '약 3cm',
            },
            reviewList: [
                {
                    id: 1,
                    author: '유**',
                    rating: 5,
                    date: '2026.02.19',
                    content: '털이 고르고 눈도 반짝이고 코도 귀엽고 팔다리 움직이는게 킥입니다',
                    helpful: 345,
                    verified: true
                },
                {
                    id: 2,
                    author: '박**',
                    rating: 5,
                    date: '2026.02.01',
                    content: '어떤 옷을 입혀놓아도 모두 소화하는... 앉아도 귀엽고 서도 귀엽고 뭘해도 이쁘고 귀여워요 ㅜㅜ',
                    helpful: 278,
                    verified: true
                },
                {
                    id: 3,
                    author: '이**',
                    rating: 5,
                    date: '2026.02.25',
                    content: '첫째딸(7살) 선물로 사려고 했는데 둘째딸 2살 아기도 갖고 싶어 할거 같아서 두개 샀어요 ',
                    helpful: 198,
                    verified: true
                }
            ]
        },
        {
            id: 15,
            title: '[42% 특가] 물망초 생일기념 SET',
            price: 259000,
            salePrice: 151515,
            discount: 42,
            rating: 4.9,
            reviews: 242,
            image: 'https://ecimg.cafe24img.com/pg440b54139354047/teddytales/web/product/big/20260225/20a6d837b300c734d5a2b8037c3e0ca7.png',
            images: [
                'https://ecimg.cafe24img.com/pg440b54139354047/teddytales/web/product/big/20260225/20a6d837b300c734d5a2b8037c3e0ca7.png'
            ],
            badge: 'sale',
            badgeText: '42%',
            description: `
                <h3>레나베어 물망초 M + 생일파티 의상 M</h3>
                <p>레나베어 물망초와 생일파티의상을 만나보세요</p>
                <h4>생일파티의상 특징</h4>
                <ul>
                    <li>알록달록 귀여운 장식이 달린 고깔모자</li>
                    <li><b>생일파티의상 수트</b></li>
                    <li>다트 초콜릿 색상의 보타이와 생일축하 리본</li>
                    <li><b>생일파티의상 드레스</b></li>
                    <li>연핑크색 리본과 다크초콜릿 색상이 어우러진 드레스</li>
                </ul>
            `,
            spec: {
               '스탠드 높이': '약 30cm',
               '앉은 높이': '약 23cm',
               '생일파티의상 드레스(총기장)': '약 15cm',
               '생일파티의상 드레스(몸통넓이)': '약 31cm',
            },
            reviewList: [
                {
                    id: 1,
                    author: '손**',
                    rating: 5,
                    date: '2026.02.26',
                    content: '역시!! 생일 선물로 이 복장 만한게 없는 것 같아요^^',
                    helpful: 234,
                    verified: true
                },
                {
                    id: 2,
                    author: '이미라',
                    rating: 4,
                    date: '2024.01.10',
                    content: '작은 크기에 비해 사운드가 강력해요. 다만 베이스가 조금 약한 것 같아요.',
                    helpful: 189,
                    verified: true
                }
            ]
        },
        {
            id: 16,
            title: '신학기 데스크테리어 추천 조합 3',
            price: 158000,
            salePrice: 134300,
            discount: 15,
            rating: 5.0,
            reviews: 618,
            image: 'https://ecimg.cafe24img.com/pg440b54139354047/teddytales/web/product/big/20260225/1814accee95275606a871c260596b7a9.png',
            images: [
                'https://ecimg.cafe24img.com/pg440b54139354047/teddytales/web/product/big/20260225/1814accee95275606a871c260596b7a9.png'
            ],
            badge: 'sale',
            badgeText: '15%',
            description: `
                <h3>Linabear XS 1+1 </h3>
                <p>4 Color View</p>
                <h4>주요 특징</h4>
                <ul>
                    <li>밀크티, 화이트, 베이비블랙, 베이비핑크</li>
                    <li>크기가 작아져도 황금비율의 얼굴로 안정감을 주는 레나베어XS</li>
                    <li>작아서 더 귀여운 레나베어!</li>
                    <li>앙증맞고 통통한 팔과 다리가 사랑스러움을 더해줘요.</li>
                </ul>
            `,
            spec: {
                '인형사이즈': '약 15cm'
            },
            reviewList: [
                {
                    id: 1,
                    author: '정**',
                    rating: 5,
                    date: '2025.01.18',
                    content: '우리 곰돌이랑 똑닮은 인형 보들보들하다... ㅠ',
                    helpful: 456,
                    verified: true
                },
                {
                    id: 2,
                    author: 'love_gian**',
                    rating: 5,
                    date: '2024.12.08',
                    content: '여기요 여기~ 리태 여기 있어요💛 이제 밤에 나가도 문제 없다곰!',
                    helpful: 389,
                    verified: true
                },
                {
                    id: 3,
                    author: '김**',
                    rating: 5,
                    date: '2026.01.12',
                    content: '완전 귀요미에요 어쩜 이리 느낌도 다르고 표정도 다른지요 자꾸 애착인형이 쌓여가네요',
                    helpful: 312,
                    verified: true
                },
                {
                    id: 4,
                    author: '비회원',
                    rating: 3,
                    date: '2025.12.28',
                    content: '곰돌이 눈동자의 위치가 정확하게 중간에 있지 않아요. 값에 비해 퀄리티가 떨어지네요',
                    helpful: 234,
                    verified: true
                }
            ]
        }
    ]
};

// ============================================
// 상품 데이터 조회 함수
// ============================================

// 모든 상품을 가져오는 함수
function getAllProducts() {
    return [...productsData.best, ...productsData.new, ...productsData.sale];
}

// 상품 ID로 특정 상품을 찾는 함수
function findProductById(productId) {
    return getAllProducts().find(p => p.id === productId);
}

// 전역에서 접근 가능하도록 window 객체에 노출
window.productsData = productsData;
window.findProductById = findProductById;
window.getAllProducts = getAllProducts;
