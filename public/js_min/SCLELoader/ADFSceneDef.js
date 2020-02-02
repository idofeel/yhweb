let ADF_FILE_UNKOWN=0;let ADF_FILE_MODEL=1;let ADF_FILE_IMAGE=3;let ADF_FILE_AUDIO=2;let ADF_FILE_DOCUMENT=4;let ADF_FILE_VIDEO=5;let ADF_FILEOP_INVALID=0;let ADF_FILEOP_READ=1;let ADF_FILEOP_CREATE=2;let ADF_FILEOP_DEL=3;let ADFCST_NULL=0;let ADFCST_LEFTHAND=1;let ADFCST_RIGHTHAND=2;let ADFFILL_INVISIBLE=0;let ADFFILL_POINT=1;let ADFFILL_WIREFRAME=2;let ADFFILL_SOLID=3;let ADFCULL_NONE=1;let ADFCULL_CW=2;let ADFCULL_CCW=3;let ADFMTLTYPE_PHYSICS=0;let ADFMTLTYPE_PICTURE=1;let ADFMTLTYPE_PURECOLOR=2;let ADFCP_NULL=0;let ADFCP_ORTHO=1;let ADFCP_PERSPECTIVE=2;let ADFCUT_INVALID=0;let ADFCUT_X=1;let ADFCUT_Y=2;let ADFCUT_Z=3;let ADFCUT_NX=4;let ADFCUT_NY=5;let ADFCUT_NZ=6;let ADF_MDLSUBSET_UNKOWN=0;let ADF_MDLSUBSET_SURFACE=1;let ADF_MDLSUBSET_CURVE=2;let ADFPT_NULL=0;let ADFPT_POINTLIST=1;let ADFPT_LINELIST=2;let ADFPT_LINESTRIP=3;let ADFPT_TRIANGLELIST=4;let ADFPT_TRIANGLESTRIP=5;let ADFPT_TRIANGLEFAN=6;let ADFKFT_UNKNOWN=0;let ADFKFT_ROTATION=6;let ADFKFT_TRANSLATION=7;let ADFSTNT_NULL=0;let ADFSTNT_BASE=1;let ADFSTNT_WORKSTAGE=2;let ADFSTNT_WORKSTEP=3;let ADF_PARAMT_UNKOWN=0;let ADF_PARAMT_INT=1;let ADF_PARAMT_FLOAT=2;let ADF_PARAMT_DOUBLE=3;let ADF_PARAMT_STRING=4;let ADF_PARAMT_FLOAT3=5;let ADF_PARAMT_DOUBLE3=6;let ADF_PARAMT_BOOL=7;let ADF_LENUNITTYPE_UNKOWN=0;let ADF_LENUNITTYPE_MM=1;let ADF_LENUNITTYPE_CM=2;let ADF_LENUNITTYPE_M=3;let ADF_LENUNITTYPE_MICRON=4;let ADF_LENUNITTYPE_FT=5;let ADF_LENUNITTYPE_IN=6;let ADF_LENUNITTYPE_MIL=7;let ADF_LENUNITTYPE_ANGSTROM=8;let ADF_LENUNITTYPE_NANOMETER=9;let ADF_MASSUNITTYPE_UNKOWN=0;let ADF_MASSUNITTYPE_KG=1;let ADF_MASSUNITTYPE_G=2;let ADF_MASSUNITTYPE_MG=3;let ADF_MASSUNITTYPE_LBM=4;let ADF_MASSUNITTYPE_OUNCE_M=5;let ADF_MASSUNITTYPE_SLUG=6;let ADF_MASSUNITTYPE_TON_M=7;let ADF_MASSUNITTYPE_TONNE=8;let ADF_TIMEUNITTYPE_UNKOWN=0;let ADF_TIMEUNITTYPE_SEC=1;let ADF_TIMEUNITTYPE_MSEC=2;let ADF_TIMEUNITTYPE_MICRO_SEC=3;let ADF_TIMEUNITTYPE_MIN=4;let ADF_TIMEUNITTYPE_HR=5;let ADF_TIMEUNITTYPE_DAY=6;let ADF_TIMEUNITTYPE_WEEK=7;let ADF_TIMEUNITTYPE_NANOSECOND=8;let ADF_ANGUNITTYPE_UNKOWN=0;let ADF_ANGUNITTYPE_DEGREE=1;let ADF_ANGUNITTYPE_RADIAN=2;let ADF_AT_UNKNOWN=0;let ADF_AT_DIMENSION=1;let ADF_AT_NOTE=2;let ADF_AT_DATUM=3;let ADF_AT_GTOL=4;let ADF_AT_SURFFINISH=5;let ADF_AT_TECHREQU=6;let ADF_AT_SYMBOL=7;let ADF_AT_WELDFILLET=8;let ADF_AT_WELD=9;let ADF_AT_SAMEHOLE=10;let ADF_AT_SKETCH=20;let ADF_AT_COSMETIC=21;let ADF_AT_SECTIONPLANE=100
let ADF_AS_UNKNOWN=-1;let ADF_AS_ARROWHEAD=1;let ADF_AS_DOT=2;let ADF_AS_FILLEDDOT=3;let ADF_AS_NOARROW=4;let ADF_AS_CROSS=5;let ADF_AS_SLASH=6;let ADF_AS_INTEGRAL=7;let ADF_AS_BOX=8;let ADF_AS_FILLEDBOX=9;let ADF_AS_DOUBLEARROW=10;let ADF_AS_TARGET=14;let ADF_AS_LEFTHALF=15;let ADF_AS_RIGHTHALF=16;let ADF_AS_TRIANGLE=18;let ADF_AS_NOCHANGE=19
let ADF_THJT_UNKNOWN=-1;let ADF_THJT_LEFT=0;let ADF_THJT_CENTER=1;let ADF_THJT_RIGHT=2;let ADF_TVJT_TOP=0;let ADF_TVJT_MIDDLE=1;let ADF_TVJT_BOTTOM=2;let ADF_LS_STANDARD=0;let ADF_LS_ISO=1;let ADF_TD_LEFT=0;let ADF_TD_RIGHT=1;let ADF_SCENECMTTYPE_UNKOWN=0;let ADF_SCENECMTTYPE_ADVICE=1;let ADF_SCENECMTTYPE_PRAISE=2;function ADF_BBOX(){this._min=new ADF_BASEFLOAT3();this._max=new ADF_BASEFLOAT3();this.Clear=function(){this._min.Clear();this._max.Clear();}
this.Clone=function(){var newData=new ADF_BBOX();newData._min.Copy(this._min);newData._max.Copy(this._max);return newData;}
this.Copy=function(data){this._min.Copy(data._min);this._max.Copy(data._max);}}
function ADF_BSPHERE(){this._center=new ADF_BASEFLOAT3();this._radius=0;this.Clear=function(){this._center.Clear();this._radius=0;}
this.Clone=function(){var newData=new ADF_BSPHERE();newData._center.Copy(this._center);newData._radius=(this._radius);return newData;}
this.Copy=function(data){this._center.Copy(data._center);this._radius=data._radius;}}
function ADF_COORDSYSTEM(){this._vOrigin=new ADF_BASEFLOAT3();this._vAxisX=new ADF_BASEFLOAT3();this._vAxisY=new ADF_BASEFLOAT3();this.Clear=function(){this._center.Clear();this._vAxisX.Clear();this._vAxisY.Clear();}
this.Clone=function(){var newData=new ADF_COORDSYSTEM();newData._center.Copy(this._center);newData._vAxisX.Copy(this._vAxisX);newData._vAxisY.Copy(this._vAxisY);return newData;}
this.Copy=function(data){this._center.Copy(data._center);this._vAxisX.Copy(data._vAxisX);this._vAxisY.Copy(data._vAxisY);}}
function ADF_COORDSYSTEMD(){this._vOrigin=new ADF_BASEDOUBLE3();this._vAxisX=new ADF_BASEDOUBLE3();this._vAxisY=new ADF_BASEDOUBLE3();this.Clear=function(){this._center.Clear();this._vAxisX.Clear();this._vAxisY.Clear();}
this.Clone=function(){var newData=new ADF_COORDSYSTEMD();newData._center.Copy(this._center);newData._vAxisX.Copy(this._vAxisX);newData._vAxisY.Copy(this._vAxisY);return newData;}
this.Copy=function(data){this._center.Copy(data._center);this._vAxisX.Copy(data._vAxisX);this._vAxisY.Copy(data._vAxisY);}}
function ADF_PARAMETERVALU(){this._nType=ADF_PARAMT_UNKOWN;this._nValue=0;this._fValue=0.0;this._dValue=0.0;this._vFloat3Value=null;this._vDouble3Value=null;this._bValue=0.0;this._strValue='';this.Clear=function(){this._nType=ADF_PARAMT_UNKOWN;this._nValue=0;this._fValue=0.0;this._dValue=0.0;if(this._vFloat3Value!=null){this._vFloat3Value.Clear();}
if(this._vDouble3Value!=null){this._vDouble3Value.Clear();}
this._bValue=0.0;this._strValue='';}
this.Clone=function(){var newData=new ADF_PARAMETERVALU();newData._nType=this._nType;newData._nValue=this._nValue;newData._fValue=this._fValue;newData._dValue=this._dValue;if(this._vFloat3Value!=null){newData._vFloat3Value=new ADF_BASEFLOAT3();newData._vFloat3Value.Copy(this._vFloat3Value);}
if(this._vDouble3Value!=null){newData._vDouble3Value=new ADF_BASEDOUBLE3();newData._vDouble3Value.Copy(this._vDouble3Value);}
newData._bValue=this._bValue;newData._strValue=this._strValue;return newData;}
this.Copy=function(data){this._nType=data._nType;this._nValue=data._nValue;this._fValue=data._fValue;this._dValue=data._dValue;if(data._vFloat3Value!=null){if(this._vFloat3Value==null){this._vFloat3Value=new ADF_BASEFLOAT3();}
this._vFloat3Value.Copy(data._vFloat3Value);}
if(data._vDouble3Value!=null){if(this._vDouble3Value==null){this._vDouble3Value=new ADF_BASEDOUBLE3();}
this._vDouble3Value.Copy(data._vDouble3Value);}
this._bValue=data._bValue;this._strValue=data._strValue;}}
function ADF_PARAMETER(){this._strName='';this._stuValue=new ADF_PARAMETERVALU();this.Clear=function(){this._strName='';this._stuValue.Clear();}
this.Clone=function(){var newData=new ADF_PARAMETER();newData._strName=this._strName;newData._stuValue.Copy(this._stuValue);return newData;}
this.Copy=function(data){this._strName=data._strName;this._stuValue.Copy(data._stuValue);}}
function ADF_PARAMETER_SAVEDATA(){this._arrParamSaveData=new Array();this.Clear=function(){this._arrParamSaveData.splice(0,this._arrParamSaveData.length);}
this.Clone=function(){var newData=new ADF_PARAMETER_SAVEDATA();for(var i in this._arrParamSaveData){newData._arrParamSaveData[i]=this._arrParamSaveData[i];}
return newData;}
this.Copy=function(data){this._arrParamSaveData.splice(0,this._arrParamSaveData.length);for(var i in data._arrParamSaveData){this._arrParamSaveData[i]=data._arrParamSaveData[i];}}}
function ADF_TIMENODE(){this._uTimeNodeID=-1;this._nType=ADFSTNT_NULL;this._strName='';this._strNote='';this._strAudioPath='';this._strDocPath='';this._vecOtherDocName=new Array();this._uVideoFileID='';this._arrImageFileID=new Array();this._strHyperlink='';this._uStartFrameID=0;this._uFrameSize=0;this._arrSubNode=new Array();this.Clear=function(){this._uTimeNodeID=-1;this._nType=ADFSTNT_NULL;this._strName='';this._strNote='';this._strAudioPath='';this._strDocPath='';this._vecOtherDocName.splice(0,this._vecOtherDocName.length);this._uVideoFileID='';this._arrImageFileID.splice(0,this._arrImageFileID.length);this._strHyperlink='';this._uStartFrameID=0;this._uFrameSize=0;this._arrSubNode.splice(0,this._arrSubNode.length);}
this.Clone=function(){var newData=new ADF_TIMENODE();newData._uTimeNodeID=this._uTimeNodeID;newData._nType=this._nType;newData._strName=this._strName;newData._strNote=this._strNote;newData._strAudioPath=this._strAudioPath;newData._strDocPath=this._strDocPath;for(var i in this._vecOtherDocName){newData._vecOtherDocName[i]=this._vecOtherDocName[i];}
newData._uVideoFileID=this._uVideoFileID;for(var i in this._arrImageFileID){newData._arrImageFileID[i]=this._arrImageFileID[i];}
newData._strHyperlink=this._strHyperlink;newData._uStartFrameID=this._uStartFrameID;newData._uFrameSize=this._uFrameSize;for(var i in this._arrSubNode){newData._arrSubNode[i]=this._arrSubNode[i];}
return newData;}
this.Copy=function(data){this._uTimeNodeID=data._uTimeNodeID;this._nType=data._nType;this._strName=data._strName;this._strNote=data._strNote;this._strAudioPath=data._strAudioPath;this._strDocPath=data._strDocPath;this._vecOtherDocName.splice(0,this._vecOtherDocName.length);for(var i in data._vecOtherDocName){this._vecOtherDocName[i]=data._vecOtherDocName[i];}
this._uVideoFileID=data._uVideoFileID;this._arrImageFileID.splice(0,this._arrImageFileID.length);for(var i in data._arrImageFileID){this._arrImageFileID[i]=data._arrImageFileID[i];}
this._strHyperlink=data._strHyperlink;this._uStartFrameID=data._uStartFrameID;this._uFrameSize=data._uFrameSize;this._arrSubNode.splice(0,this._arrSubNode.length);for(var i in data._arrSubNode){this._arrSubNode[i]=data._arrSubNode[i];}}}
function ADF_OBJ_TREENODE(){this._uTreeNodeID=-1;this._uObjectID=-1;this._strName='';this._matTranform=new ADF_BASEMATRIX();this._arrParamData=new Array();this._arrSubNode=new Array();this.Clear=function(){this._uTreeNodeID=-1;this._uObjectID=-1;this._strName='';this._matTranform.Clear();this._arrParamData.splice(0,this._arrParamData.length);this._arrSubNode.splice(0,this._arrSubNode.length);}
this.Clone=function(){var newData=new ADF_OBJ_TREENODE();newData._uTreeNodeID=this._uTreeNodeID;newData._uObjectID=this._uObjectID;newData._strName=this._strName;newData._matTranform.Copy(this._matTranform);for(var i in this._arrParamData){newData._arrParamData[i]=this._arrParamData[i];}
for(var i in this._arrSubNode){newData._arrSubNode[i]=this._arrSubNode[i];}
return newData;}
this.Copy=function(data){this._uTreeNodeID=data._uTreeNodeID;this._uObjectID=data._uObjectID;this._strName=data._strName;this._matTranform.Copy(data._matTranform);this._arrParamData.splice(0,this._arrParamData.length);for(var i in data._arrParamData){this._arrParamData[i]=data._arrParamData[i];}
this._arrSubNode.splice(0,this._arrSubNode.length);for(var i in data._arrSubNode){this._arrSubNode[i]=data._arrSubNode[i];}}}
function ADF_ProductInfo(){this.vCenterOfMass=new ADF_BASEFLOAT3();this.dMass=0.0;this.dVolume=0.0;this.dSurfaceArea=0.0;this.Clear=function(){this.vCenterOfMass.Clear();this.dMass=0.0;this.dVolume=0.0;this.dSurfaceArea=0.0;}
this.Clone=function(){var newData=new ADF_ProductInfo();newData.vCenterOfMass.Copy(this.vCenterOfMass);newData.dMass=this.dMass;newData.dVolume=this.dVolume;newData.dSurfaceArea=this.dSurfaceArea;return newData;}
this.Copy=function(data){this.vCenterOfMass.Copy(data.vCenterOfMass);this.dMass=data.dMass;this.dVolume=data.dVolume;this.dSurfaceArea=data.dSurfaceArea;}}
function ADF_OBJ_SAVEDATA(){this._uObjectID=-1;this._uMeshID=-1;this._matLocal=new ADF_BASEMATRIX();this._matWorld=new ADF_BASEMATRIX();this._ProductInfo=new ADF_ProductInfo();this._nReverse1=0;this._nFillMode=ADFFILL_SOLID;this._nCullMode=ADFCULL_CW;this._nReverse4=0;this._arrSubsetMtlID=new Array();this._arrSubsetMtlID_Ex=new Array();this.Clear=function(){this._uObjectID=-1;this._uMeshID=-1;this._matLocal.Clear();this._matWorld.Clear();this._ProductInfo.Clear();this._nReverse1=0;this._nFillMode=ADFFILL_SOLID;this._nCullMode=ADFCULL_CW;this._nReverse4=0;this._arrSubsetMtlID.splice(0,this._arrSubsetMtlID.length);this._arrSubsetMtlID_Ex.splice(0,this._arrSubsetMtlID_Ex.length);}
this.Clone=function(){var newData=new ADF_OBJ_SAVEDATA();newData._uObjectID=this._uObjectID;newData._uMeshID=this._uMeshID;newData._matLocal.Copy(this._matLocal);newData._matWorld.Copy(this._matWorld);newData._ProductInfo.Copy(this._ProductInfo);newData._nReverse1=this._nReverse1;newData._nFillMode=this._nFillMode;newData._nCullMode=this._nCullMode;newData._nReverse4=this._nReverse4;for(var i in this._arrSubsetMtlID){newData._arrSubsetMtlID[i]=this._arrSubsetMtlID[i];}
for(var i in this._arrSubsetMtlID_Ex){newData._arrSubsetMtlID_Ex[i]=this._arrSubsetMtlID_Ex[i];}
return newData;}
this.Copy=function(data){this._uObjectID=data._uObjectID;this._uMeshID=data._uMeshID;this._matLocal.Copy(data._matLocal);this._matWorld.Copy(data._matWorld);this._ProductInfo.Copy(data._ProductInfo);this._nReverse1=data._nReverse1;this._nFillMode=data._nFillMode;this._nCullMode=data._nCullMode;this._nReverse4=data._nReverse4;this._arrSubsetMtlID.splice(0,this._arrSubsetMtlID.length);for(var i in data._arrSubsetMtlID){this._arrSubsetMtlID[i]=data._arrSubsetMtlID[i];}
this._arrSubsetMtlID_Ex.splice(0,this._arrSubsetMtlID_Ex.length);for(var i in data._arrSubsetMtlID_Ex){this._arrSubsetMtlID_Ex[i]=data._arrSubsetMtlID_Ex[i];}}}
function ADF_OBJ_SAVEDATAMGR(){this._arrObjSaveData=new Array();this.Clear=function(){this._arrObjSaveData.splice(0,this._arrObjSaveData.length);}
this.Clone=function(){var newData=new ADF_OBJ_SAVEDATAMGR();for(var i in this._arrObjSaveData){newData._arrObjSaveData[i]=this._arrObjSaveData[i];}
return newData;}
this.Copy=function(data){this._arrObjSaveData.splice(0,this._arrObjSaveData.length);for(var i in data._arrObjSaveData){this._arrObjSaveData[i]=data._arrObjSaveData[i];}}}
function ADF_MODELSUBSET_SAVEDATA(){this._nPrimitType=ADFPT_TRIANGLELIST;this._uStartIndex=0;this._uIndexCount=0;this._box=new ADF_BBOX();this._nSubsetType=ADF_MDLSUBSET_UNKOWN;this._uGeomIndex=-1;this.Clear=function(){this._nPrimitType=ADFPT_TRIANGLELIST;this._uStartIndex=0;this._uIndexCount=0;this._box.Clear();this._nSubsetType=ADF_MDLSUBSET_UNKOWN;this._uGeomIndex=-1;}
this.Clone=function(){var newData=new ADF_MODELSUBSET_SAVEDATA();newData._nPrimitType=this._nPrimitType;newData._uStartIndex=this._uStartIndex;newData._uIndexCount=this._uIndexCount;newData._box.Copy(this._box);newData._nSubsetType=this._nSubsetType;newData._nReverse4=this._nReverse4;return newData;}
this.Copy=function(data){this._nPrimitType=data._nPrimitType;this._uStartIndex=data._uStartIndex;this._uIndexCount=data._uIndexCount;this._box.Copy(data._box);this._nSubsetType=data._nSubsetType;this._uGeomIndex=data._uGeomIndex;}}
function ADF_MODEL_SAVEDATA(){this._arrVertexData=null;this._arrIndexData=null;this._arrSubset=new Array();this._arrSurface=new Array();this._arrCurve=new Array();this._box=new ADF_BBOX();this.Clear=function(){if(_arrIndexData!=null)
this._arrIndexData.splice(0,this._arrIndexData.length);this._arrSubset.splice(0,this._arrSubset.length);this._arrSurface.splice(0,this._arrSurface.length);this._arrCurve.splice(0,this._arrCurve.length);this._box.Clear();}}
function ADF_MODEL(){this._uModelID=-1;this._strModelName='';this._strModelFilePath='';this._stuModelData=new ADF_MODEL_SAVEDATA();this.Clear=function(){this._uModelID=-1;this._strModelName='';this._strModelFilePath='';this._stuModelData.Clear();}
this.Clone=function(){var newData=new ADF_MODEL();newData._uModelID=this._uModelID;newData._strModelName=this._strModelName;newData._strModelFilePath=this._strModelFilePath;newData._stuModelData.Copy(this._stuModelData);return newData;}
this.Copy=function(data){this._uModelID=data._uModelID;this._strModelName=data._strModelName;this._strModelFilePath=data._strModelFilePath;this._stuModelData.Copy(data._stuModelData);}}
function ADF_MODEL_OPINFO(){this._ModelInfo=new ADF_MODEL();this._nFileOpType=ADF_FILEOP_INVALID;this.Clear=function(){this._ModelInfo.Clear();this._nFileOpType=ADF_FILEOP_INVALID;}
this.Clone=function(){var newData=new ADF_MODEL_OPINFO();newData._ModelInfo.Copy(this._ModelInfo);newData._nFileOpType=this._nFileOpType;return newData;}
this.Copy=function(data){this._ModelInfo.Copy(data._ModelInfo);this._nFileOpType=data._nFileOpType;}}
function ADF_MATERIALPHYSICS(){this.vDiffuse=new ADF_BASEFLOAT4();this.vAmbient=new ADF_BASEFLOAT4();this.vSpecular=new ADF_BASEFLOAT4();this.vEmissive=new ADF_BASEFLOAT4();this.fPower=0;this.Clear=function(){this.vDiffuse.Clear();this.vAmbient.Clear();this.vSpecular.Clear();this.vEmissive.Clear();this.fPower=0;}
this.Clone=function(){var newData=new ADF_MATERIALPHYSICS();newData.vDiffuse.Copy(this.vDiffuse);newData.vAmbient.Copy(this.vAmbient);newData.vSpecular.Copy(this.vSpecular);newData.vEmissive.Copy(this.vEmissive);newData.fPower=this.fPower;return newData;}
this.Copy=function(data){this.vDiffuse.Copy(data.vDiffuse);this.vAmbient.Copy(data.vAmbient);this.vSpecular.Copy(data.vSpecular);this.vEmissive.Copy(data.vEmissive);this.fPower=data.fPower;}}
function ADF_MATERIAL(){this._eMtlType=ADFMTLTYPE_PHYSICS;this._mtlPhysics=new ADF_MATERIALPHYSICS();this._arrTexID=new Array();this._arrData=new Array();this.Clear=function(){this._eMtlType=ADFMTLTYPE_PHYSICS;this._mtlPhysics.Clear();this._arrTexID.splice(0,this._arrTexID.length);this._arrData.splice(0,this._arrData.length);}
this.Clone=function(){var newData=new ADF_MATERIAL();newData._eMtlType=this._eMtlType;newData._mtlPhysics.Copy(this._mtlPhysics);for(var i in this._arrTexID){newData._arrTexID[i]=this._arrTexID[i];}
for(var i in this._arrData){newData._arrData[i]=this._arrData[i];}
return newData;}
this.Copy=function(data){this._eMtlType=data._eMtlType;this._mtlPhysics.Copy(data._mtlPhysics);this._arrTexID.splice(0,this._arrTexID.length);for(var i in data._arrTexID){this._arrTexID[i]=data._arrTexID[i];}
this._arrData.splice(0,this._arrData.length);for(var i in data._arrData){this._arrData[i]=data._arrData[i];}}}
function ADF_MTL_SAVEDATA(){this._uMtlID=-1;this._strName='';this._MtlData=new ADF_MATERIAL();this.Clear=function(){this._uMtlID=-1;this._strName='';this._MtlData.Clear();}
this.Clone=function(){var newData=new ADF_MTL_SAVEDATA();newData._uMtlID=this._uMtlID;newData._strName=this._strName;newData._MtlData.Copy(this._MtlData);return newData;}
this.Copy=function(data){this._uMtlID=data._uMtlID;this._strName=data._strName;this._MtlData.Copy(data._MtlData);}}
function ADF_MTL_SAVEDATAMGR(){this._arrMtlSaveData=new Array();this.Clear=function(){this._arrMtlSaveData.splice(0,this._arrMtlSaveData.length);}
this.Clone=function(){var newData=new ADF_MTL_SAVEDATAMGR();for(var i in this._arrMtlSaveData){newData._arrMtlSaveData[i]=this._arrMtlSaveData[i];}
return newData;}
this.Copy=function(data){this._arrMtlSaveData.splice(0,this._arrMtlSaveData.length);for(var i in data._arrMtlSaveData){this._arrMtlSaveData[i]=data._arrMtlSaveData[i];}}}
function ADF_CAMERA(){this._vEyePos=new ADF_BASEFLOAT3();this._vFocus=new ADF_BASEFLOAT3();this._vUp=new ADF_BASEFLOAT3();this._fFOVY=0;this._fAspect=0;this._fZNear=0;this._fZFar=0;this.Clear=function(){this._vEyePos.Clear();this._vFocus.Clear();this._vUp.Clear();this._fAspect=0;this._fZNear=0;this._fZFar=0;}
this.Clone=function(){var newData=new ADF_CAMERA();newData._vEyePos.Copy(this._vEyePos);newData._vFocus.Copy(this._vFocus);newData._vUp.Copy(this._vUp);newData._fFOVY=this._fFOVY;newData._fAspect=this._fAspect;newData._fZNear=this._fZNear;newData._fZFar=this._fZFar;return newData;}
this.Copy=function(data){this._vEyePos.Copy(data._vEyePos);this._vFocus.Copy(data._vFocus);this._vUp.Copy(data._vUp);this._fFOVY=data._fFOVY;this._fAspect=data._fAspect;this._fZNear=data._fZNear;this._fZFar=data._fZFar;}}
function ADF_KEYFRAMEROTATION(){this._vOrigin=new ADF_BASEFLOAT3();this._vAxis=new ADF_BASEFLOAT3();this._fRotValue=0;this.Clear=function(){this._vOrigin.Clear();this._vAxis.Clear();this._fRotValue=0;}
this.Clone=function(){var newData=new ADF_KEYFRAMEROTATION();newData._vOrigin.Copy(this._vOrigin);newData._vAxis.Copy(this._vAxis);newData._fRotValue=this._fRotValue;return newData;}
this.Copy=function(data){this._vOrigin.Copy(data._vOrigin);this._vAxis.Copy(data._vAxis);this._fRotValue=data._fRotValue;}}
function ADF_KEYPARAMETER(){this._eType=ADFKFT_UNKNOWN;this._rotation=new ADF_KEYFRAMEROTATION();this._vTranslation=new ADF_BASEFLOAT3();this.Clear=function(){this._eType=ADFKFT_UNKNOWN;this._rotation.Clear();this._vTranslation.Clear();}
this.Clone=function(){var newData=new ADF_KEYPARAMETER();newData._eType=this._eType;newData._rotation.Copy(this._rotation);newData._vTranslation.Copy(this._vTranslation);return newData;}
this.Copy=function(data){this._eType=data._eType;this._rotation.Copy(data._rotation);this._vTranslation.Copy(data._vTranslation);}}
function ADF_KEYFRAME(){this._uFrameID=0;this._matStartStatus=new ADF_BASEMATRIX();this._arrLocalTransform=new Array();this._arrGlobalTransform=new Array();this.Clear=function(){this._uFrameID=0;this._matStartStatus.Clear();this._arrLocalTransform.splice(0,this._arrLocalTransform.length);this._arrGlobalTransform.splice(0,this._arrGlobalTransform.length);}
this.Clone=function(){var newData=new ADF_KEYFRAME();newData._uFrameID=this._uFrameID;newData._matStartStatus.Copy(this._matStartStatus);for(var i in this._arrLocalTransform){newData._arrLocalTransform[i]=this._arrLocalTransform[i];}
for(var i in this._arrGlobalTransform){newData._arrGlobalTransform[i]=this._arrGlobalTransform[i];}
return newData;}
this.Copy=function(data){this._uFrameID=data._uFrameID;this._matStartStatus.Copy(data._matStartStatus);this._arrLocalTransform.splice(0,this._arrLocalTransform.length);for(var i in data._arrLocalTransform){this._arrLocalTransform[i]=data._arrLocalTransform[i];}
this._arrGlobalTransform.splice(0,this._arrGlobalTransform.length);for(var i in data._arrGlobalTransform){this._arrGlobalTransform[i]=data._arrGlobalTransform[i];}}}
function ADF_CAMERA_KEYFRAME(){this._uFrameID=0;this._camera=new ADF_CAMERA();this.Clear=function(){this._uFrameID=0
this._camera.Clear();}
this.Clone=function(){var newData=new ADF_CAMERA_KEYFRAME();newData._uFrameID=this._uFrameID;newData._camera.Copy(this._camera);return newData;}
this.Copy=function(data){this._uFrameID=data._uFrameID;this._camera.Copy(data._camera);}}
function ADF_TRANSPARENCY_KEYFRAME(){this._uFrameID=0;this._fNoTransparency=0;this.Clear=function(){this._uFrameID=0
this._fNoTransparency=0}
this.Clone=function(){var newData=new ADF_TRANSPARENCY_KEYFRAME();newData._uFrameID=this._uFrameID;newData._fNoTransparency=this._fNoTransparency;return newData;}
this.Copy=function(data){this._uFrameID=data._uFrameID;this._fNoTransparency=data._fNoTransparency;}}
function ADF_OBJ_ANIM_SAVEDATA(){this._uObjectID=-1;this._arrKeyFrameData=new Array();this._arrTranspKeyFrm=new Array();this.Clear=function(){this._uObjectID=-1;this._arrKeyFrameData.splice(0,this._arrKeyFrameData.length);this._arrTranspKeyFrm.splice(0,this._arrTranspKeyFrm.length);}
this.Clone=function(){var newData=new ADF_OBJ_ANIM_SAVEDATA();newData._uObjectID=this._uObjectID;for(var i in this._arrKeyFrameData){newData._arrKeyFrameData[i]=this._arrKeyFrameData[i];}
for(var i in this._arrTranspKeyFrm){newData._arrTranspKeyFrm[i]=this._arrTranspKeyFrm[i];}
return newData;}
this.Copy=function(data){this._uObjectID=data._uObjectID;this._arrKeyFrameData.splice(0,this._arrKeyFrameData.length);for(var i in data._arrKeyFrameData){this._arrKeyFrameData[i]=data._arrKeyFrameData[i];}
this._arrTranspKeyFrm.splice(0,this._arrTranspKeyFrm.length);for(var i in data._arrTranspKeyFrm){this._arrTranspKeyFrm[i]=data._arrTranspKeyFrm[i];}}}
function ADF_ANIM_SAVEDATAMGR(){this._uFrameSize=0;this._arrObjAnimSaveData=new Array();this.Clear=function(){this._uFrameSize=0;this._arrObjAnimSaveData.splice(0,this._arrObjAnimSaveData.length);}
this.Clone=function(){var newData=new ADF_ANIM_SAVEDATAMGR();newData._uFrameSize=this._uFrameSize;for(var i in this._arrObjAnimSaveData){newData._arrObjAnimSaveData[i]=this._arrObjAnimSaveData[i];}
return newData;}
this.Copy=function(data){this._uFrameSize=data._uFrameSize;this._arrObjAnimSaveData.splice(0,this._arrObjAnimSaveData.length);for(var i in data._arrObjAnimSaveData){this._arrObjAnimSaveData[i]=data._arrObjAnimSaveData[i];}}}
function ADF_CAMERA_SAVEDATAMGR(){this._DefaultCamera=new ADF_CAMERA();this._arrCameraAnimSaveData=new Array();this.Clear=function(){this._DefaultCamera.Clear();this._arrCameraAnimSaveData.splice(0,this._arrCameraAnimSaveData.length);}
this.Clone=function(){var newData=new ADF_CAMERA_SAVEDATAMGR();newData._DefaultCamera.Copy(this._DefaultCamera);for(var i in this._arrCameraAnimSaveData){newData._arrCameraAnimSaveData[i]=this._arrCameraAnimSaveData[i];}
return newData;}
this.Copy=function(data){this._DefaultCamera.Copy(data._DefaultCamera);this._arrCameraAnimSaveData.splice(0,this._arrCameraAnimSaveData.length);for(var i in data._arrCameraAnimSaveData){this._arrCameraAnimSaveData[i]=data._arrCameraAnimSaveData[i];}}}
function ADF_SCENE_UNIT(){this._nLengthUnit=ADF_LENUNITTYPE_UNKOWN;this._nMassUnit=ADF_MASSUNITTYPE_UNKOWN;;this._nTimeUnit=ADF_TIMEUNITTYPE_UNKOWN;this.Clear=function(){this._nLengthUnit=ADF_LENUNITTYPE_UNKOWN;this._nMassUnit=ADF_MASSUNITTYPE_UNKOWN;this._nTimeUnit=ADF_TIMEUNITTYPE_UNKOWN;}
this.Clone=function(){var newData=new ADF_SCENE_UNIT();newData._nLengthUnit=this._nLengthUnit;newData._nMassUnit=this._nMassUnit;newData._nTimeUnit=this._nTimeUnit;return newData;}
this.Copy=function(data){this._nLengthUnit=data._nLengthUnit;this._nMassUnit=data._nMassUnit;this._nTimeUnit=data._nTimeUnit;}}
function ADF_ResFileInfo(){this.uResID=-1;this.nType=ADF_FILE_UNKOWN;;this.strFileName='';this.Clear=function(){this.uResID=-1;this.nType=ADF_FILE_UNKOWN;;this.strFileName='';}
this.Clone=function(){var newData=new ADF_ResFileInfo();newData.uResID=this.uResID;newData.nType=this.nType;newData.strFileName=this.strFileName;return newData;}
this.Copy=function(data){this.uResID=data.uResID;this.nType=data.nType;this.strFileName=data.strFileName;}}
function ADF_FILE_OPINFO(){this._FileInfo=new ADF_ResFileInfo();this._nFileOpType=ADF_FILEOP_INVALID;this.Clear=function(){this._FileInfo.Clear();this._nFileOpType=ADF_FILEOP_INVALID;}
this.Clone=function(){var newData=new ADF_FILE_OPINFO();newData._FileInfo.Copy(this._FileInfo);newData._nFileOpType=this._nFileOpType;return newData;}
this.Copy=function(data){this._FileInfo.Copy(data._FileInfo);this._nFileOpType=data._nFileOpType;}}
function CleStreamResFileInfo(){this._name='';this._size=0;this._reserve=0;}
function ADF_CONFIG_SAVEDATA(){this._nCameraProjectType=ADFCP_PERSPECTIVE;this._nCoordsType=ADFCST_RIGHTHAND;;this._nSceneUpType=ADFCUT_Y;this._stuSceneUnit=new ADF_SCENE_UNIT();this.Clear=function(){this._nCameraProjectType=ADFCP_PERSPECTIVE;this._nCoordsType=ADFCST_RIGHTHAND;;this._nSceneUpType=ADFCUT_Y;this._stuSceneUnit.Clear();}
this.Clone=function(){var newData=new ADF_CONFIG_SAVEDATA();newData._nCameraProjectType=this._nCameraProjectType;newData._nCoordsType=this._nCoordsType;newData._nSceneUpType=this._nSceneUpType;newData._stuSceneUnit.Copy(this._stuSceneUnit);return newData;}
this.Copy=function(data){this._nCameraProjectType=data._nCameraProjectType;this._nCoordsType=data._nCoordsType;this._nSceneUpType=data._nSceneUpType;this._stuSceneUnit.Copy(data._stuSceneUnit);}}
function ADF_SCENEDATA(){this.arrModelData=new Array();this.stuObjTreeTopNode=new ADF_OBJ_TREENODE();this.stuObjSaveDataMgr=new ADF_OBJ_SAVEDATAMGR();this.stuMtlSaveDataMgr=new ADF_MTL_SAVEDATAMGR();this.stuAnimSaveDataMgr=new ADF_ANIM_SAVEDATAMGR();this.stuCameraSaveDataMgr=new ADF_CAMERA_SAVEDATAMGR();this.stuConfig=new ADF_CONFIG_SAVEDATA();this.stuTimeNodeTreeTop=new ADF_TIMENODE();this.stuSceneParam=new ADF_PARAMETER_SAVEDATA();this.arrImageFile=new Array();this.arrAudioFile=new Array();this.arrResFile=new Array();this.Clear=function(){this.arrModelData.splice(0,this.arrModelData.length);this.stuObjTreeTopNode.Clear();this.stuObjSaveDataMgr.Clear();this.stuMtlSaveDataMgr.Clear();this.stuAnimSaveDataMgr.Clear();this.stuCameraSaveDataMgr.Clear();this.stuConfig.Clear();this.stuTimeNodeTreeTop.Clear();this.stuSceneParam.Clear();this.arrImageFile.splice(0,this.arrImageFile.length);this.arrAudioFile.splice(0,this.arrAudioFile.length);this.arrResFile.splice(0,this.arrResFile.length);}}