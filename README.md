# AccelerationStructures
Three different demos of acceleration structures like an Octree for collision resolution, a Bounding Volume Hierarchy and a KD-tree for ray tracing

# Octree
With this acceleration structure we can vary the size of the octree and accomplish a media of 600 intersection test for every frame, while
with a brute force approach we make more than 20k intersection test each frame.

![This is a alt text.](/OctreeImplementation/resources/octree.gif "Octree in action")

# Bounding Volume Hierarchy
In this implementation we create a BVH using a model and the triangles belonging to him, we can build the BVH in three diferent modes and 
explore each leaf of the tree.

![This is a alt text.](/BoundingVolumeHierarchy/resources/BVH.gif "Octree in action")

# KD-Tree
This implementation of a kd-tree is used for a custom raytracer that wasnt done by myself, but I have another project in github where
I implement a bidirectional ray tracer where I use this same kd-tree implementation which is based on creating different clusters of 
triangles and dividing them if necesary until a leaf is created given different cirsumstances.

![This is a alt text.](/KdTreeImplementation/resources/kd-tree-github.png "Octree in action")