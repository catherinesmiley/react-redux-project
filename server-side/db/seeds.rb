camping = Category.create(name: "Camping", description: "Going camping? Make sure you have everything on this list!")
camping.items.create([{ name: "tent" }, { name: "sleeping bag" }, {name: "flashlight" }, { name: "soap" }])

road_trip = Category.create(name: "Road Trip", description: "Tip: wear comfy clothes!")
road_trip.items.create([{ name: "cash for tolls" }, { name: "portable or car charger" }, { name: "water" }, { name: "snacks" }])