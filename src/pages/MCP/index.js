import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import ProgressBar from 'react-animated-progress-bar';
import { useState } from "react";
import { DataGrid } from '@mui/x-data-grid';
// import MaterialTable from "material-table";

// import { forwardRef } from 'react';
// import AddBox from '@material-ui/icons/AddBox';
// import ArrowDownward from '@material-ui/icons/ArrowDownward';
// import Check from '@material-ui/icons/Check';
// import ChevronLeft from '@material-ui/icons/ChevronLeft';
// import ChevronRight from '@material-ui/icons/ChevronRight';
// import Clear from '@material-ui/icons/Clear';
// import DeleteOutline from '@material-ui/icons/DeleteOutline';
// import Edit from '@material-ui/icons/Edit';
// import FilterList from '@material-ui/icons/FilterList';
// import FirstPage from '@material-ui/icons/FirstPage';
// import LastPage from '@material-ui/icons/LastPage';
// import Remove from '@material-ui/icons/Remove';
// import SaveAlt from '@material-ui/icons/SaveAlt';
// import Search from '@material-ui/icons/Search';
// import ViewColumn from '@material-ui/icons/ViewColumn';


// const Item = styled(Paper)(({ theme }) => ({
//     backgroundColor:  '#F9FAFE',
//     ...theme.typography.body2,
//     padding: theme.spacing(1),
//     //textAlign: 'left',
//     color: theme.palette.text.secondary,
    
// }));

const CustomColor = styled('div')({
      background: "-webkit-linear-gradient(180deg, #426DEC 0%, #86C991 100%)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent"
    
});

// const tableIcons = {
//     Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
//     Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
//     Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
//     Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
//     DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
//     Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
//     Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
//     Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
//     FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
//     LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
//     NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
//     PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
//     ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
//     Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
//     SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
//     ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
//     ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
// };


const MCPSList = [
    { key: 1, name: "Dĩ An 3", percentage: "88", color_bar: '#D94949',
        ID: 333444555, year: 2021, status: "Đang sử dụng", capacity: "1500L", inUse: "1350L", color: "Vàng", address: "Đường N3, phường Dĩ An, thị xã Dĩ An, tỉnh Bình Dương", 
        columns: [{ headerName: "Id Task", field: 'id', width: "100", headerClassName: 'super-app-theme--header'},
                { headerName: 'Thời gian bắt đầu', field: 'starttime', width: "200", headerClassName: 'super-app-theme--header'},
                { headerName: 'Thời gian kết thúc', field: 'endtime', width: "200", headerClassName: 'super-app-theme--header'},
                { headerName: 'Tình trạng', field: 'status', width: "170", headerClassName: 'super-app-theme--header'},
                { headerName: 'Ghi chú', field: 'note', width: "188", headerClassName: 'super-app-theme--header'}],
        data: [{
            "id":1234,
            "starttime":"12/10/2022 16:00",
            "endtime":"12/10/2022 17:00",
            "status":"Đang thực hiện",
            "note": ""
         },
         {
             "id":1231,
             "starttime":"11/10/2022 16:00",
             "endtime":"11/10/2022 17:00",
             "status":"Hoãn",
             "note": "Lý do thời tiết"
         },
         {
             "id":1220,
             "starttime":"11/10/2022 15:00",
             "endtime":"11/10/2022 16:00",
             "status":"Đã hoàn thành",
             "note": ""
         }]
    },
    { key: 2, name: "Thủ Đức 2", percentage: "40", color_bar: '#97E075',
    ID: 777888999, year: 2020, status: "Đang sử dụng", capacity: "1000L", inUse: "400L", color: "Xanh lá", address: "1 Đ. Võ Văn Ngân, Linh Chiểu, Thành Phố Thủ Đức, Thành phố Hồ Chí Minh", 
        columns: [{ headerName: 'Id Task', field: 'id', width: "100", headerClassName: 'super-app-theme--header'},
                { headerName: 'Thời gian bắt đầu', field: 'starttime', width: "200", headerClassName: 'super-app-theme--header'},
                { headerName: 'Thời gian kết thúc', field: 'endtime', width: "200", headerClassName: 'super-app-theme--header'},
                { headerName: 'Tình trạng', field: 'status', width: "170", headerClassName: 'super-app-theme--header'},
                { headerName: 'Ghi chú', field: 'note', width: "188", headerClassName: 'super-app-theme--header'}],
        data: [{
            "id":2232,
            "starttime":"13/11/2022 16:00",
            "endtime":"13/11/2022 17:00",
            "status":"Đang thực hiện",
            "note": ""
         },
         {
             "id":2230,
             "starttime":"12/11/2022 16:00",
             "endtime":"12/11/2022 17:00",
             "status":"Đã hoàn thành",
             "note": ""
         },
         {
             "id":2210,
             "starttime":"11/11/2022 16:00",
             "endtime":"11/11/2022 17:00",
             "status":"Đã hoàn thành",
             "note": ""
         }]
    },
    { key: 3, name: "Lý Thường Kiệt 14", percentage: "80", color_bar: '#D94949',
        ID: 123456789, year: 2018, status: "Đang sử dụng", capacity: "1000L", inUse: "800L", color: "Xanh lá", address: "268 Lý Thường Kiệt, Phường 14, Quận 10, TP. HCM", 
        columns: [{ headerName: 'Id Task', field: 'id', width: "100", headerClassName: 'super-app-theme--header'},
                { headerName: 'Thời gian bắt đầu', field: 'starttime', width: "200", headerClassName: 'super-app-theme--header'},
                { headerName: 'Thời gian kết thúc', field: 'endtime', width: "200", headerClassName: 'super-app-theme--header'},
                { headerName: 'Tình trạng', field: 'status', width: "170", headerClassName: 'super-app-theme--header'},
                { headerName: 'Ghi chú', field: 'note', width: "188", headerClassName: 'super-app-theme--header'}],
        data: [{
            "id":3210,
            "starttime":"13/11/2022 16:00",
            "endtime":"13/11/2022 17:00",
            "status":"Đang thực hiện",
            "note": ""
         },
         {
             "id":3200,
             "starttime":"12/11/2022 16:00",
             "endtime":"12/11/2022 17:00",
             "status":"Hoãn",
             "note": "Lý do thời tiết"
         },
         {
             "id":3190,
             "starttime":"11/11/2022 16:00",
             "endtime":"11/11/2022 17:00",
             "status":"Đã hoàn thành",
             "note": ""
         }]
    },
    { key: 4, name: "Phường Lá Quận Hoa", percentage: "50", color_bar: '#FFE76B',
    ID: 444555999, year: 2020, status: "Đang sử dụng", capacity: "1000L", inUse: "500L", color: "Xanh lá", address: "59C Nguyễn Đình Chiểu, Quận 3, TP. HCM", 
        columns: [{ headerName: 'Id Task', field: 'id', width: "100", headerClassName: 'super-app-theme--header'},
                { headerName: 'Thời gian bắt đầu', field: 'starttime', width: "200", headerClassName: 'super-app-theme--header'},
                { headerName: 'Thời gian kết thúc', field: 'endtime', width: "200", headerClassName: 'super-app-theme--header'},
                { headerName: 'Tình trạng', field: 'status', width: "170", headerClassName: 'super-app-theme--header'},
                { headerName: 'Ghi chú', field: 'note', width: "188", headerClassName: 'super-app-theme--header'}],
        data: [{
            "id":4234,
            "starttime":"13/11/2022 16:00",
            "endtime":"13/11/2022 17:00",
            "status":"Đang thực hiện",
            "note": ""
         },
         {
             "id":4232,
             "starttime":"12/11/2022 16:00",
             "endtime":"12/11/2022 17:00",
             "status":"Hoãn",
             "note": "Thiếu nhân lực"
         },
         {
             "id":4230,
             "starttime":"11/11/2022 16:00",
             "endtime":"11/11/2022 17:00",
             "status":"Đã hoàn thành",
             "note": ""
         }]
    },
    { key: 5, name: "Dĩ An 5", percentage: "20", color_bar: '#97E075',
    ID: 222333444, year: 2019, status: "Đang sử dụng", capacity: "1500L", inUse: "300L", color: "Xanh lá", address: "167 Lý Thường Kiệt, KP Thắng Lợi 2, P. Dĩ An, TX. Dĩ An, Bình Dương", 
        columns: [{ headerName: 'Id Task', field: 'id', width: "100", headerClassName: 'super-app-theme--header'},
                { headerName: 'Thời gian bắt đầu', field: 'starttime', width: "200", headerClassName: 'super-app-theme--header'},
                { headerName: 'Thời gian kết thúc', field: 'endtime', width: "200", headerClassName: 'super-app-theme--header'},
                { headerName: 'Tình trạng', field: 'status', width: "170", headerClassName: 'super-app-theme--header'},
                { headerName: 'Ghi chú', field: 'note', width: "188", headerClassName: 'super-app-theme--header'}],
        data: [{
            "id":5231,
            "starttime":"13/11/2022 16:00",
            "endtime":"13/11/2022 17:00",
            "status":"Đang thực hiện",
            "note": ""
         },
         {
             "id":5230,
             "starttime":"12/11/2022 16:00",
             "endtime":"12/11/2022 17:00",
             "status":"Đã hoàn thành",
             "note": ""
         },
         {
             "id":5220,
             "starttime":"11/11/2022 16:00",
             "endtime":"11/11/2022 17:00",
             "status":"Đã hoàn thành",
             "note": ""
         }]
    }
];

const active = {backgroundColor: '#ECECEC', borderRadius: '13px', height: '62px', width: '330px'}
const inactive = {}

export const MCPS = () => {
    const [chosenMCP, setChosenMCP] = useState(MCPSList[0]);
    const [selected, setSelected] = useState(0);
    const handleClick = (divNum) => {
        setSelected(divNum);
    };
    return (
        <div id="MCPSPage" style={{background: '#F9FAFE', height: '110vh'}}>
            <Box sx={{ flexGrow: 1 }} >
                <Grid 
                    container
                    spacing={5} 
                    columns={16}  
                    justifyContent="center"
                    flexDirection={{ xs: "column", sm: "row" }}
                    columnSpacing={3}
                >
                    <Grid item xs={15} md={5} lg={15}>
                        Header
                    </Grid>
                    <Grid item sm={9} lg={1.5}>
                        Aside
                    </Grid>
                    <Grid item sm={6} xs={15} md={6} lg={4} >
                        <Card style={{height: '458px'}}>
                                <CardContent >
                                    <CustomColor>
                                        <Typography gutterBottom variant="h5" >
                                            <strong>MCPs</strong>
                                        </Typography>
                                    </CustomColor>
                                    {MCPSList.map((info,index) => (
                                        <div key={index} style={(selected === index) ? active : inactive} 
                                            onClick={()=>{
                                                setChosenMCP(MCPSList[index]);
                                                handleClick(index);
                                            }}>
                                            <div style={{ marginLeft: '12px', paddingTop: '10px'}}>
                                                <Typography variant="body1" component="div" style={{ marginBottom: "-15px", marginLeft: '1px'}}>
                                                    <strong>{info.name}</strong></Typography>
                                                    <ProgressBar
                                                        width="320px"
                                                        height="9px"
                                                        rect
                                                        fontColor={info.color_bar}
                                                        percentage={info.percentage}
                                                        rectPadding="0px"
                                                        rectBorderRadius="20px"
                                                        trackPathColor="transparent"
                                                        bgColor="#D94949"
                                                        trackBorderColor="#b6b6b6"
                                                        defColor={{
                                                            fair: '#97E075',
                                                            good: '#FFE76B',
                                                            excellent: '#D94949',
                                                            poor: '#97E075',
                                                        }}
                                                    ></ProgressBar>
                                            </div>
                                        </div>
                                    ))} 
                                </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={15} sm={10} md={10} lg={9.5}>
                        <Card >
                            <CardActionArea>
                                <CardContent>
                                <Grid container columns={9.5} spacing={5}>
                                    <Grid item container columns={9.5} spacing={2}>
                                        <Grid item sm={9.5} md={9.5} xs={9.5} lg={9.5}>
                                            <CustomColor>
                                                <Typography gutterBottom variant="h6" component="h5">
                                                    <strong>Thông tin MCP</strong>
                                                </Typography>
                                            </CustomColor>
                                        </Grid>
                                        <Grid item sm={2.75} md={2.75} xs={2.75} lg={2.75}>
                                            <Typography variant="body2" component="div">
                                                <strong>Tên: </strong> {chosenMCP.name}
                                            </Typography>
                                        </Grid>
                                        <Grid item sm={2.25} md={2.25} xs={2.25} lg={2.25}>
                                            <Typography variant="body2" component="div">
                                                <strong>ID: </strong> {chosenMCP.ID}
                                            </Typography>
                                        </Grid>
                                        <Grid item sm={2.25} md={2.25} xs={2.25} lg={2.25}>
                                            <Typography variant="body2" component="div">
                                                <strong>Năm sản xuất: </strong> {chosenMCP.year}
                                            </Typography>
                                        </Grid>
                                        <Grid item sm={2.25} md={2.25} xs={2.25} lg={2.25}>
                                            <Typography variant="body2" component="div">
                                                <strong>Tình trạng: </strong> {chosenMCP.status}
                                            </Typography>
                                        </Grid>
                                        <Grid item sm={2.25} md={2.25} xs={2.75} lg={2.75}>
                                            <Typography variant="body2" component="div">
                                                <strong>Dung tích: </strong> {chosenMCP.capacity}
                                            </Typography>
                                        </Grid>
                                        <Grid item sm={2.25} md={2.25} xs={2.25} lg={2.25}>
                                            <Typography variant="body2" component="div">
                                                <strong>Đã sử dụng: </strong> {chosenMCP.inUse}
                                            </Typography>
                                        </Grid>
                                        <Grid item sm={4.5} md={4.5} xs={4.5} lg={4.5}>
                                            <Typography variant="body2" component="div">
                                                <strong>Màu sơn: </strong> {chosenMCP.color}
                                            </Typography>
                                        </Grid>
                                        <Grid item sm={9.5} md={9.5} xs={9.5} lg={9.5}>
                                            <Typography variant="body2" component="div">
                                                <strong>Địa chỉ: </strong> {chosenMCP.address}
                                            </Typography>
                                        </Grid>
                                        <Grid item container columns={9.5} spacing={2}>
                                            <Grid item sm={9.5} md={9.5} xs={9.5} lg={9.5}>
                                                <Typography variant="body2" component="div">
                                                    <strong>Lịch sử sử dụng: </strong>
                                                </Typography>
                                            </Grid>
                                            <Grid item sm={9.5} xs={9.5} md={9.5} lg={9.5}>
                                                <Box sx={{ height: 228, width: '100%', '& .super-app-theme--header': {backgroundColor: '#CDDAFF'},}} >
                                                    <DataGrid
                                                        rows={chosenMCP.data}
                                                        columns={chosenMCP.columns}
                                                        pageSize={3}
                                                        rowsPerPageOptions={[3]}
                                                        disableSelectionOnClick
                                                        experimentalFeatures={{ newEditingApi: true }}
                                                        rowHeight={39}
                                                    />
                                                </Box>
                                            </Grid> 
                                        </Grid>
                                    </Grid>
                                </Grid>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                </Grid>
            </Box>
        </div>
    );
}