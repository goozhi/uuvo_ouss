// var RSCS_NVRJ=require('./RSCS_NVRJ');
var AFOA=require('./afoa/AFOA_UJ')
var NINI_ZJZJ=require('./NINI_ZJZJ');
var RSCS_UYPJ_cf=require('./RSCS_UYPJ_cf')
var eSGGCGNE=require('./eSGGCGNE')
var EOWL_TRIG=require('./EOWL_TRIG')
function RSCS_cf(NINI_IOWR_1, RJSE_NVRJ, MCVN_IOWR_1){
    if(MCVN_IOWR_1==null){
        throw 'RSCS_cf: NRAP MCVN'
    }
    if(typeof(NINI_IOWR_1)!='object'){
        throw 'RSCS_cf : MCVN UXUX MSOX 参数类型错误 : '+typeof(NINI_IOWR_1);
    }
    var reg_NVRJ_1 = /\*\{08/;
    if(!reg_NVRJ_1.test(RJSE_NVRJ)){
        throw 'RSCS_cf : RJSE_NVRJ BQEO JI AC GRPJ DK 文本报文内容是不合法的'
    }
    var NINIGGMCVN_VNWM_1=NINI_IOWR_1.MCVN_VNWM_1;
    var NINIGGWU=NINIGGMCVN_VNWM_1[0];
    var NINIGGeS=NINIGGMCVN_VNWM_1[1];
    var NINIGGUXUX=NINIGGMCVN_VNWM_1[2];
    var NINIGGUYPJ=NINIGGMCVN_VNWM_1[3];
    var NINIGGTRVN=NINIGGMCVN_VNWM_1[4];
    var NINIGGEYTR=NINIGGMCVN_VNWM_1[5];
    try{
        NINI_ZJZJ(NINIGGMCVN_VNWM_1);
    }catch(err){
        throw err;
    }
    // var NVRJGGeS_IOWR=AFOA.EOWL_IOWR(RSCS_NVRJ(RJSE_NVRJ),'eS_YYHA', NINIGGeS.replace(/[\{\}]/g,'').slice(0, NINIGGeS.length-2));
    // if(!NVRJGGeS_IOWR)
        // throw 'RSCS_cf : eS MCVN ACUN:'+NINIGGeS;
    var NINIGGYJ;
    var TRIG=EOWL_TRIG(NINIGGUYPJ);
    var IOWR_1=eSGGCGNE({NINIGGeS, TRIG},RJSE_NVRJ,MCVN_IOWR_1);
    var VNWY_VNWM_1 = IOWR_1.VNWY_VNWM_1;
    var IOYCGGNVRJ_IOWR=IOWR_1.IOYCGGNVRJ_IOWR;
    var YFGGeSIHGGDAGGPLGGeS = IOWR_1.YFGGeSIHGGDAGGPLGGeS;

    var NVRJ_eSGGYYHA=IOWR_1.NVRJ_eSGGYYHA;
        NINIGGYJ=RSCS_UYPJ_cf(NINIGGUYPJ, VNWY_VNWM_1);
    var NINIGGEYNH_IOWR={IOYCGGNVRJ_IOWR,NINIGGWU, NINIGGeS, NINIGGUXUX, NINIGGUYPJ, NINIGGTRVN, NINIGGEYTR, NINIGGYJ, VNWY_VNWM_1, NVRJ_eSGGYYHA, YFGGeSIHGGDAGGPLGGeS};
    return NINIGGEYNH_IOWR;
}
module.exports=RSCS_cf;