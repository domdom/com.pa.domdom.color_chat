
//$('span.chat_message_player_name').attr( 'data-bind', $('span.chat_message_player_name').attr( 'data-bind') + ", style: ((isGlobal() || isServer()) && model.color_map()[player_name] ? model.color_map()[player_name] : '')");

var elem = '<span style="line-height:20px;margin:0;width:3px;height:11px;margin-bottom:-1px;display:inline-block" data-bind="visible: (isGlobal() || isServer()), style: {backgroundColor: $root.getMessageFlairColor($data)}"></span>'

$('span.chat_message_player_name').parent().prepend(elem);

$('.server_message span.chat_message_body').parent().prepend(elem);

model.getMessageFlairColor = function(data) {
	var color_map = model.color_map();

	if (data.isServer()) {
		var message = data.message;

		for (var i = message.length; i >= 0; i--) {
			var _name = message.substring(0, i);
			if (_name in color_map) {
				return color_map[_name].color;
			}
		}
	}
	if (data.isGlobal()) {	
		if (data.player_name in color_map) {
			return color_map[data.player_name].color;
		}
	}
	return '';
}

model.color_map = ko.observable({});
handlers.update_player_color_index = function(payload) {
	model.color_map(payload);
};
