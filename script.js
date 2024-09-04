var mapContainer = document.getElementById('map'), 
    mapOption = { 
        center: new kakao.maps.LatLng(37.5665, 126.9780), // 서울 중심 좌표
        level: 7 // 기본 확대 레벨
    };

var map = new kakao.maps.Map(mapContainer, mapOption); // 지도 생성

var marker = new kakao.maps.Marker({
    map: map,
    position: new kakao.maps.LatLng(0, 0), // 초기 위치를 0으로 설정, 마우스 오버 시 위치 업데이트
    visible: false // 마커는 기본적으로 숨김
});

// 전시회 및 관광지 정보 배열
var exhibitions = [
    {
        title: '경복궁',
        latlng: new kakao.maps.LatLng(37.5796, 126.9770),
        description: '서울에서 가장 유명한 궁궐입니다.',
        link: 'https://www.royalpalace.go.kr/'
    },
    {
        title: '국립중앙박물관',
        latlng: new kakao.maps.LatLng(37.5231, 126.9803),
        description: '한국의 역사와 문화를 보여주는 박물관입니다.',
        link: 'https://www.museum.go.kr/'
    },
    {
        title: '남산 서울타워',
        latlng: new kakao.maps.LatLng(37.5512, 126.9882),
        description: '서울의 아름다운 전경을 감상할 수 있는 타워입니다.',
        link: 'https://www.nseoultower.co.kr/'
    }
];

// 전시회 리스트를 HTML로 생성
var exhibitionList = document.getElementById('exhibitionList');
exhibitions.forEach(function(exhibit, index) {
    var listItem = document.createElement('li');
    listItem.innerHTML = `<strong>${exhibit.title}</strong><br>${exhibit.description}<br><a href="${exhibit.link}" target="_blank">자세히 보기</a>`;
    
    // 마우스 오버 시 마커 표시
    listItem.addEventListener('mouseover', function() {
        marker.setPosition(exhibit.latlng); // 마커 위치 업데이트
        marker.setVisible(true); // 마커 보이기
        map.panTo(exhibit.latlng); // 지도를 마커 위치로 이동
    });

    // 마우스가 리스트를 벗어나면 마커 숨기기
    listItem.addEventListener('mouseout', function() {
        marker.setVisible(false);
    });

    exhibitionList.appendChild(listItem);
});
