module.exports = RconResponse;

function RconResponse(buffer) {
	this.size = buffer.readInt32LE(0);
	this.id = buffer.readInt32LE(4);
	this.type = RconResponse[buffer.readInt32LE(8)];
	this.body = buffer.toString('ascii', 12, buffer.length - 2);
}

RconResponse[0x03] = 'SERVERDATA_AUTH';
RconResponse[0x02] = 'SERVERDATA_AUTH_RESPONSE';
RconResponse[0x00] = 'SERVERDATA_RESPONSE_VALUE';