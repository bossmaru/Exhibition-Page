var mapContainer = document.getElementById('map'), 
    mapOption = { 
        center: new kakao.maps.LatLng(37.5665, 126.9780), // 서울 중심 좌표
        level: 7 // 기본 확대 레벨
    };

// 모바일 화면 크기 조정
if (window.innerWidth < 768) {
    mapOption.level = 9; // 모바일에서는 더 넓게 보기 위해 확대 레벨 변경
}

var map = new kakao.maps.Map(mapContainer, mapOption); // 지도 생성

// 전시회 위치 (마커로 표시)
var positions = [
    {
        title: '서울 전시회 1', 
        latlng: new kakao.maps.LatLng(37.5665, 126.9780)
    },
    {
        title: '서울 전시회 2', 
        latlng: new kakao.maps.LatLng(37.5796, 126.9769)
    },
    {
        title: '부산 전시회 3', 
        latlng: new kakao.maps.LatLng(35.1796, 129.0756)
    }
];

// 마커 생성 및 지도에 추가
for (var i = 0; i < positions.length; i++) {
    var marker = new kakao.maps.Marker({
        map: map, // 마커를 표시할 지도 객체
        position: positions[i].latlng, // 마커의 위치
        title: positions[i].title // 마커 타이틀
    });
}
