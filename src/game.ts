
const _scene = new Entity('_scene')
engine.addEntity(_scene)
const transform = new Transform({
  position: new Vector3(0, 0, 0),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
_scene.addComponentOrReplace(transform)

const bedKing = new Entity('bedKing')
engine.addEntity(bedKing)
bedKing.setParent(_scene)
const transform2 = new Transform({
  position: new Vector3(11, 0, 0.25),
  rotation: new Quaternion(2.1770622922413687e-15, 5.960464477539063e-8, -4.6412446131629485e-15, -1),
  scale: new Vector3(3.6562552452087402, 2.3780393600463867, 2.9999969005584717)
})
bedKing.addComponentOrReplace(transform2)
const gltfShape = new GLTFShape("46b54f75-ad9d-4b63-98ac-a733c4088998/Bed King.glb")
gltfShape.withCollisions = true
gltfShape.isPointerBlocker = true
gltfShape.visible = true
bedKing.addComponentOrReplace(gltfShape)

const squareWoodTable = new Entity('squareWoodTable')
engine.addEntity(squareWoodTable)
squareWoodTable.setParent(_scene)
const transform3 = new Transform({
  position: new Vector3(11.5, 0, 1.75),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
squareWoodTable.addComponentOrReplace(transform3)
const gltfShape2 = new GLTFShape("36a9ea1e-61b9-4221-a580-74011955a191/Table_03/Table_03.glb")
gltfShape2.withCollisions = true
gltfShape2.isPointerBlocker = true
gltfShape2.visible = true
squareWoodTable.addComponentOrReplace(gltfShape2)

const squareWoodTable2 = new Entity('squareWoodTable2')
engine.addEntity(squareWoodTable2)
squareWoodTable2.setParent(_scene)
const transform4 = new Transform({
  position: new Vector3(3.5, 0, 1.75),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
squareWoodTable2.addComponentOrReplace(transform4)
squareWoodTable2.addComponentOrReplace(gltfShape2)

const wallPlainWhite2 = new Entity('wallPlainWhite2')
engine.addEntity(wallPlainWhite2)
wallPlainWhite2.setParent(_scene)
const transform5 = new Transform({
  position: new Vector3(32, 0, 0.2900068759918213),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(15.990442276000977, 2.5, 0.9999995827674866)
})
wallPlainWhite2.addComponentOrReplace(transform5)
const gltfShape3 = new GLTFShape("45eb9e1a-2eca-4b6f-a5c4-b0278dc7e635/PlainWhiteWall.glb")
gltfShape3.withCollisions = true
gltfShape3.isPointerBlocker = true
gltfShape3.visible = true
wallPlainWhite2.addComponentOrReplace(gltfShape3)

const wallPlainWhite3 = new Entity('wallPlainWhite3')
engine.addEntity(wallPlainWhite3)
wallPlainWhite3.setParent(_scene)
const transform6 = new Transform({
  position: new Vector3(0, 0, 0),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(-0.10023686289787292, 2.5, -53.123687744140625)
})
wallPlainWhite3.addComponentOrReplace(transform6)
wallPlainWhite3.addComponentOrReplace(gltfShape3)

const wallPlainWhite5 = new Entity('wallPlainWhite5')
engine.addEntity(wallPlainWhite5)
wallPlainWhite5.setParent(_scene)
const transform7 = new Transform({
  position: new Vector3(32, 0, 0),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.09999881684780121, 2.5, -53.05855178833008)
})
wallPlainWhite5.addComponentOrReplace(transform7)
wallPlainWhite5.addComponentOrReplace(gltfShape3)

const blueTable = new Entity('blueTable')
engine.addEntity(blueTable)
blueTable.setParent(_scene)
const transform8 = new Transform({
  position: new Vector3(23.5, 5.960464477539063e-8, 5),
  rotation: new Quaternion(7.224773876352659e-16, 5.960464477539063e-8, 1.7417053568027875e-15, 1),
  scale: new Vector3(3.500007152557373, 1, 0.7500035166740417)
})
blueTable.addComponentOrReplace(transform8)
const gltfShape4 = new GLTFShape("af8136bb-c528-4c8c-a986-c352b48241bf/Table_02/Table_02.glb")
gltfShape4.withCollisions = true
gltfShape4.isPointerBlocker = true
gltfShape4.visible = true
blueTable.addComponentOrReplace(gltfShape4)

const sofaBlack = new Entity('sofaBlack')
engine.addEntity(sofaBlack)
sofaBlack.setParent(_scene)
const transform9 = new Transform({
  position: new Vector3(27, 0, 1.9999995231628418),
  rotation: new Quaternion(7.224773876352659e-16, 5.960464477539063e-8, 1.7417053568027875e-15, 1),
  scale: new Vector3(2.250011682510376, 1.5, 1.5000110864639282)
})
sofaBlack.addComponentOrReplace(transform9)
const gltfShape5 = new GLTFShape("a9bb84fd-6556-4d92-bdd3-d66ffe963b3e/Sofa_Black.glb")
gltfShape5.withCollisions = true
gltfShape5.isPointerBlocker = true
gltfShape5.visible = true
sofaBlack.addComponentOrReplace(gltfShape5)

const sofaBlack2 = new Entity('sofaBlack2')
engine.addEntity(sofaBlack2)
sofaBlack2.setParent(_scene)
const transform10 = new Transform({
  position: new Vector3(20, 2.980232238769531e-7, 3.500000476837158),
  rotation: new Quaternion(-2.4631432232535356e-15, 0.7071068286895752, -8.429368847373553e-8, 0.7071067690849304),
  scale: new Vector3(1, 1.5, 1.5)
})
sofaBlack2.addComponentOrReplace(transform10)
sofaBlack2.addComponentOrReplace(gltfShape5)

const wallPlainWhite12 = new Entity('wallPlainWhite12')
engine.addEntity(wallPlainWhite12)
wallPlainWhite12.setParent(_scene)
const transform11 = new Transform({
  position: new Vector3(15.609859466552734, 0, 8.085156440734863),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(4.000003337860107, 2.5, 0.9999999403953552)
})
wallPlainWhite12.addComponentOrReplace(transform11)
wallPlainWhite12.addComponentOrReplace(gltfShape3)

const wallPlainWhite13 = new Entity('wallPlainWhite13')
engine.addEntity(wallPlainWhite13)
wallPlainWhite13.setParent(_scene)
const transform12 = new Transform({
  position: new Vector3(25.278921127319336, 0, 16),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(12.63985538482666, 2.5, 1)
})
wallPlainWhite13.addComponentOrReplace(transform12)
wallPlainWhite13.addComponentOrReplace(gltfShape3)

const windowCreamLarge = new Entity('windowCreamLarge')
engine.addEntity(windowCreamLarge)
windowCreamLarge.setParent(_scene)
const transform13 = new Transform({
  position: new Vector3(8.26772403717041, 4, 0.9999998211860657),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
windowCreamLarge.addComponentOrReplace(transform13)
const gltfShape6 = new GLTFShape("654624d3-0400-466e-bb63-a2663fc9430f/CreamWindowLarge.glb")
gltfShape6.withCollisions = true
gltfShape6.isPointerBlocker = true
gltfShape6.visible = true
windowCreamLarge.addComponentOrReplace(gltfShape6)

const puzzleDoor = new Entity('puzzleDoor')
engine.addEntity(puzzleDoor)
puzzleDoor.setParent(_scene)
const transform14 = new Transform({
  position: new Vector3(25.351959228515625, 0, 16),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2.4816060066223145, 2.8945112228393555, 1)
})
puzzleDoor.addComponentOrReplace(transform14)
const gltfShape7 = new GLTFShape("80acf386-6b11-42e4-942d-b7001babc8fd/Puzzle01_Door.glb")
gltfShape7.withCollisions = true
gltfShape7.isPointerBlocker = true
gltfShape7.visible = true
puzzleDoor.addComponentOrReplace(gltfShape7)
puzzleDoor.addComponent(new Animator());
puzzleDoor
  .getComponent(Animator)
  .addClip(new AnimationState("Door_Open", { looping: false }));
let isDoorOpen = false;
puzzleDoor.addComponent(
  new OnClick((): void => {
    if (!isDoorOpen) {
      isDoorOpen = true;
      puzzleDoor
        .getComponent(Animator)
        .getClip("Door_Open")
        .play();
    }
  })
);

const wood = new Entity('wood')
engine.addEntity(wood)
wood.setParent(_scene)
const gltfShape8 = new GLTFShape("78300a73-f19a-4e91-bb8a-08a641e29706/FloorBaseWood_01/FloorBaseWood_01.glb")
gltfShape8.withCollisions = true
gltfShape8.isPointerBlocker = true
gltfShape8.visible = true
wood.addComponentOrReplace(gltfShape8)
const transform15 = new Transform({
  position: new Vector3(8, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
wood.addComponentOrReplace(transform15)

const wood2 = new Entity('wood2')
engine.addEntity(wood2)
wood2.setParent(_scene)
wood2.addComponentOrReplace(gltfShape8)
const transform16 = new Transform({
  position: new Vector3(24, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
wood2.addComponentOrReplace(transform16)

const wallBookshelf = new Entity('wallBookshelf')
engine.addEntity(wallBookshelf)
wallBookshelf.setParent(_scene)
const transform17 = new Transform({
  position: new Vector3(5.242674350738525, 6, 15.71101188659668),
  rotation: new Quaternion(-5.837277581059123e-15, 1, -1.1920928244535389e-7, 0),
  scale: new Vector3(2.25, 2.25, 1.5)
})
wallBookshelf.addComponentOrReplace(transform17)
const gltfShape9 = new GLTFShape("b44ad9a1-d018-4152-ba5b-2fad3a66a872/Wall Bookshelf.glb")
gltfShape9.withCollisions = true
gltfShape9.isPointerBlocker = true
gltfShape9.visible = true
wallBookshelf.addComponentOrReplace(gltfShape9)

const drawers = new Entity('drawers')
engine.addEntity(drawers)
drawers.setParent(_scene)
const transform18 = new Transform({
  position: new Vector3(1.5, 0, 11.731131553649902),
  rotation: new Quaternion(-6.692902301134779e-16, -0.7071068286895752, 8.429368136830817e-8, -0.7071068286895752),
  scale: new Vector3(2.0000040531158447, 3, 3.000011682510376)
})
drawers.addComponentOrReplace(transform18)
const gltfShape10 = new GLTFShape("a7afb9c7-eb2a-4d05-807f-e284b128e434/Furnit 2.glb")
gltfShape10.withCollisions = true
gltfShape10.isPointerBlocker = true
gltfShape10.visible = true
drawers.addComponentOrReplace(gltfShape10)

const plantedFern = new Entity('plantedFern')
engine.addEntity(plantedFern)
plantedFern.setParent(_scene)
const transform19 = new Transform({
  position: new Vector3(1, 0, 14.567811965942383),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2.2162389755249023, 2.9192090034484863, 2.7665858268737793)
})
plantedFern.addComponentOrReplace(transform19)
const gltfShape11 = new GLTFShape("e9d4e87b-8d5f-4f03-a2e5-044effa9147f/PlantPot_03/PlantPot_03.glb")
gltfShape11.withCollisions = true
gltfShape11.isPointerBlocker = true
gltfShape11.visible = true
plantedFern.addComponentOrReplace(gltfShape11)

const wallPlainWhite = new Entity('wallPlainWhite')
engine.addEntity(wallPlainWhite)
wallPlainWhite.setParent(_scene)
wallPlainWhite.addComponentOrReplace(gltfShape3)
const transform20 = new Transform({
  position: new Vector3(29.802024841308594, 0, 15.694387435913086),
  rotation: new Quaternion(7.875446375225047e-15, 1, -1.1920926823449918e-7, 0),
  scale: new Vector3(1.0903016328811646, 2.5, 1)
})
wallPlainWhite.addComponentOrReplace(transform20)

const roofWhite = new Entity('roofWhite')
engine.addEntity(roofWhite)
roofWhite.setParent(_scene)
const transform21 = new Transform({
  position: new Vector3(0, 6, 0),
  rotation: new Quaternion(-5.67359905191407e-15, -1, 1.1920926823449918e-7, 0),
  scale: new Vector3(8, 1, 4)
})
roofWhite.addComponentOrReplace(transform21)
const gltfShape12 = new GLTFShape("8aa6d1d1-16c1-4805-a803-f25cd17ee06c/WhiteRoof.glb")
gltfShape12.withCollisions = true
gltfShape12.isPointerBlocker = true
gltfShape12.visible = true
roofWhite.addComponentOrReplace(gltfShape12)

const mediumOrnamentedStoneRail = new Entity('mediumOrnamentedStoneRail')
engine.addEntity(mediumOrnamentedStoneRail)
mediumOrnamentedStoneRail.setParent(_scene)
const transform22 = new Transform({
  position: new Vector3(31.909582138061523, 10, 15.5),
  rotation: new Quaternion(-1.5394153601527394e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000007152557373, 1.5, 1.0000007152557373)
})
mediumOrnamentedStoneRail.addComponentOrReplace(transform22)
const gltfShape13 = new GLTFShape("e4586159-443d-44f0-a26d-f5b90a148cb2/FenceStoneMedium_01/FenceStoneMedium_01.glb")
gltfShape13.withCollisions = true
gltfShape13.isPointerBlocker = true
gltfShape13.visible = true
mediumOrnamentedStoneRail.addComponentOrReplace(gltfShape13)

const mediumOrnamentedStoneRail2 = new Entity('mediumOrnamentedStoneRail2')
engine.addEntity(mediumOrnamentedStoneRail2)
mediumOrnamentedStoneRail2.setParent(_scene)
mediumOrnamentedStoneRail2.addComponentOrReplace(gltfShape13)
const transform23 = new Transform({
  position: new Vector3(28.909582138061523, 10, 15.5),
  rotation: new Quaternion(-1.5394153601527394e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000009536743164, 1.5, 1.0000009536743164)
})
mediumOrnamentedStoneRail2.addComponentOrReplace(transform23)

const mediumOrnamentedStoneRail3 = new Entity('mediumOrnamentedStoneRail3')
engine.addEntity(mediumOrnamentedStoneRail3)
mediumOrnamentedStoneRail3.setParent(_scene)
mediumOrnamentedStoneRail3.addComponentOrReplace(gltfShape13)
const transform24 = new Transform({
  position: new Vector3(25.909582138061523, 10, 15.5),
  rotation: new Quaternion(-1.5394153601527394e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000009536743164, 1.5, 1.0000009536743164)
})
mediumOrnamentedStoneRail3.addComponentOrReplace(transform24)

const mediumOrnamentedStoneRail4 = new Entity('mediumOrnamentedStoneRail4')
engine.addEntity(mediumOrnamentedStoneRail4)
mediumOrnamentedStoneRail4.setParent(_scene)
mediumOrnamentedStoneRail4.addComponentOrReplace(gltfShape13)
const transform25 = new Transform({
  position: new Vector3(22.909582138061523, 10, 15.5),
  rotation: new Quaternion(-1.5394153601527394e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000011920928955, 1.5, 1.0000011920928955)
})
mediumOrnamentedStoneRail4.addComponentOrReplace(transform25)

const mediumOrnamentedStoneRail5 = new Entity('mediumOrnamentedStoneRail5')
engine.addEntity(mediumOrnamentedStoneRail5)
mediumOrnamentedStoneRail5.setParent(_scene)
mediumOrnamentedStoneRail5.addComponentOrReplace(gltfShape13)
const transform26 = new Transform({
  position: new Vector3(19.909582138061523, 10, 15.5),
  rotation: new Quaternion(-1.5394153601527394e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000009536743164, 1.5, 1.0000009536743164)
})
mediumOrnamentedStoneRail5.addComponentOrReplace(transform26)

const mediumOrnamentedStoneRail6 = new Entity('mediumOrnamentedStoneRail6')
engine.addEntity(mediumOrnamentedStoneRail6)
mediumOrnamentedStoneRail6.setParent(_scene)
mediumOrnamentedStoneRail6.addComponentOrReplace(gltfShape13)
const transform27 = new Transform({
  position: new Vector3(16.909582138061523, 10, 15.5),
  rotation: new Quaternion(-1.5394153601527394e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000011920928955, 1.5, 1.0000011920928955)
})
mediumOrnamentedStoneRail6.addComponentOrReplace(transform27)

const mediumOrnamentedStoneRail7 = new Entity('mediumOrnamentedStoneRail7')
engine.addEntity(mediumOrnamentedStoneRail7)
mediumOrnamentedStoneRail7.setParent(_scene)
mediumOrnamentedStoneRail7.addComponentOrReplace(gltfShape13)
const transform28 = new Transform({
  position: new Vector3(13.909582138061523, 10, 15.5),
  rotation: new Quaternion(-1.5394153601527394e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000011920928955, 1.5, 1.0000011920928955)
})
mediumOrnamentedStoneRail7.addComponentOrReplace(transform28)

const mediumOrnamentedStoneRail8 = new Entity('mediumOrnamentedStoneRail8')
engine.addEntity(mediumOrnamentedStoneRail8)
mediumOrnamentedStoneRail8.setParent(_scene)
mediumOrnamentedStoneRail8.addComponentOrReplace(gltfShape13)
const transform29 = new Transform({
  position: new Vector3(10.909582138061523, 10, 15.5),
  rotation: new Quaternion(-1.5394153601527394e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000014305114746, 1.5, 1.0000014305114746)
})
mediumOrnamentedStoneRail8.addComponentOrReplace(transform29)

const mediumOrnamentedStoneRail9 = new Entity('mediumOrnamentedStoneRail9')
engine.addEntity(mediumOrnamentedStoneRail9)
mediumOrnamentedStoneRail9.setParent(_scene)
mediumOrnamentedStoneRail9.addComponentOrReplace(gltfShape13)
const transform30 = new Transform({
  position: new Vector3(4.909582138061523, 10, 15.5),
  rotation: new Quaternion(-1.5394153601527394e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000016689300537, 1.5, 1.0000016689300537)
})
mediumOrnamentedStoneRail9.addComponentOrReplace(transform30)

const mediumOrnamentedStoneRail10 = new Entity('mediumOrnamentedStoneRail10')
engine.addEntity(mediumOrnamentedStoneRail10)
mediumOrnamentedStoneRail10.setParent(_scene)
mediumOrnamentedStoneRail10.addComponentOrReplace(gltfShape13)
const transform31 = new Transform({
  position: new Vector3(7.909582138061523, 10, 15.5),
  rotation: new Quaternion(-1.5394153601527394e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000014305114746, 1.5, 1.0000014305114746)
})
mediumOrnamentedStoneRail10.addComponentOrReplace(transform31)

const mediumOrnamentedStoneRail11 = new Entity('mediumOrnamentedStoneRail11')
engine.addEntity(mediumOrnamentedStoneRail11)
mediumOrnamentedStoneRail11.setParent(_scene)
mediumOrnamentedStoneRail11.addComponentOrReplace(gltfShape13)
const transform32 = new Transform({
  position: new Vector3(3.0893936157226562, 10, 15.5),
  rotation: new Quaternion(-1.5394153601527394e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000019073486328, 1.5, 1.0000019073486328)
})
mediumOrnamentedStoneRail11.addComponentOrReplace(transform32)
