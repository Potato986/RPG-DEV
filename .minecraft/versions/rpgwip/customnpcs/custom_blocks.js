{
	"Blocks": [
		{
			"IsGaseous": 0b,
			"Luminosity": 5,
			"BlockType": 1b,
			"Temperature": 300,
			"Viscosity": 900,
			"RegistryName": "liquidexample",
			"Density": 1100,
			"Color": -1,
			"Material": "WATER",
			"Resistance": 2.0f,
			"CreateAllFiles": 0b
		},
		{
			"BlockType": 0b,
			"IsOpaqueCube": 0b,
			"RegistryName": "blockexample",
			"IsFullCube": 0b,
			"Material": "STONE",
			"BlockRenderType": "MODEL",
			"Resistance": 10.0f,
			"SoundType": "GROUND",
			"Hardness": 5.0f,
			"IsPassable": 0b,
			"IsLadder": 0b,
			"AABB": [
				0.0625d,
				0.0625d,
				0.0625d,
				0.9375d,
				0.9375d,
				0.9375d
			],
			"LightLevel": 0.0f,
			"CreateAllFiles": 0b
		},
		{
			"BlockType": 0b,
			"RegistryName": "facingblockexample",
			"BlockRenderType": "MODEL",
			"Property": {
				"Type": 4b,
				"Name": "facing"
			},
			"CreateAllFiles": 0b
		},
		{
			"Size": 14,
			"BlockType": 2b,
			"GUIColor": 4631430,
			"IsChest": 1b,
			"RegistryName": "chestexample",
			"Material": "WOOD",
			"CreateAllFiles": 0b,
			"Name": "Custom Chest"
		},
		{
			"Name": "Custom Container",
			"BlockType": 2b,
			"GUIColor": [I;56460,14450688],
			"AABB": [
				0.0625d,
				0.0d,
				0.0625d,
				0.9375d,
				1.0d,
				0.9375d
			],
			"RegistryName": "containerexample",
			"Material": "STONE",
			"CreateAllFiles": 0b,
			"Size": 96
		},
		{
			"Material": "STONE",
			"BlockType": 3b,
			"RegistryName": "stairsexample",
			"IsOpaqueCube": 0b,
			"CreateAllFiles": 0b,
			"IsFullCube": 0b
		},
		{
			"Material": "STONE",
			"BlockType": 4b,
			"RegistryName": "slabexample",
			"IsOpaqueCube": 0b,
			"CreateAllFiles": 0b,
			"IsFullCube": 0b
		},
		{
			"DimensionID": 100,
			"BlockType": 5b,
			"HomeDimensionID": 0,
			"RenderData": {
				"SecondSpeed": 800.0f,
				"SpawnParticle": "CRIT",
				"Transparency": 0.5f
			},
			"RegistryName": "portalexample",
			"Material": "PORTAL",
			"CreateAllFiles": 0b
		},
		{
			"Hardness": 1.0f,
			"BlockType": 6b,
			"RegistryName": "doorexample",
			"Material": "IRON",
			"LightLevel": 2.0f,
			"CreateAllFiles": 0b,
			"Resistance": 25.0f,
			"InteractOpen": 1b
		}
	]
}
