
$('span.chat_message_player_name').attr( 'data-bind', $('span.chat_message_player_name').attr( 'data-bind') + ", style: (isGlobal() && model.color_map()[player_name] ? model.color_map()[player_name] : '')");

var elem = '<span style="width:10px;height:3px;margin-bottom:2px;display:inline-block" data-bind="visible: isGlobal, style: {backgroundColor: (isGlobal() && model.color_map()[player_name] ? model.color_map()[player_name].color : \'\')}"></span>'

$('span.chat_message_player_name').parent().prepend(elem);

model.color_map = ko.observable({});
handlers.update_player_color_index = function(payload) {
	model.color_map(payload);
};
