import React, { useRef, useEffect } from 'react';

function PanoViewer() {
    const viewerRef = useRef(null);

    useEffect(() => {
        if (window.pannellum && viewerRef.current) {
            window.pannellum.viewer(viewerRef.current, {
                default: {
                    firstScene: "scene6",
                    sceneFadeDuration: 1000,
                },
                scenes: {
                    scene1: {
                        type: "equirectangular",
                        panorama: "pano/enterence.PNG",
                        autoLoad: true,
                        yaw: -80,
                        hotSpots: [
                            {
                                pitch: 5,
                                yaw: 220,
                                type: "scene",
                                text: "Go to Parking",
                                sceneId: "scene2",
                            },
                            {
                                pitch: 5,
                                yaw: 260,
                                type: "scene",
                                text: "Go to Premise",
                                sceneId: "scene6",
                            },
                        ],
                    },

                    scene2: {
                        type: "equirectangular",
                        panorama: "pano/parking.PNG",
                        autoLoad: true,
                        hotSpots: [
                            {
                                pitch: 5,
                                yaw: 20,
                                type: "scene",
                                text: "Go to Enterance",
                                sceneId: "scene1",
                            },
                            {
                                pitch: 5,
                                yaw: -110,
                                type: "scene",
                                text: "Go to MCA Block",
                                sceneId: "scene3",
                            },
                            {
                                pitch: 5,
                                yaw: -100,
                                type: "scene",
                                text: "Go inside",
                                sceneId: "scene5",
                            },
                            {
                                pitch: 5,
                                yaw: -45,
                                type: "scene",
                                text: "Go to Premise",
                                sceneId: "scene6",
                            },
                        ],
                    },
                    scene3: {
                        type: "equirectangular",
                        panorama: "pano/canteen+mca.jpg",
                        autoLoad: true,
                        hotSpots: [
                            {
                                pitch: -10,
                                yaw: -70,
                                type: "scene",
                                text: "Go to Ground",
                                sceneId: "scene4",
                            },
                            {
                                pitch: -10,
                                yaw: -20,
                                type: "scene",
                                text: "Go Inside",
                                sceneId: "scene5",
                            },
                        ],
                    },
                    scene4: {
                        type: "equirectangular",
                        panorama: "pano/ground.jpg",
                        autoLoad: true,
                        hotSpots: [
                        ],
                    },
                    scene5: {
                        type: "equirectangular",
                        panorama: "pano/inside.PNG",
                        autoLoad: true,
                        hotSpots: [
                            
                        ],
                    },
                    scene6: {
                        type: "equirectangular",
                        panorama: "pano/sample-pano.jpg",
                        autoLoad: true,
                        yaw: -40,
                        pitch: -30,
                        hotSpots: [
                            {
                                pitch: -20,
                                yaw: 180,
                                type: "scene",
                                text: "Go Parking",
                                sceneId: "scene2",
                            },
                            {
                                pitch: -40,
                                yaw: -50,
                                type: "scene",
                                text: "Go Inside",
                                sceneId: "scene5",
                            },
                        ],
                    },
                },
            });
        }
    }, []);

    return (
        <div
            ref={viewerRef}
            style={{ width: "100%", height: "93vh" }}
        />
    );
}

export default PanoViewer;
