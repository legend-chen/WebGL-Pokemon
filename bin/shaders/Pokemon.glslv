precision highp float;
precision highp int;

uniform mat4 viewMatrix;
uniform mat4 projectionMatrix;
uniform mat4 modelMatrix;
uniform mat3 normalMatrix;

attribute vec3 position;
attribute vec2 uv;
attribute vec3 normal;

uniform vec4 uvTransform;
varying vec2 vUv;
uniform vec4 offsetRepeat;

varying vec3 vViewPosition;
varying vec3 vNormal;

void main() 
{
	vec4 mvPosition;

	mvPosition = viewMatrix * modelMatrix * vec4( position, 1.0);

	gl_Position = projectionMatrix * mvPosition;

	vViewPosition = -mvPosition.xyz;

	vUv = uv * uvTransform.xy - uvTransform.zw;
	
	vNormal = normalize(normalMatrix * normal);
}