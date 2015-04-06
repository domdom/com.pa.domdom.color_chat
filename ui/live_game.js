model.player_color_index = ko.computed(function() {
	var primary_map = {};

	var players = model.players();
	for (var p in players) {
		for (var s in (players[p].slots)) {
			primary_map[players[p].slots[s]] = players[p].color;
		}
	}
	api.panels.chat.message('update_player_color_index', primary_map);
	return primary_map;
});