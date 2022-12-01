/* global kakao */
import React, { useEffect, useState  } from "react";
//import "../styles/Map.scss";

<script type="text/javascript" src="//dapi.kakao.com/v2/maps/sdk.js?appkey=bebf548a81a0129815c14dd31d75db8e"></script>

const { kakao } = window;

const MapTest = () => {
	const [map,setMap] = useState(null);

    //처음 지도 그리기
    useEffect(()=>{
        const container = document.getElementById('map');
        const options = { center: new kakao.maps.LatLng(33.450701, 126.570667) };
        const kakaoMap = new kakao.maps.Map(container, options);
        setMap(kakaoMap);
    },[])

    return (
        <div
            style={{
                width: '50%',
                display: 'inline-block',
                marginLeft: '5px',
                marginRight: '5px',
            }}
        >
            <div id="map" style={{ width: '50%', height: '100px' }}></div>
        </div>
    );
};

export default MapTest;