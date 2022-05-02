#version 440 core

layout(location = 0) in vec3 attr_position;
layout(location = 1) in vec3 attr_normal;

layout(location = 0) uniform mat4 uniform_mvp;
layout(location = 1) uniform vec4 uniform_color;
layout(location = 2) uniform mat4 uniform_mv;
layout(location = 3) uniform mat3 uniform_normal_matrix;
layout(location = 4) uniform vec3 uniform_view_light_pos;

out vec3 var_view_pos;
out vec3 var_view_normal;

void main()
{
    // Position/normal in the eye space
    var_view_pos    = vec3(uniform_mv * vec4(attr_position, 1));
    var_view_normal = uniform_normal_matrix * attr_normal;

    // Position
    gl_Position = uniform_mvp * vec4(attr_position, 1);
}