var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}'
            })
        });
var format_Border_1 = new ol.format.GeoJSON();
var features_Border_1 = format_Border_1.readFeatures(json_Border_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Border_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Border_1.addFeatures(features_Border_1);
var lyr_Border_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Border_1, 
                style: style_Border_1,
                popuplayertitle: "Border",
                interactive: true,
                    title: '<img src="styles/legend/Border_1.png" /> Border'
                });
var format_SurfaceWaterBody_NorthCentre_2 = new ol.format.GeoJSON();
var features_SurfaceWaterBody_NorthCentre_2 = format_SurfaceWaterBody_NorthCentre_2.readFeatures(json_SurfaceWaterBody_NorthCentre_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SurfaceWaterBody_NorthCentre_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SurfaceWaterBody_NorthCentre_2.addFeatures(features_SurfaceWaterBody_NorthCentre_2);
var lyr_SurfaceWaterBody_NorthCentre_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SurfaceWaterBody_NorthCentre_2, 
                style: style_SurfaceWaterBody_NorthCentre_2,
                popuplayertitle: "SurfaceWaterBody_NorthCentre",
                interactive: true,
                    title: '<img src="styles/legend/SurfaceWaterBody_NorthCentre_2.png" /> SurfaceWaterBody_NorthCentre'
                });
var format_Monitoring_Stations_WFD_3 = new ol.format.GeoJSON();
var features_Monitoring_Stations_WFD_3 = format_Monitoring_Stations_WFD_3.readFeatures(json_Monitoring_Stations_WFD_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Monitoring_Stations_WFD_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Monitoring_Stations_WFD_3.addFeatures(features_Monitoring_Stations_WFD_3);
var lyr_Monitoring_Stations_WFD_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Monitoring_Stations_WFD_3, 
                style: style_Monitoring_Stations_WFD_3,
                popuplayertitle: "Monitoring_Stations_WFD",
                interactive: true,
                    title: '<img src="styles/legend/Monitoring_Stations_WFD_3.png" /> Monitoring_Stations_WFD'
                });
var format_Hidro_stations_active_4 = new ol.format.GeoJSON();
var features_Hidro_stations_active_4 = format_Hidro_stations_active_4.readFeatures(json_Hidro_stations_active_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Hidro_stations_active_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Hidro_stations_active_4.addFeatures(features_Hidro_stations_active_4);
var lyr_Hidro_stations_active_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Hidro_stations_active_4, 
                style: style_Hidro_stations_active_4,
                popuplayertitle: "Hidro_stations_active",
                interactive: true,
                    title: '<img src="styles/legend/Hidro_stations_active_4.png" /> Hidro_stations_active'
                });
var format_PRTRPollutantReleaseTransferRegister_5 = new ol.format.GeoJSON();
var features_PRTRPollutantReleaseTransferRegister_5 = format_PRTRPollutantReleaseTransferRegister_5.readFeatures(json_PRTRPollutantReleaseTransferRegister_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PRTRPollutantReleaseTransferRegister_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PRTRPollutantReleaseTransferRegister_5.addFeatures(features_PRTRPollutantReleaseTransferRegister_5);
var lyr_PRTRPollutantReleaseTransferRegister_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PRTRPollutantReleaseTransferRegister_5, 
                style: style_PRTRPollutantReleaseTransferRegister_5,
                popuplayertitle: "PRTR-PollutantReleaseTransferRegister",
                interactive: true,
                    title: '<img src="styles/legend/PRTRPollutantReleaseTransferRegister_5.png" /> PRTR-PollutantReleaseTransferRegister'
                });
var format_Inlandaquacultures_6 = new ol.format.GeoJSON();
var features_Inlandaquacultures_6 = format_Inlandaquacultures_6.readFeatures(json_Inlandaquacultures_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Inlandaquacultures_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Inlandaquacultures_6.addFeatures(features_Inlandaquacultures_6);
var lyr_Inlandaquacultures_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Inlandaquacultures_6, 
                style: style_Inlandaquacultures_6,
                popuplayertitle: "Inland aquacultures",
                interactive: true,
    title: 'Inland aquacultures<br />\
    <img src="styles/legend/Inlandaquacultures_6_0.png" /> ?<br />\
    <img src="styles/legend/Inlandaquacultures_6_1.png" /> Conservation<br />\
    <img src="styles/legend/Inlandaquacultures_6_2.png" /> Recreational fishing<br />\
    <img src="styles/legend/Inlandaquacultures_6_3.png" /> Restaurant<br />\
    <img src="styles/legend/Inlandaquacultures_6_4.png" /> Self consumption?<br />\
    <img src="styles/legend/Inlandaquacultures_6_5.png" /> Trout farm<br />\
    <img src="styles/legend/Inlandaquacultures_6_6.png" /> <br />'
        });

lyr_GoogleSatellite_0.setVisible(true);lyr_Border_1.setVisible(true);lyr_SurfaceWaterBody_NorthCentre_2.setVisible(true);lyr_Monitoring_Stations_WFD_3.setVisible(true);lyr_Hidro_stations_active_4.setVisible(true);lyr_PRTRPollutantReleaseTransferRegister_5.setVisible(true);lyr_Inlandaquacultures_6.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_Border_1,lyr_SurfaceWaterBody_NorthCentre_2,lyr_Monitoring_Stations_WFD_3,lyr_Hidro_stations_active_4,lyr_PRTRPollutantReleaseTransferRegister_5,lyr_Inlandaquacultures_6];
lyr_Border_1.set('fieldAliases', {'length': 'length', 'st_length_': 'st_length_', });
lyr_SurfaceWaterBody_NorthCentre_2.set('fieldAliases', {'fid': 'fid', 'codigo': 'codigo', 'nome': 'nome', 'regiao_hid': 'regiao_hid', 'natur_fm_a': 'natur_fm_a', 'transfront': 'transfront', 'est_pot_ec': 'est_pot_ec', 'estado_qui': 'estado_qui', 'st_length_': 'st_length_', });
lyr_Monitoring_Stations_WFD_3.set('fieldAliases', {'fid': 'fid', 'arh': 'arh', 'eurbdcode': 'eurbdcode', 'swst_eu_cd': 'swst_eu_cd', 'subsite': 'subsite', 'swst_name': 'swst_name', 'wb_locatio': 'wb_locatio', 'wb_categor': 'wb_categor', 'surveil': 'surveil', 'operat': 'operat', 'codigo': 'codigo', 'nome': 'nome', 'link_dados': 'link_dados', });
lyr_Hidro_stations_active_4.set('fieldAliases', {'fid': 'fid', 'codigo': 'codigo', 'nome': 'nome', 'tipo': 'tipo', 'estado': 'estado', 'url': 'url', });
lyr_PRTRPollutantReleaseTransferRegister_5.set('fieldAliases', {'fid': 'fid', 'cod_apa_or': 'cod_apa_or', 'nif_organi': 'nif_organi', 'cod_apa_es': 'cod_apa_es', 'nome_estab': 'nome_estab', 'data_inici': 'data_inici', 'email_esta': 'email_esta', 'observacoe': 'observacoe', 'fax_estabe': 'fax_estabe', 'telefone_e': 'telefone_e', 'latitude_e': 'latitude_e', 'longitude_': 'longitude_', 'morada_est': 'morada_est', 'cod_postal': 'cod_postal', 'num_porta_': 'num_porta_', 'localidade': 'localidade', 'num_trabal': 'num_trabal', 'cae_princi': 'cae_princi', 'regime_lab': 'regime_lab', 'data_alter': 'data_alter', 'tem_caes_s': 'tem_caes_s', 'subsetor': 'subsetor', });
lyr_Inlandaquacultures_6.set('fieldAliases', {'fid': 'fid', 'name': 'name', 'Category': 'Category', });
lyr_Border_1.set('fieldImages', {'length': '', 'st_length_': '', });
lyr_SurfaceWaterBody_NorthCentre_2.set('fieldImages', {'fid': 'TextEdit', 'codigo': 'TextEdit', 'nome': 'TextEdit', 'regiao_hid': 'TextEdit', 'natur_fm_a': 'TextEdit', 'transfront': 'TextEdit', 'est_pot_ec': 'TextEdit', 'estado_qui': 'TextEdit', 'st_length_': 'TextEdit', });
lyr_Monitoring_Stations_WFD_3.set('fieldImages', {'fid': 'TextEdit', 'arh': 'TextEdit', 'eurbdcode': 'TextEdit', 'swst_eu_cd': 'TextEdit', 'subsite': 'TextEdit', 'swst_name': 'TextEdit', 'wb_locatio': 'TextEdit', 'wb_categor': 'TextEdit', 'surveil': 'TextEdit', 'operat': 'TextEdit', 'codigo': 'TextEdit', 'nome': 'TextEdit', 'link_dados': 'TextEdit', });
lyr_Hidro_stations_active_4.set('fieldImages', {'fid': 'TextEdit', 'codigo': 'TextEdit', 'nome': 'TextEdit', 'tipo': 'TextEdit', 'estado': 'TextEdit', 'url': 'TextEdit', });
lyr_PRTRPollutantReleaseTransferRegister_5.set('fieldImages', {'fid': '', 'cod_apa_or': '', 'nif_organi': '', 'cod_apa_es': '', 'nome_estab': '', 'data_inici': '', 'email_esta': '', 'observacoe': '', 'fax_estabe': '', 'telefone_e': '', 'latitude_e': '', 'longitude_': '', 'morada_est': '', 'cod_postal': '', 'num_porta_': '', 'localidade': '', 'num_trabal': '', 'cae_princi': '', 'regime_lab': '', 'data_alter': '', 'tem_caes_s': '', 'subsetor': '', });
lyr_Inlandaquacultures_6.set('fieldImages', {'fid': 'TextEdit', 'name': 'TextEdit', 'Category': 'TextEdit', });
lyr_Border_1.set('fieldLabels', {'length': 'no label', 'st_length_': 'no label', });
lyr_SurfaceWaterBody_NorthCentre_2.set('fieldLabels', {'fid': 'no label', 'codigo': 'no label', 'nome': 'no label', 'regiao_hid': 'no label', 'natur_fm_a': 'no label', 'transfront': 'no label', 'est_pot_ec': 'no label', 'estado_qui': 'no label', 'st_length_': 'no label', });
lyr_Monitoring_Stations_WFD_3.set('fieldLabels', {'fid': 'no label', 'arh': 'no label', 'eurbdcode': 'no label', 'swst_eu_cd': 'no label', 'subsite': 'no label', 'swst_name': 'no label', 'wb_locatio': 'no label', 'wb_categor': 'no label', 'surveil': 'no label', 'operat': 'no label', 'codigo': 'no label', 'nome': 'no label', 'link_dados': 'no label', });
lyr_Hidro_stations_active_4.set('fieldLabels', {'fid': 'no label', 'codigo': 'no label', 'nome': 'no label', 'tipo': 'no label', 'estado': 'no label', 'url': 'no label', });
lyr_PRTRPollutantReleaseTransferRegister_5.set('fieldLabels', {'fid': 'no label', 'cod_apa_or': 'no label', 'nif_organi': 'no label', 'cod_apa_es': 'no label', 'nome_estab': 'no label', 'data_inici': 'no label', 'email_esta': 'no label', 'observacoe': 'no label', 'fax_estabe': 'no label', 'telefone_e': 'no label', 'latitude_e': 'no label', 'longitude_': 'no label', 'morada_est': 'no label', 'cod_postal': 'no label', 'num_porta_': 'no label', 'localidade': 'no label', 'num_trabal': 'no label', 'cae_princi': 'no label', 'regime_lab': 'no label', 'data_alter': 'no label', 'tem_caes_s': 'no label', 'subsetor': 'no label', });
lyr_Inlandaquacultures_6.set('fieldLabels', {'fid': 'no label', 'name': 'no label', 'Category': 'no label', });
lyr_Inlandaquacultures_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});