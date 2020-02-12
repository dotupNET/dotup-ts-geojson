
/**
 * https://github.com/geojson/schema
 * https://tools.ietf.org/html/rfc7946
 */

export declare type GeoGeometryType = "Point" | "MultiPoint" | "LineString" | "MultiLineString" | "Polygon" | "MultiPolygon" | "GeometryCollection";

export declare type GeoJsonType = "Feature" | "FeatureCollection" | GeoGeometryType;

export declare type GeoCoordinates = PositionCoordinates | PositionArrayCoordinates | MultiPositionCoordinates | MultiPolygonCoordinates;
/**
 * The first two elements are longitude and latitude, or
 * easting and northing, precisely in that order and using decimal
 * numbers.  Altitude or elevation MAY be included as an optional third element.
 */

// one position in the case of a Point geometry,

/**
 * Array with lon, lat, optional alt
 */
export declare type PositionCoordinates = number[];

// an array of positions in the case of a LineString or MultiPoint geometry
export declare type PositionArrayCoordinates = Array<number[]>;

// an array of LineString or linear ring (see Section 3.1.6)
// coordinates in the case of a Polygon or MultiLineString geometry,
export declare type MultiPositionCoordinates = Array<PositionArrayCoordinates>;

// an array of Polygon coordinates in the case of a MultiPolygon geometry.
export declare type MultiPolygonCoordinates = Array<MultiPositionCoordinates>;

/**

https://tools.ietf.org/html/rfc7946#page-5

3.1.2.  Point

   For type "Point", the "coordinates" member is a single position.

3.1.3.  MultiPoint

   For type "MultiPoint", the "coordinates" member is an array of
   positions.

3.1.4.  LineString

   For type "LineString", the "coordinates" member is an array of two or
   more positions.

3.1.5.  MultiLineString

   For type "MultiLineString", the "coordinates" member is an array of
   LineString coordinate arrays.

3.1.6.  Polygon

   To specify a constraint specific to Polygons, it is useful to
   introduce the concept of a linear ring:

   o  A linear ring is a closed LineString with four or more positions.

   o  The first and last positions are equivalent, and they MUST contain
      identical values; their representation SHOULD also be identical.

   o  A linear ring is the boundary of a surface or the boundary of a
      hole in a surface.

   o  A linear ring MUST follow the right-hand rule with respect to the
      area it bounds, i.e., exterior rings are counterclockwise, and
      holes are clockwise.

   Note: the [GJ2008] specification did not discuss linear ring winding
   order.  For backwards compatibility, parsers SHOULD NOT reject
   Polygons that do not follow the right-hand rule.

   Though a linear ring is not explicitly represented as a GeoJSON
   geometry type, it leads to a canonical formulation of the Polygon
   geometry type definition as follows:

   o  For type "Polygon", the "coordinates" member MUST be an array of
      linear ring coordinate arrays.

   o  For Polygons with more than one of these rings, the first MUST be
      the exterior ring, and any others MUST be interior rings.  The
      exterior ring bounds the surface, and the interior rings (if
      present) bound holes within the surface.

3.1.7.  MultiPolygon

   For type "MultiPolygon", the "coordinates" member is an array of
   Polygon coordinate arrays.

3.1.8.  GeometryCollection

   A GeoJSON object with type "GeometryCollection" is a Geometry object.
   A GeometryCollection has a member with the name "geometries".  The
   value of "geometries" is an array.  Each element of this array is a
   GeoJSON Geometry object.  It is possible for this array to be empty.

   Unlike the other geometry types described above, a GeometryCollection
   can be a heterogeneous composition of smaller Geometry objects.  For
   example, a Geometry object in the shape of a lowercase roman "i" can
   be composed of one point and one LineString.

   GeometryCollections have a different syntax from single type Geometry
   objects (Point, LineString, and Polygon) and homogeneously typed
   multipart Geometry objects (MultiPoint, MultiLineString, and
   MultiPolygon) but have no different semantics.  Although a
   GeometryCollection object has no "coordinates" member, it does have
   coordinates: the coordinates of all its parts belong to the
   collection.  The "geometries" member of a GeometryCollection
   describes the parts of this composition.  Implementations SHOULD NOT
   apply any additional semantics to the "geometries" array.

   To maximize interoperability, implementations SHOULD avoid nested
   GeometryCollections.  Furthermore, GeometryCollections composed of a
   single part or a number of parts of a single type SHOULD be avoided
   when that single part or a single object of multipart type
   (MultiPoint, MultiLineString, or MultiPolygon) could be used instead.
 */