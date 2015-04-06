
$('span.chat_message_player_name').attr( 'data-bind', $('span.chat_message_player_name').attr( 'data-bind') + ", style: {color: isGlobal() && model.color_map()[player_name] ? model.color_map()[player_name] : ''}");

model.color_map = ko.observable({});
handlers.update_player_color_index = function(payload) {
	model.color_map(payload);
};
