precision highp float;
precision highp int;

uniform mat4 viewMatrix;
uniform mat4 projectionMatrix;
uniform mat4 modelMatrix;
uniform mat3 normalMatrix;

attribute vec3 position;
attribute vec3 normal;

uniform float outline;

void main() 
{
	vec4 origin_position;
	vec4 outline_position;

	vec3 dir = normalize(normal);

	//origin_position = viewMatrix * modelMatrix * vec4(position, 1.0);
	//outline_position = origin_position + vec4(normalMatrix * dir, 0.0);

	outline_position = viewMatrix * modelMatrix * vec4(position + dir*outline, 1.0);


	gl_Position =  projectionMatrix * outline_position;
}