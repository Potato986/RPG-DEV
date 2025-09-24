{
	"Items": [
		{
			"RegistryName": "itemexample",
			"ItemType": 0b,
			"MaxStackSize": 64,
			"CreateAllFiles": 0b
		},
		{
			"MaxStackDamage": 2500,
			"RepairItem": {
				"id": "minecraft:gold_nugget",
				"Count": 1b,
				"Damage": 0s
			},
			"ItemType": 1b,
			"Material": "GOLD",
			"EntityDamage": 2.5d,
			"CollectionMaterial": {
				"Material": "WEB",
				"Speed": 15.0f
			},
			"RegistryName": "weaponexample",
			"SpeedAttack": -2.4d,
			"CreateAllFiles": 0b,
			"IsFull3D": 1b
		},
		{
			"ToolClass": "pickaxe",
			"CollectionBlocks": [
				"minecraft:stone",
				"minecraft:obsidian"
			],
			"HarvestLevel": 2,
			"ItemType": 2b,
			"EntityDamage": 0.0d,
			"RegistryName": "toolexample",
			"Material": "GOLD",
			"Enchantability": 25,
			"MaxStackDamage": 2000,
			"RepairItem": {
				"id": "minecraft:gold_nugget",
				"Count": 1b,
				"Damage": 0s
			},
			"Efficiency": 4.0f,
			"CreateAllFiles": 0b,
			"IsFull3D": 1b
		},
		{
			"ToolClass": "axe",
			"HarvestLevel": 2,
			"MaxStackDamage": 2200,
			"ItemType": 2b,
			"RepairItem": {
				"id": "minecraft:gold_ingot",
				"Count": 1b,
				"Damage": 0s
			},
			"EntityDamage": 5.0d,
			"RegistryName": "axeexample",
			"Material": "GOLD",
			"Enchantability": 28,
			"Efficiency": 4.25f,
			"CreateAllFiles": 0b,
			"IsFull3D": 1b
		},
		{
			"Toughness": [
				2.2f,
				3.5f,
				1.8f
			],
			"EquipmentSlots": [
				"HEAD",
				"Chest",
				"feet"
			],
			"MaxStackDamage": [I;2250,3100,1800],
			"RenderIndex": 4,
			"ItemType": 3b,
			"RepairItem": {
				"id": "minecraft:gold_nugget",
				"Count": 1b,
				"Damage": 0s
			},
			"EntityDamage": 0.0d,
			"Material": "GOLD",
			"RegistryName": "armorexample",
			"DamageReduceAmount": [I;5,7,4],
			"CreateAllFiles": 0b
		},
		{
			"Toughness": [
				2.2f,
				3.5f,
				2.6f,
				1.8f
			],
			"Display": {
				"CHEST": {
					"firstperson_lefthand": {
						"rotation": [
							0.0f,
							280.0f,
							0.0f
						],
						"translation": [
							0.57f,
							0.1f,
							-0.085f
						],
						"scale": [
							0.5f,
							0.5f,
							0.5f
						]
					},
					"ground": {
						"translation": [
							0.5f,
							0.0f,
							0.5f
						],
						"scale": [
							0.5f,
							0.5f,
							0.5f
						]
					},
					"thirdperson_lefthand": {
						"translation": [
							0.0f,
							0.0f,
							0.5f
						],
						"scale": [
							0.5f,
							0.5f,
							0.5f
						]
					},
					"thirdperson_righthand": {
						"translation": [
							0.5f,
							0.0f,
							0.5f
						],
						"scale": [
							0.5f,
							0.5f,
							0.5f
						]
					},
					"firstperson_righthand": {
						"rotation": [
							0.0f,
							280.0f,
							0.0f
						],
						"translation": [
							0.85f,
							-0.1f,
							0.2f
						],
						"scale": [
							0.6f,
							0.6f,
							0.6f
						]
					},
					"fixed": {
						"rotation": [
							0.0f,
							180.0f,
							0.0f
						],
						"translation": [
							0.5f,
							-0.65f,
							0.45f
						]
					},
					"head": {
						"rotation": [
							270.0f,
							0.0f,
							0.0f
						],
						"translation": [
							0.5f,
							1.0f,
							1.65f
						]
					},
					"gui": {
						"rotation": [
							30.0f,
							45.0f,
							0.0f
						],
						"translation": [
							0.49f,
							-0.41f,
							0.0f
						],
						"scale": [
							0.9f,
							0.9f,
							0.9f
						]
					}
				},
				"LEGS": {
					"firstperson_lefthand": {
						"rotation": [
							0.0f,
							280.0f,
							0.0f
						],
						"translation": [
							0.65f,
							0.4f,
							-0.085f
						],
						"scale": [
							0.5f,
							0.5f,
							0.5f
						]
					},
					"ground": {
						"translation": [
							0.5f,
							0.25f,
							0.5f
						],
						"scale": [
							0.6f,
							0.6f,
							0.6f
						]
					},
					"thirdperson_lefthand": {
						"translation": [
							-0.15f,
							0.35f,
							0.5f
						],
						"scale": [
							0.65f,
							0.65f,
							0.65f
						]
					},
					"thirdperson_righthand": {
						"translation": [
							0.5f,
							0.35f,
							0.5f
						],
						"scale": [
							0.65f,
							0.65f,
							0.65f
						]
					},
					"firstperson_righthand": {
						"rotation": [
							0.0f,
							280.0f,
							0.0f
						],
						"translation": [
							0.95f,
							0.25f,
							0.2f
						],
						"scale": [
							0.6f,
							0.6f,
							0.6f
						]
					},
					"fixed": {
						"rotation": [
							0.0f,
							180.0f,
							0.0f
						],
						"translation": [
							0.5f,
							0.05f,
							0.475f
						]
					},
					"head": {
						"rotation": [
							270.0f,
							0.0f,
							0.0f
						],
						"translation": [
							0.5f,
							1.0f,
							1.0f
						]
					},
					"gui": {
						"rotation": [
							30.0f,
							45.0f,
							0.0f
						],
						"translation": [
							0.5f,
							0.05f,
							0.0f
						]
					}
				},
				"FEET": {
					"firstperson_lefthand": {
						"rotation": [
							0.0f,
							280.0f,
							0.0f
						],
						"translation": [
							0.72f,
							0.435f,
							-0.585f
						],
						"scale": [
							0.85f,
							0.85f,
							0.85f
						]
					},
					"ground": {
						"translation": [
							0.5f,
							0.35f,
							0.5f
						],
						"scale": [
							0.65f,
							0.65f,
							0.65f
						]
					},
					"thirdperson_lefthand": {
						"rotation": [
							90.0f,
							180.0f,
							0.0f
						],
						"translation": [
							1.15f,
							0.5f,
							0.5f
						],
						"scale": [
							0.65f,
							0.65f,
							0.65f
						]
					},
					"thirdperson_righthand": {
						"rotation": [
							90.0f,
							180.0f,
							0.0f
						],
						"translation": [
							0.5f,
							0.5f,
							0.5f
						],
						"scale": [
							0.65f,
							0.65f,
							0.65f
						]
					},
					"firstperson_righthand": {
						"rotation": [
							0.0f,
							280.0f,
							0.0f
						],
						"translation": [
							0.95f,
							0.4f,
							0.2f
						],
						"scale": [
							0.85f,
							0.85f,
							0.85f
						]
					},
					"fixed": {
						"rotation": [
							0.0f,
							180.0f,
							0.0f
						],
						"translation": [
							0.5f,
							0.2f,
							0.475f
						]
					},
					"head": {
						"rotation": [
							0.0f,
							180.0f,
							0.0f
						],
						"translation": [
							0.5f,
							0.925f,
							0.4f
						]
					},
					"gui": {
						"rotation": [
							30.0f,
							45.0f,
							0.0f
						],
						"translation": [
							0.5f,
							0.3f,
							0.0f
						]
					}
				},
				"HEAD": {
					"firstperson_lefthand": {
						"rotation": [
							0.0f,
							280.0f,
							0.0f
						],
						"translation": [
							0.57f,
							-0.225f,
							-0.085f
						],
						"scale": [
							0.5f,
							0.5f,
							0.5f
						]
					},
					"ground": {
						"translation": [
							0.5f,
							-0.375f,
							0.5f
						],
						"scale": [
							0.5f,
							0.5f,
							0.5f
						]
					},
					"thirdperson_lefthand": {
						"rotation": [
							0.0f,
							180.0f,
							0.0f
						],
						"translation": [
							1.0f,
							-0.375f,
							0.5f
						],
						"scale": [
							0.5f,
							0.5f,
							0.5f
						]
					},
					"thirdperson_righthand": {
						"rotation": [
							0.0f,
							180.0f,
							0.0f
						],
						"translation": [
							0.5f,
							-0.375f,
							0.5f
						],
						"scale": [
							0.5f,
							0.5f,
							0.5f
						]
					},
					"firstperson_righthand": {
						"rotation": [
							0.0f,
							280.0f,
							0.0f
						],
						"translation": [
							0.85f,
							-0.5f,
							0.2f
						],
						"scale": [
							0.6f,
							0.6f,
							0.6f
						]
					},
					"fixed": {
						"rotation": [
							0.0f,
							180.0f,
							0.0f
						],
						"translation": [
							0.5f,
							-0.85f,
							0.4f
						],
						"scale": [
							0.75f,
							0.75f,
							0.75f
						]
					},
					"head": {
					},
					"gui": {
						"rotation": [
							30.0f,
							45.0f,
							0.0f
						],
						"translation": [
							0.5f,
							-1.0f,
							0.0f
						]
					}
				}
			},
			"EquipmentSlots": [
				"HEAD",
				"Chest",
				"LeGs",
				"feet"
			],
			"MaxStackDamage": [I;2250,3100,2700,1800],
			"OBJData": {
				"Leg Right Mesh Names": [
					"legright"
				],
				"Boot Right Mesh Names": [
					"bootright"
				],
				"Boot Left Mesh Names": [
					"bootleft"
				],
				"Foot Right Mesh Names": [
					"footright"
				],
				"Wrist Left Mesh Names": [
					"wristleft"
				],
				"Head Mesh Names": [
					"head"
				],
				"Wrist Right Mesh Names": [
					"wristright"
				],
				"Leg Left Mesh Names": [
					"legleft"
				],
				"Belt Mesh Names": [
					"belt"
				],
				"Arm Right Mesh Names": [
					"armright"
				],
				"Foot Left Mesh Names": [
					"footleft"
				],
				"Arm Left Mesh Names": [
					"armleft"
				],
				"Body Mesh Names": [
					"body"
				]
			},
			"ItemType": 3b,
			"RepairItem": {
				"id": "minecraft:iron_ingot",
				"Count": 1b,
				"Damage": 0s
			},
			"EntityDamage": 0.0d,
			"Material": "IRON",
			"RegistryName": "armorobjexample",
			"DamageReduceAmount": [I;5,7,6,4],
			"CreateAllFiles": 0b
		},
		{
			"MaxStackDamage": 6500,
			"ItemType": 4b,
			"RepairItem": {
				"id": "minecraft:iron_nugget",
				"Count": 1b,
				"Damage": 0s
			},
			"EntityDamage": 0.0d,
			"RegistryName": "shieldexample",
			"Material": "IRON",
			"CreateAllFiles": 0b
		},
		{
			"DrawstringSpeed": 20.0f,
			"SetFlame": 0b,
			"CritChance": 0.25f,
			"MaxStackDamage": 1250,
			"ItemType": 5b,
			"RepairItem": {
				"id": "minecraft:planks",
				"Count": 1b,
				"Damage": 0s
			},
			"EntityDamage": 2.0d,
			"Material": "WOOD",
			"RegistryName": "bowexample",
			"CreateAllFiles": 0b
		},
		{
			"PotionEffect": {
				"ShowParticles": 0b,
				"Probability": 0.95f,
				"DurationTicks": 45,
				"Amplifier": 0,
				"Ambient": 1b,
				"Potion": "minecraft:fire_resistance"
			},
			"UseDuration": 32,
			"AlwaysEdible": 1b,
			"SaturationModifier": 0.1f,
			"IsWolfFood": 0b,
			"ItemType": 6b,
			"MaxStackSize": 32,
			"RegistryName": "foodexample",
			"HealAmount": 1,
			"CreateAllFiles": 0b
		},
		{
			"MaxStackDamage": 150,
			"ItemType": 8b,
			"RepairItem": {
				"id": "minecraft:stick",
				"Count": 1b,
				"Damage": 0s
			},
			"RegistryName": "fishingrodexample",
			"MaxStackSize": 1,
			"Enchantability": 5,
			"CreateAllFiles": 0b
		}
	],
	"Potions": [
		{
			"LiquidColor": 16777215,
			"Modifiers": [
				{
					"AttributeDefValue": 5.0d,
					"AttributeMaxValue": 50.0d,
					"Amount": 2.0d,
					"AttributeMinValue": -50.0d,
					"Operation": 2,
					"UUID": "621acf8e-658f-47a4-b1fb-7a7aa43d3a97",
					"AttributeName": "generic.maxHealth"
				}
			],
			"BaseDelay": 200,
			"Duration": 20,
			"ItemType": 7b,
			"MaxStackSize": 16,
			"IsBadEffect": 0b,
			"RegistryName": "potionexample",
			"CureItem": {
				"id": "minecraft:carrot",
				"Count": 1b,
				"Damage": 0s
			},
			"IsInstant": 0b,
			"CreateAllFiles": 0b,
			"IsBeneficial": 1b
		}
	]
}
