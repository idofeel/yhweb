var RealMinPoint3=new Point3(0,0,0);var ObjectMin=new Point3(0,0,0);var ObjectMax=new Point3(0,0,0);var objectMat=mat4.create();function Scene2GLData(){var partSet=GetSVZPartSet();var matertalSet=GetSVZMaterialSet();var objectSet=new GL_OBJECTSET();var modelTreeTopNode=GetModelTreeData(g_sceneData.stuObjTreeTopNode,objectSet);objectSet._uFrameSize=GetAnimFrameSize();var camera=GetAnimCameraData();var modelBox=getModelBox(objectSet,partSet);var modelLen=getModelBoxLength(modelBox);var modelCenter=new Point3(0,0,0);getModelBoxCenter(modelBox,modelCenter);var defEyePos=new Point3(0,0,0);var defUpAxis=new Point3(0,0,0);getModelDefEyePos(modelBox,defEyePos,defUpAxis);var bgImageData=GetDefaultBgImg();var annotSet=new GL_ANNOTATION();getAnnotationData(g_sceneData.arrComment,annotSet);g_sceneData.Clear();g_sceneData=null;g_cleParser=null;return{GLObjectSet:objectSet,GLPartSet:partSet,GLMatertalSet:matertalSet,GLModelTreeNode:modelTreeTopNode,GLCamera:camera,GLModelBox:modelBox,GLModelLength:modelLen,GLModelCenter:modelCenter,GLDefEyePos:defEyePos,GLDefUpAxis:defUpAxis,GLBgImageData:bgImageData,GLAnnotData:annotSet,};}
function TestCube(){var Cube=DefaultData.Cube();var CubeLODPart=new GL_PARTLODDATA();CubeLODPart._arrVertex=Cube.vertex;CubeLODPart._arrSurfaceVertexNum=Cube.surfaceVertexNum;var CubePart=new GL_PART();CubePart._arrPartLODData.push(CubeLODPart);var partSet=new GL_PARTSET();partSet._arrPartSet.push(CubePart);var matertalSet=new GL_MATERIALSET();matertalSet._arrMaterialSet.push(DefaultData.DefaultMaterial());matertalSet._arrMaterialSet.push(DefaultData.Pink());matertalSet._arrMaterialSet.push(DefaultData.Green());var object1=new GL_OBJECT();object1._uPartIndex=0;object1._arrSurfaceMaterialIndex.push(0);object1._arrSurfaceMaterialIndex.push(1);object1._arrSurfaceMaterialIndex.push(2);object1._arrSurfaceMaterialIndex.push(0);object1._arrSurfaceMaterialIndex.push(1);object1._arrSurfaceMaterialIndex.push(2);object1._uObjectVertexNum=36;var object2=new GL_OBJECT();object2._uPartIndex=0;object2._arrSurfaceMaterialIndex.push(1);object2._arrSurfaceMaterialIndex.push(1);object2._arrSurfaceMaterialIndex.push(1);object2._arrSurfaceMaterialIndex.push(1);object2._arrSurfaceMaterialIndex.push(1);object2._arrSurfaceMaterialIndex.push(1);object2._uObjectVertexNum=36;var matTmp=mat4.create();var trans=vec3.create();trans[0]=-2;trans[2]=-2;object2._matObject=mat4.translate(matTmp,object2._matObject,trans);var objectSet=new GL_OBJECTSET();objectSet._arrObjectSet.push(object1);objectSet._arrObjectSet.push(object2);return{GLObjectSet:objectSet,GLPartSet:partSet,GLMatertalSet:matertalSet,};}
function GetSVZMaterialSet(){var GLMatertalSet=new GL_MATERIALSET();for(let i=0;i<g_sceneData.stuMtlSaveDataMgr._arrMtlSaveData.length;i++){GLMatertalSet._arrMaterialSet.push(g_sceneData.stuMtlSaveDataMgr._arrMtlSaveData[i]._MtlData);}
GLMatertalSet._arrMaterialSet.push(DefaultData.Red());GLMatertalSet._arrMaterialSet.push(DefaultData.Brightgreen());GLMatertalSet._arrMaterialSet.push(DefaultData.Blue());GLMatertalSet._arrMaterialSet.push(DefaultData.Yellow());GLMatertalSet._arrMaterialSet.push(DefaultData.Pink());GLMatertalSet._arrMaterialSet.push(DefaultData.CyanGreen());GLMatertalSet._arrMaterialSet.push(DefaultData.Black());GLMatertalSet._arrMaterialSet.push(DefaultData.White());GLMatertalSet._arrMaterialSet.push(DefaultData.Grey());GLMatertalSet._arrMaterialSet.push(DefaultData.DarkRed());GLMatertalSet._arrMaterialSet.push(DefaultData.Green());GLMatertalSet._arrMaterialSet.push(DefaultData.DarkBlue());GLMatertalSet._arrMaterialSet.push(DefaultData.DarkYellow());GLMatertalSet._arrMaterialSet.push(DefaultData.Violet());GLMatertalSet._arrMaterialSet.push(DefaultData.CyanBlue());GetTextureMtlByUrl(GLMatertalSet);return GLMatertalSet;}
function GetSVZPartSet(){let GLPartSet=new GL_PARTSET();let uMaxLevel=1;for(let i=0;i<g_sceneData.arrModelData.length;i++){let tempGLPart=new GL_PART();tempGLPart._arrPartLODData[0]=GetSVZPartData(g_sceneData.arrModelData[i]._ModelInfo._stuModelData,0,0.0);GLPartSet._arrPartSet.push(tempGLPart);}
return GLPartSet;}
function GetModelTreeData(ObjectTreeNode,GLObjectSet){let GLModelTreeNode=new GL_MODELTREENODE();GLModelTreeNode._uTreeNodeID=ObjectTreeNode._uTreeNodeID;GLModelTreeNode._strName=ObjectTreeNode._strName;for(let i=0;i<ObjectTreeNode._arrParamData.length;i++){let nodeParameter=new GL_NODEPARAMETER();nodeParameter._strName=ObjectTreeNode._arrParamData[i]._strName;let strParameterValue;switch(ObjectTreeNode._arrParamData[i]._stuValue._nType){case ADF_PARAMT_INT:strParameterValue=ObjectTreeNode._arrParamData[i]._stuValue._nValue.toString();break;case ADF_PARAMT_FLOAT:strParameterValue=ObjectTreeNode._arrParamData[i]._stuValue._fValue.toString();break;case ADF_PARAMT_DOUBLE:strParameterValue=ObjectTreeNode._arrParamData[i]._stuValue._dValue.toString();break;case ADF_PARAMT_FLOAT3:strParameterValue=ObjectTreeNode._arrParamData[i]._stuValue._vFloat3Value.x.toString()+" "
+ObjectTreeNode._arrParamData[i]._stuValue._vFloat3Value.y.toString()+" "
+ObjectTreeNode._arrParamData[i]._stuValue._vFloat3Value.z.toString();break;case ADF_PARAMT_DOUBLE3:strParameterValue=ObjectTreeNode._arrParamData[i]._stuValue._vDouble3Value.x.toString()+" "
+ObjectTreeNode._arrParamData[i]._stuValue._vDouble3Value.y.toString()+" "
+ObjectTreeNode._arrParamData[i]._stuValue._vDouble3Value.z.toString();break;case ADF_PARAMT_BOOL:strParameterValue=ObjectTreeNode._arrParamData[i]._stuValue._bValue.toString();break;case ADF_PARAMT_STRING:strParameterValue=ObjectTreeNode._arrParamData[i]._stuValue._strValue;break;}
nodeParameter._strValue=strParameterValue;GLModelTreeNode._arrNodeParameters.push(nodeParameter);}
if(ObjectTreeNode._arrSubNode.length<1){let GLObject=GetObjectData(ObjectTreeNode._uObjectID);if(GLObject!=null){GLObjectSet._arrObjectSet.push(GLObject);GLModelTreeNode._uObjectIndex=GLObjectSet._arrObjectSet.length-1;GLModelTreeNode._uObjectTriangleCount=GLObject._uObjectVertexNum/3;if(GLObject._nFillMode==ADFFILL_INVISIBLE){GLModelTreeNode._bVisibleOriginal=false;GLModelTreeNode._bVisible=false;}}else{GLModelTreeNode._bVisibleOriginal=false;GLModelTreeNode._bVisible=false;}}else{let uTriangleCount=0;let bIsvisible=false;for(let i=0;i<ObjectTreeNode._arrSubNode.length;i++){let subTreeNode=GetModelTreeData(ObjectTreeNode._arrSubNode[i],GLObjectSet);uTriangleCount+=subTreeNode._uObjectTriangleCount;GLModelTreeNode._arrSubNode.push(subTreeNode);if(subTreeNode._bVisibleOriginal){bIsvisible=true;}}
GLModelTreeNode._uObjectTriangleCount=uTriangleCount;if(!bIsvisible){GLModelTreeNode._bVisibleOriginal=false;GLModelTreeNode._bVisible=false;}}
return GLModelTreeNode;}
function GetAnimCameraData(){let GL_Camera=new GL_CAMERA();GL_Camera.Copy(g_sceneData.stuCameraSaveDataMgr)
return GL_Camera;}
function GetAnimFrameSize(){if(g_sceneData.stuAnimSaveDataMgr._arrObjAnimSaveData.length>0||g_sceneData.stuCameraSaveDataMgr._arrCameraAnimSaveData.length>0){return g_sceneData.stuAnimSaveDataMgr._uFrameSize;}else{return 0;}}
function GetSVZPartData(modelData,uLevel,fZDist){let GL_PartLODData=new GL_PARTLODDATA();GL_PartLODData._uLevel=uLevel;GL_PartLODData._fZDist=fZDist;this.CalGLBox(modelData._box,GL_PartLODData._boxset._ObjectBox);GL_PartLODData._arrSubsetPrimitType=new Array(modelData._arrSubset.length);GL_PartLODData._uIsUV=modelData._uIsUV;GL_PartLODData._arrVertex=modelData._arrVertexData;for(let j=0;j<modelData._arrSubset.length;j++){if(modelData._arrSubset[j]._nPrimitType==ADFPT_TRIANGLELIST){GL_PartLODData._arrSubsetPrimitType[j]=ADFPT_TRIANGLELIST;GL_PartLODData._arrSurfaceVertexNum.push(modelData._arrSubset[j]._uIndexCount);let tmpBox=new GL_Box();this.CalGLBox(modelData._arrSubset[j]._box,tmpBox);GL_PartLODData._boxset._SurfaceBoxes.push(tmpBox);}}
for(let j=0;j<modelData._arrSubset.length;j++){if(modelData._arrSubset[j]._nPrimitType==ADFPT_LINELIST){GL_PartLODData._arrSubsetPrimitType[j]=ADFPT_LINELIST;GL_PartLODData._arrCurveVertexNum.push(modelData._arrSubset[j]._uIndexCount);let tmpBox=new GL_Box();this.CalGLBox(modelData._arrSubset[j]._box,tmpBox);GL_PartLODData._boxset._SurfaceBoxes.push(tmpBox);}}
return GL_PartLODData;}
function CalGLBox(ModelBox,gl_box){gl_box._Vertex[0].x=ModelBox._min.x;gl_box._Vertex[0].y=ModelBox._min.y;gl_box._Vertex[0].z=ModelBox._min.z;gl_box._Vertex[1].x=ModelBox._min.x;gl_box._Vertex[1].y=ModelBox._max.y;gl_box._Vertex[1].z=ModelBox._min.z;gl_box._Vertex[2].x=ModelBox._min.x;gl_box._Vertex[2].y=ModelBox._min.y;gl_box._Vertex[2].z=ModelBox._max.z;gl_box._Vertex[3].x=ModelBox._min.x;gl_box._Vertex[3].y=ModelBox._max.y;gl_box._Vertex[3].z=ModelBox._max.z;gl_box._Vertex[4].x=ModelBox._max.x;gl_box._Vertex[4].y=ModelBox._min.y;gl_box._Vertex[4].z=ModelBox._min.z;gl_box._Vertex[5].x=ModelBox._max.x;gl_box._Vertex[5].y=ModelBox._max.y;gl_box._Vertex[5].z=ModelBox._min.z;gl_box._Vertex[6].x=ModelBox._max.x;gl_box._Vertex[6].y=ModelBox._min.y;gl_box._Vertex[6].z=ModelBox._max.z;gl_box._Vertex[7].x=ModelBox._max.x;gl_box._Vertex[7].y=ModelBox._max.y;gl_box._Vertex[7].z=ModelBox._max.z;}
function GetObjectData(ObjectID){let uMdlIndex=-1,nObjIndex=-1;for(let i=0;i<g_sceneData.stuObjSaveDataMgr._arrObjSaveData.length;++i){if(g_sceneData.stuObjSaveDataMgr._arrObjSaveData[i]._uObjectID==ObjectID){nObjIndex=i;break;}}
if(nObjIndex==-1){return null;}
for(let j=0;j<g_sceneData.arrModelData.length;j++){if(g_sceneData.arrModelData[j]._ModelInfo._uModelID==g_sceneData.stuObjSaveDataMgr._arrObjSaveData[nObjIndex]._uMeshID){uMdlIndex=j;break;}}
let nValidModel=0;let bContainSurfacfe=false,bContainCurve=false;if(uMdlIndex!=-1){nValidModel++;if(g_sceneData.arrModelData[uMdlIndex]._ModelInfo._stuModelData._arrVertexData.length==0||g_sceneData.arrModelData[uMdlIndex]._ModelInfo._stuModelData._arrIndexData.length==0||g_sceneData.arrModelData[uMdlIndex]._ModelInfo._stuModelData._arrSubset.length==0){nValidModel--;}
if(nValidModel!=0){for(let i=0;i<g_sceneData.arrModelData[uMdlIndex]._ModelInfo._stuModelData._arrSubset.length;i++){if(g_sceneData.arrModelData[uMdlIndex]._ModelInfo._stuModelData._arrSubset[i]._nPrimitType==ADFPT_TRIANGLELIST){bContainSurfacfe=true;}else if(g_sceneData.arrModelData[uMdlIndex]._ModelInfo._stuModelData._arrSubset[i]._nPrimitType==ADFPT_LINELIST){bContainCurve=true;}}
if(bContainSurfacfe&&bContainCurve){nValidModel--;}}}
if(nValidModel==0){return null;}
let GL_Object=new GL_OBJECT();GL_Object._uObjectID=g_sceneData.stuObjSaveDataMgr._arrObjSaveData[nObjIndex]._uObjectID;if(bContainCurve){GL_Object._uPrimitType=ADFPT_LINELIST;}
GL_Object._uPartIndex=uMdlIndex;for(let i=0;i<g_sceneData.stuObjSaveDataMgr._arrObjSaveData[nObjIndex]._arrSubsetMtlID.length;i++)
{let unMaterialID=g_sceneData.stuObjSaveDataMgr._arrObjSaveData[nObjIndex]._arrSubsetMtlID[i];if(unMaterialID>=100&&unMaterialID<=114){let defalutMaterialIndex=(unMaterialID-100)+g_sceneData.stuMtlSaveDataMgr._arrMtlSaveData.length;GL_Object._arrSurfaceMaterialIndex.push(defalutMaterialIndex);continue;}
let j=0;for(;j<g_sceneData.stuMtlSaveDataMgr._arrMtlSaveData.length;j++){if(g_sceneData.stuMtlSaveDataMgr._arrMtlSaveData[j]._uMtlID==unMaterialID){GL_Object._arrSurfaceMaterialIndex.push(j);break;}}
if(j>=g_sceneData.stuMtlSaveDataMgr._arrMtlSaveData.length){GL_Object._arrSurfaceMaterialIndex.push(-1);}}
if(GL_Object._arrSurfaceMaterialIndex.length==0){GL_Object._arrSurfaceMaterialIndex.push(-1);}
GL_Object._nFillMode=g_sceneData.stuObjSaveDataMgr._arrObjSaveData[nObjIndex]._nFillMode;GL_Object._nCullMode=g_sceneData.stuObjSaveDataMgr._arrObjSaveData[nObjIndex]._nCullMode;let uTriNum=0;for(let j=0;j<g_sceneData.arrModelData[uMdlIndex]._ModelInfo._stuModelData._arrSubset.length;j++){if(g_sceneData.arrModelData[uMdlIndex]._ModelInfo._stuModelData._arrSubset[j]._nPrimitType==ADFPT_TRIANGLELIST){continue;}
uTriNum+=g_sceneData.arrModelData[uMdlIndex]._ModelInfo._stuModelData._arrSubset[j]._uIndexCount;}
GL_Object._uObjectVertexNum=uTriNum;GL_Object._matLocal.Copy(g_sceneData.stuObjSaveDataMgr._arrObjSaveData[nObjIndex]._matLocal);GL_Object._matWorld.Copy(g_sceneData.stuObjSaveDataMgr._arrObjSaveData[nObjIndex]._matWorld);for(let i=0;i<g_sceneData.stuAnimSaveDataMgr._arrObjAnimSaveData.length;i++){if(g_sceneData.stuAnimSaveDataMgr._arrObjAnimSaveData[i]._uObjectID==ObjectID){GL_Object._objectAnim.Copy(g_sceneData.stuAnimSaveDataMgr._arrObjAnimSaveData[i]);break;}}
GL_Object.GetObjectMat();return GL_Object;}
function getModelBox(objectSet,partSet){let m_ModelBox=new GL_Box();let min_x=Infinity,min_y=Infinity,min_z=Infinity;let max_x=-Infinity,max_y=-Infinity,max_z=-Infinity;for(let i=0;i<objectSet._arrObjectSet.length;i++){let uCurPartIndex=objectSet._arrObjectSet[i]._uPartIndex;partSet._arrPartSet[uCurPartIndex]._arrPartLODData[0]._boxset._ObjectBox.MinVertex(ObjectMin);objectSet._arrObjectSet[i].GetAnimMatrix(0,objectMat);CalTranslatePoint(ObjectMin.x,ObjectMin.y,ObjectMin.z,objectMat,RealMinPoint3);ObjectMin.x=RealMinPoint3.x;ObjectMin.y=RealMinPoint3.y;ObjectMin.z=RealMinPoint3.z;partSet._arrPartSet[uCurPartIndex]._arrPartLODData[0]._boxset._ObjectBox.MaxVertex(ObjectMax);CalTranslatePoint(ObjectMax.x,ObjectMax.y,ObjectMax.z,objectMat,RealMinPoint3);ObjectMax.x=RealMinPoint3.x;ObjectMax.y=RealMinPoint3.y;ObjectMax.z=RealMinPoint3.z;if(ObjectMin.x<min_x){min_x=ObjectMin.x;}
if(ObjectMin.y<min_y){min_y=ObjectMin.y;}
if(ObjectMin.z<min_z){min_z=ObjectMin.z;}
if(ObjectMax.x>max_x){max_x=ObjectMax.x;}
if(ObjectMax.y>max_y){max_y=ObjectMax.y;}
if(ObjectMax.z>max_z){max_z=ObjectMax.z;}}
m_ModelBox._Vertex[0].x=min_x,m_ModelBox._Vertex[0].y=min_y,m_ModelBox._Vertex[0].z=min_z;m_ModelBox._Vertex[1].x=min_x,m_ModelBox._Vertex[1].y=max_y,m_ModelBox._Vertex[1].z=min_z;m_ModelBox._Vertex[2].x=min_x,m_ModelBox._Vertex[2].y=min_y,m_ModelBox._Vertex[2].z=max_z;m_ModelBox._Vertex[3].x=min_x,m_ModelBox._Vertex[3].y=max_y,m_ModelBox._Vertex[3].z=max_z;m_ModelBox._Vertex[4].x=max_x,m_ModelBox._Vertex[4].y=min_y,m_ModelBox._Vertex[4].z=min_z;m_ModelBox._Vertex[5].x=max_x,m_ModelBox._Vertex[5].y=max_y,m_ModelBox._Vertex[5].z=min_z;m_ModelBox._Vertex[6].x=max_x,m_ModelBox._Vertex[6].y=min_y,m_ModelBox._Vertex[6].z=max_z;m_ModelBox._Vertex[7].x=max_x,m_ModelBox._Vertex[7].y=max_y,m_ModelBox._Vertex[7].z=max_z;return m_ModelBox;}
function getPublicModelBox(objectSet,partSet,indexs,objectMatrixs){let m_ModelBox=new GL_Box();let min_x=Infinity,min_y=Infinity,min_z=Infinity;let max_x=-Infinity,max_y=-Infinity,max_z=-Infinity;let tmpMinX=Infinity,tmpMinY=Infinity,tmpMinZ=Infinity;let tmpMaxX=-Infinity,tmpMaxY=-Infinity,tmpMaxZ=-Infinity;for(let i=0;i<indexs.length;i++){let uCurPartIndex=objectSet._arrObjectSet[indexs[i]]._uPartIndex;partSet._arrPartSet[uCurPartIndex]._arrPartLODData[0]._boxset._ObjectBox.MinVertex(ObjectMin);CalTranslatePoint(ObjectMin.x,ObjectMin.y,ObjectMin.z,objectMatrixs[indexs[i]],RealMinPoint3);ObjectMin.x=RealMinPoint3.x;ObjectMin.y=RealMinPoint3.y;ObjectMin.z=RealMinPoint3.z;partSet._arrPartSet[uCurPartIndex]._arrPartLODData[0]._boxset._ObjectBox.MaxVertex(ObjectMax);CalTranslatePoint(ObjectMax.x,ObjectMax.y,ObjectMax.z,objectMatrixs[indexs[i]],RealMinPoint3);ObjectMax.x=RealMinPoint3.x;ObjectMax.y=RealMinPoint3.y;ObjectMax.z=RealMinPoint3.z;tmpMinX=Math.min(ObjectMin.x,ObjectMax.x);tmpMinY=Math.min(ObjectMin.y,ObjectMax.y);tmpMinZ=Math.min(ObjectMin.z,ObjectMax.z);tmpMaxX=Math.max(ObjectMin.x,ObjectMax.x);tmpMaxY=Math.max(ObjectMin.y,ObjectMax.y);tmpMaxZ=Math.max(ObjectMin.z,ObjectMax.z);if(tmpMinX<min_x){min_x=tmpMinX;}
if(tmpMinY<min_y){min_y=tmpMinY;}
if(tmpMinZ<min_z){min_z=tmpMinZ;}
if(tmpMaxX>max_x){max_x=tmpMaxX;}
if(tmpMaxY>max_y){max_y=tmpMaxY;}
if(tmpMaxZ>max_z){max_z=tmpMaxZ;}}
m_ModelBox._Vertex[0].x=min_x,m_ModelBox._Vertex[0].y=min_y,m_ModelBox._Vertex[0].z=min_z;m_ModelBox._Vertex[1].x=min_x,m_ModelBox._Vertex[1].y=max_y,m_ModelBox._Vertex[1].z=min_z;m_ModelBox._Vertex[2].x=min_x,m_ModelBox._Vertex[2].y=min_y,m_ModelBox._Vertex[2].z=max_z;m_ModelBox._Vertex[3].x=min_x,m_ModelBox._Vertex[3].y=max_y,m_ModelBox._Vertex[3].z=max_z;m_ModelBox._Vertex[4].x=max_x,m_ModelBox._Vertex[4].y=min_y,m_ModelBox._Vertex[4].z=min_z;m_ModelBox._Vertex[5].x=max_x,m_ModelBox._Vertex[5].y=max_y,m_ModelBox._Vertex[5].z=min_z;m_ModelBox._Vertex[6].x=max_x,m_ModelBox._Vertex[6].y=min_y,m_ModelBox._Vertex[6].z=max_z;m_ModelBox._Vertex[7].x=max_x,m_ModelBox._Vertex[7].y=max_y,m_ModelBox._Vertex[7].z=max_z;return m_ModelBox;}
function getModelBoxLength(modelBox){let fLen=-Infinity;let max_x_len=Math.abs(modelBox._Vertex[7].x-modelBox._Vertex[0].x);let max_y_len=Math.abs(modelBox._Vertex[7].y-modelBox._Vertex[0].y);let max_z_len=Math.abs(modelBox._Vertex[7].z-modelBox._Vertex[0].z);if(max_x_len>fLen){fLen=max_x_len;}
if(max_y_len>fLen){fLen=max_y_len;}
if(max_z_len>fLen){fLen=max_z_len;}
let fBoxLen=fLen/2/Math.tan(45.0*Math.PI/2.0/180.0);return fBoxLen;}
function getModelBoxCenter(modelBox,center){center.x=(modelBox._Vertex[7].x+modelBox._Vertex[0].x)/2;center.y=(modelBox._Vertex[7].y+modelBox._Vertex[0].y)/2;center.z=(modelBox._Vertex[7].z+modelBox._Vertex[0].z)/2;}
function getModelBoxLength(modelBox){let max_x_len=Math.abs(modelBox._Vertex[7].x-modelBox._Vertex[0].x);let max_y_len=Math.abs(modelBox._Vertex[7].y-modelBox._Vertex[0].y);let max_z_len=Math.abs(modelBox._Vertex[7].z-modelBox._Vertex[0].z);let fLen=-Infinity;if(max_x_len>fLen){fLen=max_x_len;}
if(max_y_len>fLen){fLen=max_y_len;}
if(max_z_len>fLen){fLen=max_z_len;}
return fLen;}
function getModelDefEyePos(modelBox,eye,up){let fLen=getModelBoxLength(modelBox);let dis=fLen/2/Math.tan(45.0*Math.PI/2.0/180.0);let defaultCameraAxis=GetDefaultCameraAxis();if(defaultCameraAxis.GLSceneUpType==GL_SCENEUPTYPEX){if(defaultCameraAxis.GLUpAxisNegative){eye.x=0.0,eye.y=0.0,eye.z=dis;up.x=-1.0,up.y=0.0,up.z=0.0;}else{eye.x=0.0,eye.y=0.0,eye.z=dis;up.x=1.0,up.y=0.0,up.z=0.0;}}else if(defaultCameraAxis.GLSceneUpType==GL_SCENEUPTYPEY){if(defaultCameraAxis.GLUpAxisNegative){eye.x=0.0,eye.y=0.0,eye.z=-dis;up.x=0.0,up.y=-1.0,up.z=0.0;}else{eye.x=0.0,eye.y=0.0,eye.z=dis;up.x=0.0,up.y=1.0,up.z=0.0;}}else if(defaultCameraAxis.GLSceneUpType==GL_SCENEUPTYPEZ){if(defaultCameraAxis.GLUpAxisNegative){eye.x=0.0,eye.y=dis,eye.z=0.0;up.x=0.0,up.y=0.0,up.z=-1.0;}else{eye.x=0.0,eye.y=-dis,eye.z=0.0;up.x=0.0,up.y=0.0,up.z=1.0;}}}
function getAnnotationData(arrComment,annotSet){for(let i=0;i<arrComment.length;i++){annotSet._arrComment.push(arrComment[i].Clone());}
for(let i=0;i<arrComment.length;i++){ConvertCommetText(annotSet._arrComment[i]);}}
function GetDefaultBgImg(){var imageData=[-1,-1,-1];let image0=new Image();image0.onload=function(){imageData[0]=getTexImage(image0,true);}
image0.src=bgImage[0];let image1=new Image();image1.onload=function(){imageData[1]=getTexImage(image1,true);}
image1.src=bgImage[1];let image2=new Image();image2.onload=function(){imageData[2]=getTexImage(image2,true);}
image2.src=bgImage[2];return imageData;}
function GetTextureMtlByUrl(GLMatertalSet){for(let i=0;i<g_sceneData.arrImageFile.length;i++){let nCurImageID=g_sceneData.arrImageFile[i]._FileInfo.uResID;let curTexMaterial=new Array();for(let j=0;j<GLMatertalSet._arrMaterialSet.length;j++){if(GLMatertalSet._arrMaterialSet[j]._eMtlType==ADFMTLTYPE_PICTURE){for(let k=0;k<GLMatertalSet._arrMaterialSet[j]._arrTexID.length;k++){if(GLMatertalSet._arrMaterialSet[j]._arrTexID[k]==nCurImageID){curTexMaterial.push(j);}}}}
if(curTexMaterial.length>0){let curImageName=g_sceneData.arrImageFile[i]._FileInfo.strFileName;for(let j=0;j<g_sceneData.arrResFile.length;j++){if(g_sceneData.arrResFile[j]._name==curImageName){let image=null;let texID=null;if(g_sceneData.arrResFile[j]._imageData!=null){image=g_sceneData.arrResFile[j];texID=getTexImage(image,false);for(let k=0;k<curTexMaterial.length;k++){GLMatertalSet._arrMaterialSet[curTexMaterial[k]]._arrTexID[0]=texID;}}else{image=new Image();image.onload=function(){texID=getTexImage(image,true);for(let k=0;k<curTexMaterial.length;k++){GLMatertalSet._arrMaterialSet[curTexMaterial[k]]._arrTexID[0]=texID;}}
image.src=g_strResbaseUrl+curImageName;}
break;}}}}}
function getTexImage(image,isUrl){gl.activeTexture(gl.TEXTURE0);let uTexID=gl.createTexture();gl.bindTexture(gl.TEXTURE_2D,uTexID);gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MIN_FILTER,gl.LINEAR);gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MAG_FILTER,gl.LINEAR);if(isWebgl2){gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_WRAP_S,gl.REPEAT);gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_WRAP_T,gl.REPEAT);}else{gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_WRAP_S,gl.CLAMP_TO_EDGE);gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_WRAP_T,gl.CLAMP_TO_EDGE);}
gl.pixelStorei(gl.UNPACK_ALIGNMENT,1);if(isWebgl2){gl.pixelStorei(gl.UNPACK_ROW_LENGTH,0);gl.pixelStorei(gl.UNPACK_SKIP_PIXELS,0);gl.pixelStorei(gl.UNPACK_SKIP_ROWS,0);}
if(isUrl){gl.texImage2D(gl.TEXTURE_2D,0,gl.RGB,gl.RGB,gl.UNSIGNED_BYTE,image);}else{gl.texImage2D(gl.TEXTURE_2D,0,gl.RGB,image._imageWidth,image._imageHeight,0,gl.RGB,gl.UNSIGNED_BYTE,image._imageData);}
return uTexID;}
function GetDefaultCameraAxis(){let nUp=1,bNeg=false;if(g_sceneData.stuConfig._nSceneUpType==ADFCUT_X){nUp=GL_SCENEUPTYPEX;bNeg=false;}else if(g_sceneData.stuConfig._nSceneUpType==ADFCUT_NX){nUp=GL_SCENEUPTYPEX;bNeg=true;}else if(g_sceneData.stuConfig._nSceneUpType==ADFCUT_Y){nUp=GL_SCENEUPTYPEY;bNeg=false;}else if(g_sceneData.stuConfig._nSceneUpType==ADFCUT_NY){nUp=GL_SCENEUPTYPEY;bNeg=true;}else if(g_sceneData.stuConfig._nSceneUpType==ADFCUT_Z){nUp=GL_SCENEUPTYPEZ;bNeg=false;}else if(g_sceneData.stuConfig._nSceneUpType==ADFCUT_NZ){nUp=GL_SCENEUPTYPEZ;bNeg=true;}
return{GLSceneUpType:nUp,GLUpAxisNegative:bNeg,};}